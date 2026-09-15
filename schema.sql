-- ===================================================================
-- V MediCare Hospital Management System Database Schema
-- Compatible with MySQL 5.7+ / 8.0+ and SQLite 3+
-- ===================================================================

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL, -- 'patient', 'doctor', 'receptionist', 'pharmacist', 'labtech', 'admin'
    patient_id VARCHAR(50) UNIQUE,
    staff_id VARCHAR(50) UNIQUE,
    phone VARCHAR(20),
    department VARCHAR(100),
    status VARCHAR(20) DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patients (
    patient_id VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(150) UNIQUE NOT NULL,
    address TEXT,
    blood_group VARCHAR(10),
    emergency_contact VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS departments (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    icon VARCHAR(10),
    description TEXT
);

CREATE TABLE IF NOT EXISTS doctors (
    id VARCHAR(50) PRIMARY KEY,
    doctor_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL,
    department VARCHAR(100) NOT NULL,
    specialty VARCHAR(150),
    experience VARCHAR(50),
    available_days VARCHAR(100),
    timing VARCHAR(100),
    consultation_fee DECIMAL(10, 2) DEFAULT 500.00
);

CREATE TABLE IF NOT EXISTS appointments (
    appointment_id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50) NOT NULL,
    doctor_id VARCHAR(50) NOT NULL,
    department_id VARCHAR(100),
    department VARCHAR(100),
    appointment_date DATE NOT NULL,
    appointment_time VARCHAR(50) NOT NULL,
    reason TEXT,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'Confirmed', -- 'Pending', 'Confirmed', 'Completed', 'Cancelled'
    fee DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
);

CREATE TABLE IF NOT EXISTS medical_records (
    id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50) NOT NULL,
    doctor_id VARCHAR(50) NOT NULL,
    diagnosis VARCHAR(255) NOT NULL,
    symptoms TEXT,
    treatment_plan TEXT,
    vitals_bp VARCHAR(20),
    vitals_pulse VARCHAR(20),
    vitals_temp VARCHAR(20),
    vitals_weight VARCHAR(20),
    clinical_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS prescriptions (
    id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50) NOT NULL,
    doctor_id VARCHAR(50) NOT NULL,
    diagnosis VARCHAR(255),
    is_dispensed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS prescription_items (
    id VARCHAR(50) PRIMARY KEY,
    prescription_id VARCHAR(50) NOT NULL,
    medicine_name VARCHAR(150) NOT NULL,
    dosage VARCHAR(50),
    frequency VARCHAR(50),
    duration VARCHAR(50),
    instructions TEXT
);

CREATE TABLE IF NOT EXISTS medicines (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(100),
    stock_quantity INT DEFAULT 0,
    min_stock_level INT DEFAULT 20,
    unit_price DECIMAL(10, 2) NOT NULL,
    expiry_date VARCHAR(20),
    supplier VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS lab_tests (
    id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50) NOT NULL,
    doctor_name VARCHAR(150),
    test_type VARCHAR(150) NOT NULL,
    category VARCHAR(100),
    requested_date DATE,
    completed_date DATE,
    status VARCHAR(50) DEFAULT 'Requested', -- 'Requested', 'Processing', 'Completed'
    fee DECIMAL(10, 2) DEFAULT 0.00,
    findings TEXT
);

CREATE TABLE IF NOT EXISTS lab_reports (
    id VARCHAR(50) PRIMARY KEY,
    lab_test_id VARCHAR(50) NOT NULL,
    parameter_name VARCHAR(150) NOT NULL,
    observed_value VARCHAR(50),
    unit VARCHAR(30),
    reference_range VARCHAR(50),
    status VARCHAR(30) DEFAULT 'Normal'
);

CREATE TABLE IF NOT EXISTS beds (
    id VARCHAR(50) PRIMARY KEY,
    category VARCHAR(50) NOT NULL, -- 'General Ward', 'Private Room', 'ICU', 'Emergency'
    total_beds INT NOT NULL,
    occupied_beds INT NOT NULL,
    available_beds INT NOT NULL,
    cost_per_day DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS bills (
    id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50) NOT NULL,
    consultation_fee DECIMAL(10, 2) DEFAULT 0.00,
    room_charges DECIMAL(10, 2) DEFAULT 0.00,
    lab_charges DECIMAL(10, 2) DEFAULT 0.00,
    medicine_charges DECIMAL(10, 2) DEFAULT 0.00,
    treatment_charges DECIMAL(10, 2) DEFAULT 0.00,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending', -- 'Paid', 'Pending', 'Partially Paid'
    payment_mode VARCHAR(50),
    paid_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS notifications (
    id VARCHAR(50) PRIMARY KEY,
    target_role VARCHAR(50) DEFAULT 'all',
    patient_id VARCHAR(50),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
