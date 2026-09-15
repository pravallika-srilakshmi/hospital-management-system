"""
V MediCare Database Interface & Seeding Engine
Supports SQLite out-of-the-box (zero configuration needed) and MySQL.
"""

import os
import sqlite3
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

DB_FILE = os.path.join(os.path.dirname(__file__), 'v_medicare.db')

def get_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def generate_patient_id(conn=None):
    close_after = False
    if conn is None:
        conn = get_connection()
        close_after = True

    cursor = conn.cursor()
    cursor.execute("SELECT patient_id FROM patients WHERE patient_id LIKE 'PAT2026%' ORDER BY patient_id DESC LIMIT 1")
    row = cursor.fetchone()
    if row and row['patient_id']:
        last_id = row['patient_id']
        try:
            num = int(last_id.replace('PAT2026', ''))
            next_id = f"PAT2026{str(num + 1).zfill(4)}"
        except Exception:
            next_id = f"PAT2026{str(int(datetime.now().timestamp()) % 10000).zfill(4)}"
    else:
        next_id = "PAT20260001"

    if close_after:
        conn.close()
    return next_id

def generate_appointment_id(conn=None):
    close_after = False
    if conn is None:
        conn = get_connection()
        close_after = True

    cursor = conn.cursor()
    cursor.execute("SELECT appointment_id FROM appointments WHERE appointment_id LIKE 'APT2026%' ORDER BY appointment_id DESC LIMIT 1")
    row = cursor.fetchone()
    if row and row['appointment_id']:
        last_id = row['appointment_id']
        try:
            num = int(last_id.replace('APT2026', ''))
            next_id = f"APT2026{str(num + 1).zfill(4)}"
        except Exception:
            next_id = f"APT2026{str(int(datetime.now().timestamp()) % 10000).zfill(4)}"
    else:
        next_id = "APT20260001"

    if close_after:
        conn.close()
    return next_id

