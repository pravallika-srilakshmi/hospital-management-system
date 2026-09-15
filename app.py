"""
V MediCare Full-Stack Flask Web Server & REST API
Exposes endpoints for appointments, medical records, laboratory diagnostic tests,
pharmacy, billing, and role-based authentication.
"""

import os
import re
import json
import sqlite3
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from database import init_db, get_connection, generate_patient_id, generate_appointment_id

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# Initialize database tables on startup
init_db()

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/complete-web')
def complete_web():
    return send_from_directory('.', 'complete web.html')

# ============================================================================
# REST APIs
# ============================================================================

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'service': 'V MediCare Hospital Management System API',
        'version': '2.0.0'
    })

# ----------------------------------------------------------------------------
# 1. PATIENT REGISTRATION ENDPOINT
# ----------------------------------------------------------------------------
@app.route('/api/auth/patient/register', methods=['POST'])
def patient_register():
    data = request.get_json() or {}
    name = data.get('name', '').strip() or data.get('full_name', '').strip()
    email = data.get('email', '').strip().lower()
    phone = data.get('phone', '').strip()
    dob = data.get('dob', '').strip() or data.get('date_of_birth', '').strip()
    gender = data.get('gender', '').strip()
    blood_group = data.get('bloodGroup', '').strip() or data.get('blood_group', '').strip()
    address = data.get('address', '').strip()
    emergency_contact = data.get('emergencyContact', '').strip() or phone
    password = data.get('password', '')

    # Validate required fields
    if not name or not email or not phone or not dob or not gender or not address or not password:
        return jsonify({'error': 'All required registration fields must be filled.'}), 400

    # Validate email format
    if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email):
        return jsonify({'error': 'Please enter a valid email address.'}), 400

    # Validate password length
    if len(password) < 6:
        return jsonify({'error': 'Password must be at least 6 characters long.'}), 400

    conn = get_connection()
    cursor = conn.cursor()

    # Check whether the email is already registered in patients or users
    cursor.execute("SELECT patient_id FROM patients WHERE LOWER(email) = LOWER(?)", (email,))
    if cursor.fetchone():
        conn.close()
        return jsonify({'error': 'An account with this email address is already registered.'}), 409

    cursor.execute("SELECT id FROM users WHERE LOWER(email) = LOWER(?)", (email,))
    if cursor.fetchone():
        conn.close()
        return jsonify({'error': 'An account with this email address already exists.'}), 409

    # Generate Unique Patient ID (PAT + YEAR + 4-digit number e.g. PAT20260002)
    patient_id = generate_patient_id(conn)
    password_hash = generate_password_hash(password)
    user_id = f"USR_{patient_id}"

    try:
        # Insert into patients table
        cursor.execute("""
            INSERT INTO patients (patient_id, full_name, date_of_birth, gender, phone, email, address, blood_group, emergency_contact, password_hash)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (patient_id, name, dob, gender, phone, email, address, blood_group, emergency_contact, password_hash))

        # Insert into users table
        cursor.execute("""
            INSERT INTO users (id, name, email, password_hash, role, patient_id, phone, department, status)
            VALUES (?, ?, ?, ?, 'patient', ?, ?, 'OPD', 'Active')
        """, (user_id, name, email, password_hash, patient_id, phone))

        conn.commit()
    except Exception as e:
        conn.rollback()
        conn.close()
        return jsonify({'error': f'Failed to register patient: {str(e)}'}), 500

    conn.close()

    return jsonify({
        'message': 'Registration Successful!',
        'patient': {
            'patient_id': patient_id,
            'name': name,
            'email': email,
            'phone': phone,
            'dob': dob,
            'gender': gender,
            'bloodGroup': blood_group,
            'address': address
        }
    }), 201

# ----------------------------------------------------------------------------
# 2. PATIENT LOGIN ENDPOINT (Requires Patient ID + Email + Password)
# ----------------------------------------------------------------------------
@app.route('/api/auth/patient/login', methods=['POST'])
def patient_login():
    data = request.get_json() or {}
    patient_id = data.get('patient_id', '').strip().upper()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')

    if not patient_id or not email or not password:
        return jsonify({'error': 'Patient ID, registered email, and password are all required.'}), 400

    conn = get_connection()
    cursor = conn.cursor()

    # Search for patient record by email
    cursor.execute("SELECT * FROM patients WHERE LOWER(email) = LOWER(?)", (email,))
    patient = cursor.fetchone()
    conn.close()

    if not patient:
        return jsonify({'error': 'Patient account not found with this email address.'}), 404

    # Verify Patient ID matches the registered account
    if patient['patient_id'].strip().upper() != patient_id:
        return jsonify({'error': 'Invalid Patient ID for this registered email address.'}), 401

    # Verify password
    stored_hash = patient['password_hash']
    pwd_valid = False
    if stored_hash.startswith('pbkdf2:') or stored_hash.startswith('scrypt:'):
        pwd_valid = check_password_hash(stored_hash, password)
    else:
        pwd_valid = (stored_hash == password)

    if not pwd_valid:
        return jsonify({'error': 'Incorrect password. Please verify your credentials.'}), 401

    user_data = {
        'id': patient['patient_id'],
        'name': patient['full_name'],
        'email': patient['email'],
        'role': 'patient',
        'patientId': patient['patient_id'],
        'phone': patient['phone'],
        'dob': patient['date_of_birth'],
        'gender': patient['gender'],
        'bloodGroup': patient['blood_group'],
        'address': patient['address'],
        'emergencyContact': patient['emergency_contact']
    }

    return jsonify({
        'message': 'Login successful',
        'user': user_data
    }), 200

# ----------------------------------------------------------------------------
# 3. UNIFIED / STAFF LOGIN ENDPOINT
# ----------------------------------------------------------------------------
@app.route('/api/auth/login', methods=['POST'])
def api_login():
    data = request.get_json() or {}
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')

    if not email or not password:
        return jsonify({'error': 'Email and password are required.'}), 400

    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE LOWER(email) = LOWER(?)", (email,))
    row = cursor.fetchone()
    conn.close()

    if not row:
        return jsonify({'error': 'Account not found with this email.'}), 404

    stored_hash = row['password_hash']
    pwd_valid = False
    if stored_hash.startswith('pbkdf2:') or stored_hash.startswith('scrypt:'):
        pwd_valid = check_password_hash(stored_hash, password)
    else:
        pwd_valid = (stored_hash == password)

    if not pwd_valid:
        return jsonify({'error': 'Invalid credentials.'}), 401

    user_data = dict(row)
    del user_data['password_hash']
    if 'patient_id' in user_data and user_data['patient_id']:
        user_data['patientId'] = user_data['patient_id']
    if 'staff_id' in user_data and user_data['staff_id']:
        user_data['staffId'] = user_data['staff_id']

    return jsonify({'message': 'Login successful', 'user': user_data}), 200

# ----------------------------------------------------------------------------
# 4. PATIENT PROFILE ENDPOINT
# ----------------------------------------------------------------------------
@app.route('/api/patient/profile', methods=['GET'])
def patient_profile():
    patient_id = request.args.get('patient_id', '').strip().upper()
    if not patient_id:
        return jsonify({'error': 'Patient ID parameter is required.'}), 400

    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM patients WHERE UPPER(patient_id) = ?", (patient_id,))
    row = cursor.fetchone()
    conn.close()

    if not row:
        return jsonify({'error': 'Patient record not found.'}), 404

    patient_data = dict(row)
    del patient_data['password_hash']
    return jsonify(patient_data), 200

# ----------------------------------------------------------------------------
# 5. PATIENT SEARCH (FOR RECEPTIONIST & ADMIN)
# ----------------------------------------------------------------------------
@app.route('/api/patients/search', methods=['GET'])
def search_patients():
    query = request.args.get('q', '').strip()
    if not query:
        return jsonify([]), 200

    conn = get_connection()
    cursor = conn.cursor()
    search_term = f"%{query}%"
    cursor.execute("""
        SELECT patient_id, full_name, email, phone, date_of_birth, gender, blood_group, address
        FROM patients
        WHERE UPPER(patient_id) LIKE UPPER(?) OR LOWER(email) LIKE LOWER(?) OR LOWER(full_name) LIKE LOWER(?) OR phone LIKE ?
        LIMIT 10
    """, (search_term, search_term, search_term, search_term))
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return jsonify(rows)

# ----------------------------------------------------------------------------
# 6. APPOINTMENT SCHEDULING & RETRIEVAL
# ----------------------------------------------------------------------------
@app.route('/api/appointments', methods=['GET', 'POST'])
def handle_appointments():
    conn = get_connection()
    cursor = conn.cursor()

    if request.method == 'GET':
        patient_id = request.args.get('patient_id')
        doctor_id = request.args.get('doctor_id')
        if patient_id:
            cursor.execute("""
                SELECT a.*, p.full_name as patient_name, p.email as patient_email, p.phone as patient_phone, d.name as doctor_name
                FROM appointments a
                LEFT JOIN patients p ON a.patient_id = p.patient_id
                LEFT JOIN doctors d ON a.doctor_id = d.id OR a.doctor_id = d.doctor_id
                WHERE a.patient_id = ?
                ORDER BY a.appointment_date DESC, a.appointment_time DESC
            """, (patient_id,))
        elif doctor_id:
            cursor.execute("""
                SELECT a.*, p.full_name as patient_name, p.email as patient_email, p.phone as patient_phone, d.name as doctor_name
                FROM appointments a
                LEFT JOIN patients p ON a.patient_id = p.patient_id
                LEFT JOIN doctors d ON a.doctor_id = d.id OR a.doctor_id = d.doctor_id
                WHERE a.doctor_id = ?
                ORDER BY a.appointment_date DESC, a.appointment_time DESC
            """, (doctor_id,))
        else:
            cursor.execute("""
                SELECT a.*, p.full_name as patient_name, p.email as patient_email, p.phone as patient_phone, d.name as doctor_name
                FROM appointments a
                LEFT JOIN patients p ON a.patient_id = p.patient_id
                LEFT JOIN doctors d ON a.doctor_id = d.id OR a.doctor_id = d.doctor_id
                ORDER BY a.appointment_date DESC, a.appointment_time DESC
            """)
        rows = [dict(r) for r in cursor.fetchall()]
        conn.close()
        return jsonify(rows)

    elif request.method == 'POST':
        data = request.get_json() or {}
        patient_id = data.get('patient_id', '').strip()
        doctor_id = data.get('doctor_id', '').strip()
        department = data.get('department', '').strip()
        department_id = data.get('department_id', department)
        date = data.get('date', '').strip() or data.get('appointment_date', '').strip()
        time_slot = data.get('time_slot', '').strip() or data.get('appointment_time', '').strip()
        reason = data.get('reason', '').strip() or 'General Consultation'
        notes = data.get('notes', '').strip()
        fee = float(data.get('fee', 500.00))

        if not patient_id or not doctor_id or not date or not time_slot:
            conn.close()
            return jsonify({'error': 'Patient ID, Doctor, Date, and Time Slot are required.'}), 400

        # Verify patient exists
        cursor.execute("SELECT full_name, email, phone FROM patients WHERE UPPER(patient_id) = UPPER(?)", (patient_id,))
        pat_row = cursor.fetchone()
        if not pat_row:
            conn.close()
            return jsonify({'error': f'Patient record {patient_id} does not exist.'}), 404

        patient_name = pat_row['full_name']
        patient_email = pat_row['email']

        # Get doctor name and fee
        cursor.execute("SELECT name, department, consultation_fee FROM doctors WHERE id = ? OR doctor_id = ?", (doctor_id, doctor_id))
        doc_row = cursor.fetchone()
        doctor_name = doc_row['name'] if doc_row else 'Specialist Doctor'
        if doc_row and doc_row['department']:
            department = doc_row['department']
        if doc_row and doc_row['consultation_fee']:
            fee = float(doc_row['consultation_fee'])

        # Check double booking conflict for this doctor on this date and time
        cursor.execute("""
            SELECT COUNT(*) FROM appointments
            WHERE doctor_id = ? AND appointment_date = ? AND appointment_time = ? AND status != 'Cancelled'
        """, (doctor_id, date, time_slot))
        if cursor.fetchone()[0] > 0:
            conn.close()
            return jsonify({'error': 'This time slot is already booked for this doctor. Please select another slot.'}), 409

        # Generate unique Appointment ID
        apt_id = generate_appointment_id(conn)

        try:
            cursor.execute("""
                INSERT INTO appointments (appointment_id, patient_id, doctor_id, department_id, department, appointment_date, appointment_time, reason, notes, status, fee)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Confirmed', ?)
            """, (apt_id, patient_id, doctor_id, department_id, department, date, time_slot, reason, notes, fee))
            conn.commit()
        except Exception as e:
            conn.rollback()
            conn.close()
            return jsonify({'error': f'Failed to book appointment: {str(e)}'}), 500

        conn.close()

        return jsonify({
            'message': 'Appointment Booked Successfully!',
            'appointment': {
                'appointment_id': apt_id,
                'patient_id': patient_id,
                'patient_name': patient_name,
                'patient_email': patient_email,
                'doctor_id': doctor_id,
                'doctor_name': doctor_name,
                'department': department,
                'date': date,
                'time': time_slot,
                'reason': reason,
                'notes': notes,
                'status': 'Confirmed',
                'fee': fee
            }
        }), 201

# ----------------------------------------------------------------------------
# 7. APPOINTMENT CANCELLATION
# ----------------------------------------------------------------------------
@app.route('/api/appointments/cancel', methods=['POST'])
def cancel_appointment():
    data = request.get_json() or {}
    appointment_id = data.get('appointment_id', '').strip()
    patient_id = data.get('patient_id', '').strip()

    if not appointment_id:
        return jsonify({'error': 'Appointment ID is required.'}), 400

    conn = get_connection()
    cursor = conn.cursor()

    if patient_id:
        cursor.execute("SELECT * FROM appointments WHERE appointment_id = ? AND patient_id = ?", (appointment_id, patient_id))
    else:
        cursor.execute("SELECT * FROM appointments WHERE appointment_id = ?", (appointment_id,))

    row = cursor.fetchone()
    if not row:
        conn.close()
        return jsonify({'error': 'Appointment not found.'}), 404

    cursor.execute("UPDATE appointments SET status = 'Cancelled' WHERE appointment_id = ?", (appointment_id,))
    conn.commit()
    conn.close()

    return jsonify({'message': f'Appointment {appointment_id} has been cancelled.', 'appointment_id': appointment_id}), 200

# ----------------------------------------------------------------------------
# 8. DOCTOR AVAILABILITY / BOOKED SLOTS QUERY
# ----------------------------------------------------------------------------
@app.route('/api/doctors/slots', methods=['GET'])
def get_doctor_slots():
    doctor_id = request.args.get('doctor_id', '').strip()
    date = request.args.get('date', '').strip()

    if not doctor_id or not date:
        return jsonify({'error': 'doctor_id and date parameters are required.'}), 400

    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT appointment_time FROM appointments
        WHERE doctor_id = ? AND appointment_date = ? AND status != 'Cancelled'
    """, (doctor_id, date))
    booked = [r['appointment_time'] for r in cursor.fetchall()]
    conn.close()

    return jsonify({'doctor_id': doctor_id, 'date': date, 'booked_slots': booked})

# ----------------------------------------------------------------------------
# 9. GENERAL CATALOGUES (Departments, Doctors, Beds, Medicines)
# ----------------------------------------------------------------------------
@app.route('/api/departments', methods=['GET'])
def get_departments():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM departments")
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return jsonify(rows)

@app.route('/api/doctors', methods=['GET'])
def get_doctors():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM doctors")
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return jsonify(rows)

@app.route('/api/beds', methods=['GET'])
def get_beds():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM beds")
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return jsonify(rows)

@app.route('/api/medicines', methods=['GET'])
def get_medicines():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM medicines")
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return jsonify(rows)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"Starting V MediCare Server on http://localhost:{port} ...")
    app.run(host='0.0.0.0', port=port, debug=True)
