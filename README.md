# 🏥 V MediCare — Smart Hospital Management System

A modern, full-stack hospital management web platform built for high-performance clinical workflows, role-based access control, paperless medical records, and patient engagement.

---

## 🚀 Key Highlights & Architecture

- **Zero-Dependency Quick Launch**: Open [`index.html`](file:///c:/Users/prava/OneDrive/Desktop/hospital%20management%20system/index.html) or [`complete web.html`](file:///c:/Users/prava/OneDrive/Desktop/hospital%20management%20system/complete%20web.html) directly in any modern browser. All features (modals, booking wizards, state persistence, invoice printing, AI assistant) work with client-side persistence (`localStorage`).
- **Full-Stack REST Backend**: A companion Python Flask server ([`app.py`](file:///c:/Users/prava/OneDrive/Desktop/hospital%20management%20system/app.py)) with relational SQLite/MySQL database engine ([`database.py`](file:///c:/Users/prava/OneDrive/Desktop/hospital%20management%20system/database.py) and [`schema.sql`](file:///c:/Users/prava/OneDrive/Desktop/hospital%20management%20system/schema.sql)).
- **Modern Healthcare Aesthetic**: Designed with a clean medical palette (Indigo `#4f46e5`, Medical Blue `#0284c7`, slate tones, rounded card containers, micro-interactions, responsive sidebars, and print stylesheets).

---

## 👥 Demo User Credentials (1-Click Switcher Available)

Use the 1-click demo role switcher pills on the login modal or enter the credentials below:

| Role | Email | Password | User ID | Sample Name |
|---|---|---|---|---|
| **Patient** | `patient@vmedicare.com` | `password123` | `PAT20260001` | Ramesh Patel |
| **Doctor** | `doctor@vmedicare.com` | `password123` | `DOC20260001` | Dr. Sarah Jenkins (Cardiology) |
| **Receptionist** | `receptionist@vmedicare.com` | `password123` | `STF20260001` | Priya Sharma (Front Desk) |
| **Pharmacist** | `pharmacist@vmedicare.com` | `password123` | `STF20260002` | Marcus Vance (Pharmacy) |
| **Laboratory Tech** | `labtech@vmedicare.com` | `password123` | `STF20260003` | Elena Rostova (Pathology) |
| **Admin** | `admin@vmedicare.com` | `password123` | `ADM20260001` | Arthur Pendelton (Administrator) |

---

## 🌟 20 Core Hospital Modules Implemented

1. **Landing Page & Branding**:
   - Modern navbar, hero section, live statistics banner (50+ Doctors, 20+ Departments, 10,000+ Patients, 24/7 Emergency Care).
   - 8 core service cards & 8 clinical departments (Cardiology, Neurology, Orthopedics, Pediatrics, Dermatology, General Medicine, Gynecology, ENT).
   - Specialist doctor directory with OPD schedules, fees, and booking triggers.
2. **Appointment Management**:
   - 5-step interactive scheduling: `Department` &rarr; `Doctor` &rarr; `Date` &rarr; `Available Slot` &rarr; `Confirm`.
   - Prevents double-booking for identical doctor time slots.
3. **Medical Records (EHR)**:
   - Diagnoses, vital signs (BP, pulse, temp, weight), presenting complaints, and treatment plans.
4. **Prescription Module**:
   - Doctors issue digital prescriptions specifying medicine, dosage, frequency, duration, and instructions.
5. **Laboratory Diagnostic Center**:
   - Workflow: `Requested` &rarr; `Processing` &rarr; `Completed`.
   - CBC, Blood Sugar, Urine, ECG, Chest X-Ray, CT Scan, MRI Lumbar reports.
6. **Pharmacy & Inventory Management**:
   - Stock tracking, unit pricing, expiry tracker, and low-stock warning banners when quantities drop below minimum safety levels.
7. **Bed & Room Occupancy**:
   - Real-time occupancy tracking for General Ward, Private Room, ICU, and Emergency.
   - Live percentage progress bars and 1-click patient admit/discharge.
8. **Billing & Printable Invoices**:
   - Itemized hospital invoices (consultation, bed charges, lab, medicines, treatment care).
   - Mock online payment modal + printable receipt format (`window.print`).
9. **Emergency & Ambulance Fleet Tracker**:
   - 24/7 hotline display (1800-200-9999), live ambulance tracking (`Available`, `On Duty`, `Unavailable`), and campus map directions.
10. **Role-Based Access Control (RBAC)**:
    - 6 isolated dashboard views ensuring strict data privacy and permissions.
11. **Patient Registration & Auto ID**:
    - Unique ID generation (`PAT20260001`, `PAT20260002`) with success modal and simulated welcome email.
12. **Staff Account Provisioning**:
    - Admin creates verified doctor and staff accounts with auto-assigned IDs (`DOC20260001`, `STF20260001`).
13. **In-App Notification Center**:
    - Floating bell with unread badge counter and real-time alerts.
14. **Simulated Transactional Email Hub**:
    - Email logs modal displaying simulated outgoing SMTP messages for welcome greetings, appointments, lab reports, and password resets.
15. **V MediCare AI Assistant**:
    - Interactive floating chat assistant answering questions about hospital services, doctors, OPD timings, and emergency hotlines, with medical disclaimers.
16. **Responsive Layouts**:
    - Responsive on desktop, laptop, tablet, and mobile displays.
17. **Administrative Analytics**:
    - Monthly revenue trends, department load distribution charts, and patient admission growth.
18. **Search & Filter Engine**:
    - Dynamic filtering across doctors, departments, dates, and medicine stock.
19. **Database Integration**:
    - Relational SQLite/MySQL schema ([`schema.sql`](file:///c:/Users/prava/OneDrive/Desktop/hospital%20management%20system/schema.sql)).
20. **Security**:
    - Role authorization, protected views, and privacy boundaries.

---

## 🛠️ How to Run

### Method 1: Instant Browser Launch (Zero-Setup)
1. Double click [`index.html`](file:///c:/Users/prava/OneDrive/Desktop/hospital%20management%20system/index.html) or [`complete web.html`](file:///c:/Users/prava/OneDrive/Desktop/hospital%20management%20system/complete%20web.html).
2. The entire platform runs immediately in Chrome, Edge, Safari, or Firefox.

### Method 2: Python Flask Server
If you have Python installed:
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Start the server
python app.py
```
Open `http://localhost:5000` in your web browser.