def init_db():
    schema_path = os.path.join(os.path.dirname(__file__), 'schema.sql')
    with open(schema_path, 'r', encoding='utf-8') as f:
        schema_sql = f.read()

    conn = get_connection()
    cursor = conn.cursor()
    cursor.executescript(schema_sql)

    default_hashed_pwd = generate_password_hash('password123')

    # Seed Initial Users if table is empty
    cursor.execute("SELECT COUNT(*) FROM users")
    count = cursor.fetchone()[0]
    if count == 0:
        print("Seeding initial hospital database records...")
        # 1. Users
        users = [
            ('USR001', 'Ramesh Patel', 'patient@vmedicare.com', default_hashed_pwd, 'patient', 'PAT20260001', None, '+91 98765 43210', 'OPD', 'Active'),
            ('USR002', 'Dr. Sarah Jenkins', 'doctor@vmedicare.com', default_hashed_pwd, 'doctor', None, 'DOC20260001', '+91 98234 11223', 'Cardiology', 'Active'),
            ('USR003', 'Priya Sharma', 'receptionist@vmedicare.com', default_hashed_pwd, 'receptionist', None, 'STF20260001', '+91 98111 22334', 'Front Desk', 'Active'),
            ('USR004', 'Marcus Vance', 'pharmacist@vmedicare.com', default_hashed_pwd, 'pharmacist', None, 'STF20260002', '+91 98333 44556', 'Pharmacy', 'Active'),
            ('USR005', 'Elena Rostova', 'labtech@vmedicare.com', default_hashed_pwd, 'labtech', None, 'STF20260003', '+91 98555 66778', 'Pathology', 'Active'),
            ('USR006', 'Arthur Pendelton', 'admin@vmedicare.com', default_hashed_pwd, 'admin', None, 'ADM20260001', '+91 98000 12345', 'Administration', 'Active')
        ]
        cursor.executemany("INSERT INTO users (id, name, email, password_hash, role, patient_id, staff_id, phone, department, status) VALUES (?,?,?,?,?,?,?,?,?,?)", users)

        # 2. Patients
        patients = [
            ('PAT20260001', 'Ramesh Patel', '1992-05-14', 'Male', '+91 98765 43210', 'patient@vmedicare.com', '142 MG Road, Bengaluru', 'O+', '+91 98765 00000', default_hashed_pwd)
        ]
        cursor.executemany("INSERT INTO patients (patient_id, full_name, date_of_birth, gender, phone, email, address, blood_group, emergency_contact, password_hash) VALUES (?,?,?,?,?,?,?,?,?,?)", patients)

        # 3. Departments
        departments = [
            ('DEP01', 'Cardiology', '❤️', 'Advanced cardiac diagnostic and surgical care.'),
            ('DEP02', 'Neurology', '🧠', 'Brain, spine, and neurovascular disorders.'),
            ('DEP03', 'Orthopedics', '🦴', 'Trauma, joint replacement, and sports medicine.'),
            ('DEP04', 'Pediatrics', '👶', 'Comprehensive newborn and child healthcare.'),
            ('DEP05', 'Dermatology', '✨', 'Skin, hair, nail treatments and dermatosurgery.'),
            ('DEP06', 'General Medicine', '🩺', 'Primary adult medicine and infection care.'),
            ('DEP07', 'Gynecology', '🌸', 'Women wellness, obstetrics, and maternal health.'),
            ('DEP08', 'ENT', '👂', 'Ear, nose, and throat micro-surgery.')
        ]
        cursor.executemany("INSERT INTO departments (id, name, icon, description) VALUES (?,?,?,?)", departments)

        # 4. Doctors
        doctors = [
            ('DOC01', 'DOC20260001', 'Dr. Sarah Jenkins', 'Cardiology', 'Senior Cardiologist, MD, DM', '14+ Years', 'Mon, Wed, Fri', '09:00 AM - 01:00 PM', 800.00),
            ('DOC02', 'DOC20260002', 'Dr. Vikram Malhotra', 'Neurology', 'Neurosurgeon, MCh', '18+ Years', 'Tue, Thu, Sat', '10:00 AM - 02:00 PM', 1000.00),
            ('DOC03', 'DOC20260003', 'Dr. Ananya Reddy', 'Pediatrics', 'Chief Pediatrician, MD', '11+ Years', 'Mon, Tue, Thu', '02:00 PM - 06:00 PM', 650.00)
        ]
        cursor.executemany("INSERT INTO doctors (id, doctor_id, name, department, specialty, experience, available_days, timing, consultation_fee) VALUES (?,?,?,?,?,?,?,?,?)", doctors)

        # 5. Beds
        beds = [
            ('BED01', 'General Ward', 50, 38, 12, 800.00),
            ('BED02', 'Private Room', 25, 18, 7, 2500.00),
            ('BED03', 'ICU', 20, 15, 5, 6500.00),
            ('BED04', 'Emergency Ward', 15, 11, 4, 1800.00)
        ]
        cursor.executemany("INSERT INTO beds (id, category, total_beds, occupied_beds, available_beds, cost_per_day) VALUES (?,?,?,?,?,?)", beds)

        # 6. Medicines
        meds = [
            ('MED01', 'Telmisartan 40mg', 'Cardiovascular', 120, 25, 145.00, '2027-08', 'Sun Pharma'),
            ('MED02', 'Amlodipine 5mg', 'Cardiovascular', 85, 30, 65.00, '2027-05', 'Cipla Ltd'),
            ('MED03', 'Amoxicillin 500mg', 'Antibiotics', 12, 20, 120.00, '2026-11', 'Alkem Labs'),
            ('MED04', 'Paracetamol 650mg', 'Analgesics', 240, 50, 35.00, '2028-02', 'Micro Labs')
        ]
        cursor.executemany("INSERT INTO medicines (id, name, category, stock_quantity, min_stock_level, unit_price, expiry_date, supplier) VALUES (?,?,?,?,?,?,?,?)", meds)

        conn.commit()
        print("Database seeded successfully with initial records!")

    conn.close()

if __name__ == '__main__':
    init_db()
