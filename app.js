/**
 * V MediCare - Hospital Management System
 * Core Application Engine & Reactive State Store
 */

// ============================================================================
// INITIAL SEED DATA STORE
// ============================================================================
const INITIAL_DATA = {
  users: [
    {
      id: 'USR001',
      name: 'Ramesh Patel',
      email: 'patient@vmedicare.com',
      role: 'patient',
      patientId: 'PAT20260001',
      phone: '+91 98765 43210',
      dob: '1992-05-14',
      gender: 'Male',
      bloodGroup: 'O+',
      address: '142 MG Road, Bengaluru, Karnataka',
      emergencyContact: '+91 98765 00000',
      password: 'password123'
    },
    {
      id: 'USR002',
      name: 'Dr. Sarah Jenkins',
      email: 'doctor@vmedicare.com',
      role: 'doctor',
      staffId: 'DOC20260001',
      department: 'Cardiology',
      specialty: 'Senior Cardiologist, MD, DM',
      experience: '14+ Years',
      phone: '+91 98234 11223',
      availableDays: 'Mon, Wed, Fri',
      fee: 800,
      password: 'password123'
    },
    {
      id: 'USR003',
      name: 'Priya Sharma',
      email: 'receptionist@vmedicare.com',
      role: 'receptionist',
      staffId: 'STF20260001',
      department: 'Front Desk & Admissions',
      phone: '+91 98111 22334',
      status: 'Active',
      password: 'password123'
    },
    {
      id: 'USR004',
      name: 'Marcus Vance',
      email: 'pharmacist@vmedicare.com',
      role: 'pharmacist',
      staffId: 'STF20260002',
      department: 'Pharmacy Operations',
      phone: '+91 98333 44556',
      status: 'Active',
      password: 'password123'
    },
    {
      id: 'USR005',
      name: 'Elena Rostova',
      email: 'labtech@vmedicare.com',
      role: 'labtech',
      staffId: 'STF20260003',
      department: 'Pathology & Diagnostics',
      phone: '+91 98555 66778',
      status: 'Active',
      password: 'password123'
    },
    {
      id: 'USR006',
      name: 'Arthur Pendelton',
      email: 'admin@vmedicare.com',
      role: 'admin',
      staffId: 'ADM20260001',
      department: 'Hospital Administration',
      phone: '+91 98000 12345',
      status: 'Active',
      password: 'password123'
    }
  ],

  departments: [
    { id: 'DEP01', name: 'Cardiology', icon: '❤️', doctorsCount: 6, desc: 'Advanced heart care, diagnostics, angioplasty and cardiac bypass surgeries.' },
    { id: 'DEP02', name: 'Neurology', icon: '🧠', doctorsCount: 4, desc: 'Comprehensive brain, spine, stroke management and neuro-rehabilitation.' },
    { id: 'DEP03', name: 'Orthopedics', icon: '🦴', doctorsCount: 5, desc: 'Joint replacement, trauma care, sports medicine and bone health.' },
    { id: 'DEP04', name: 'Pediatrics', icon: '👶', doctorsCount: 4, desc: 'Child health, immunization, neonatal intensive care and growth monitoring.' },
    { id: 'DEP05', name: 'Dermatology', icon: '✨', doctorsCount: 3, desc: 'Skin treatments, laser therapies, allergic dermatosis and cosmetic care.' },
    { id: 'DEP06', name: 'General Medicine', icon: '🩺', doctorsCount: 8, desc: 'Primary adult care, infection management, diabetes and wellness checks.' },
    { id: 'DEP07', name: 'Gynecology', icon: '🌸', doctorsCount: 5, desc: 'Maternal health, obstetrics, high-risk pregnancy and women wellness.' },
    { id: 'DEP08', name: 'ENT', icon: '👂', doctorsCount: 3, desc: 'Ear, nose, throat micro-surgeries, sinus treatment and audiometry.' }
  ],

  doctors: [
    {
      id: 'DOC01',
      staffId: 'DOC20260001',
      name: 'Dr. Sarah Jenkins',
      department: 'Cardiology',
      specialty: 'Senior Interventional Cardiologist',
      experience: '14+ Years',
      days: 'Mon, Wed, Fri',
      timing: '09:00 AM - 01:00 PM',
      slots: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM'],
      fee: 800,
      avatar: '👩‍⚕️'
    },
    {
      id: 'DOC02',
      staffId: 'DOC20260002',
      name: 'Dr. Vikram Malhotra',
      department: 'Neurology',
      specialty: 'Neurosurgeon & Spine Specialist',
      experience: '18+ Years',
      days: 'Tue, Thu, Sat',
      timing: '10:00 AM - 02:00 PM',
      slots: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM'],
      fee: 1000,
      avatar: '👨‍⚕️'
    },
    {
      id: 'DOC03',
      staffId: 'DOC20260003',
      name: 'Dr. Ananya Reddy',
      department: 'Pediatrics',
      specialty: 'Chief Pediatrician & Neonatologist',
      experience: '11+ Years',
      days: 'Mon, Tue, Thu, Fri',
      timing: '02:00 PM - 06:00 PM',
      slots: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'],
      fee: 650,
      avatar: '👩‍⚕️'
    },
    {
      id: 'DOC04',
      staffId: 'DOC20260004',
      name: 'Dr. Rajesh Khanna',
      department: 'Orthopedics',
      specialty: 'Joint Replacement & Trauma Surgeon',
      experience: '15+ Years',
      days: 'Mon, Wed, Sat',
      timing: '09:00 AM - 01:00 PM',
      slots: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
      fee: 850,
      avatar: '👨‍⚕️'
    },
    {
      id: 'DOC05',
      staffId: 'DOC20260005',
      name: 'Dr. Sneha Roy',
      department: 'Dermatology',
      specialty: 'Consultant Dermatologist & Dermatosurgeon',
      experience: '9+ Years',
      days: 'Tue, Thu, Sat',
      timing: '03:00 PM - 07:00 PM',
      slots: ['03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'],
      fee: 600,
      avatar: '👩‍⚕️'
    },
    {
      id: 'DOC06',
      staffId: 'DOC20260006',
      name: 'Dr. Devendra Joshi',
      department: 'General Medicine',
      specialty: 'Senior Physician & Diabetologist',
      experience: '20+ Years',
      days: 'Mon to Sat',
      timing: '08:00 AM - 12:00 PM',
      slots: ['08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'],
      fee: 500,
      avatar: '👨‍⚕️'
    }
  ],

  appointments: [
    {
      id: 'APT202601',
      patientId: 'PAT20260001',
      patientName: 'Ramesh Patel',
      doctorId: 'DOC01',
      doctorName: 'Dr. Sarah Jenkins',
      department: 'Cardiology',
      date: '2026-09-18',
      time: '10:00 AM',
      reason: 'Routine cardiovascular evaluation and BP checkup',
      status: 'Confirmed',
      fee: 800,
      createdAt: '2026-09-12 14:30'
    },
    {
      id: 'APT202602',
      patientId: 'PAT20260001',
      patientName: 'Ramesh Patel',
      doctorId: 'DOC06',
      doctorName: 'Dr. Devendra Joshi',
      department: 'General Medicine',
      date: '2026-09-10',
      time: '09:00 AM',
      reason: 'Mild fever and seasonal allergy consultation',
      status: 'Completed',
      fee: 500,
      createdAt: '2026-09-08 10:00'
    },
    {
      id: 'APT202603',
      patientId: 'PAT20260002',
      patientName: 'Meera Deshmukh',
      doctorId: 'DOC01',
      doctorName: 'Dr. Sarah Jenkins',
      department: 'Cardiology',
      date: '2026-09-18',
      time: '11:00 AM',
      reason: 'Palpitation assessment and ECG review',
      status: 'Confirmed',
      fee: 800,
      createdAt: '2026-09-12 16:00'
    }
  ],

  medicalRecords: [
    {
      id: 'REC202601',
      patientId: 'PAT20260001',
      patientName: 'Ramesh Patel',
      doctorId: 'DOC01',
      doctorName: 'Dr. Sarah Jenkins',
      date: '2026-09-10',
      diagnosis: 'Stage 1 Essential Hypertension',
      symptoms: 'Occasional morning headache, resting blood pressure 142/90 mmHg',
      treatmentPlan: 'Low sodium DASH diet, 30 min daily brisk walk, prescribed Telmisartan 40mg.',
      vitals: { bp: '142/90', pulse: '78 bpm', temp: '98.4 F', weight: '74 kg' },
      notes: 'Advised repeat Lipid profile & Serum Creatinine in 3 months.'
    }
  ],

  prescriptions: [
    {
      id: 'RX202601',
      patientId: 'PAT20260001',
      patientName: 'Ramesh Patel',
      doctorId: 'DOC01',
      doctorName: 'Dr. Sarah Jenkins',
      date: '2026-09-10',
      diagnosis: 'Hypertension Management',
      items: [
        { medicine: 'Telmisartan 40mg', dosage: '1 Tablet', frequency: 'Once Daily (Morning)', duration: '30 Days', instructions: 'Take after breakfast' },
        { medicine: 'Amlodipine 5mg', dosage: '1 Tablet', frequency: 'Once Daily (Night)', duration: '30 Days', instructions: 'Take before bedtime' },
        { medicine: 'Multivitamin & Zinc', dosage: '1 Capsule', frequency: 'Once Daily', duration: '15 Days', instructions: 'After lunch' }
      ],
      dispensed: true
    }
  ],

  labTests: [
    {
      id: 'LAB202601',
      patientId: 'PAT20260001',
      patientName: 'Ramesh Patel',
      doctorName: 'Dr. Sarah Jenkins',
      testType: 'Complete Blood Count (CBC)',
      category: 'Pathology',
      requestedDate: '2026-09-10',
      completedDate: '2026-09-11',
      status: 'Completed',
      fee: 450,
      results: [
        { parameter: 'Hemoglobin', value: '14.8', unit: 'g/dL', normalRange: '13.5 - 17.5', status: 'Normal' },
        { parameter: 'Total WBC Count', value: '7,200', unit: 'cells/cu.mm', normalRange: '4,000 - 11,000', status: 'Normal' },
        { parameter: 'Platelet Count', value: '240,000', unit: 'cells/cu.mm', normalRange: '150,000 - 450,000', status: 'Normal' },
        { parameter: 'RBC Count', value: '4.9', unit: 'million/cu.mm', normalRange: '4.5 - 5.9', status: 'Normal' }
      ],
      findings: 'Hematological parameters within normal clinical limits.'
    },
    {
      id: 'LAB202602',
      patientId: 'PAT20260001',
      patientName: 'Ramesh Patel',
      doctorName: 'Dr. Sarah Jenkins',
      testType: 'Fasting Blood Sugar (FBS)',
      category: 'Biochemistry',
      requestedDate: '2026-09-12',
      completedDate: null,
      status: 'Processing',
      fee: 200,
      results: [],
      findings: 'Sample under automated assay analysis.'
    },
    {
      id: 'LAB202603',
      patientId: 'PAT20260002',
      patientName: 'Meera Deshmukh',
      doctorName: 'Dr. Sarah Jenkins',
      testType: '12-Lead Electrocardiogram (ECG)',
      category: 'Cardiology Diagnostics',
      requestedDate: '2026-09-12',
      completedDate: '2026-09-12',
      status: 'Completed',
      fee: 500,
      results: [
        { parameter: 'Heart Rate', value: '74', unit: 'bpm', normalRange: '60 - 100', status: 'Normal' },
        { parameter: 'PR Interval', value: '0.16', unit: 'sec', normalRange: '0.12 - 0.20', status: 'Normal' },
        { parameter: 'QRS Duration', value: '0.08', unit: 'sec', normalRange: '0.06 - 0.10', status: 'Normal' }
      ],
      findings: 'Normal sinus rhythm. No acute ST-T deviations or ischemia noted.'
    }
  ],

  medicines: [
    { id: 'MED01', name: 'Telmisartan 40mg', category: 'Cardiovascular', stock: 120, minStock: 25, price: 145, expiry: '2027-08', supplier: 'Sun Pharma Ltd' },
    { id: 'MED02', name: 'Amlodipine 5mg', category: 'Cardiovascular', stock: 85, minStock: 30, price: 65, expiry: '2027-05', supplier: 'Cipla Therapeutics' },
    { id: 'MED03', name: 'Amoxicillin 500mg', category: 'Antibiotics', stock: 12, minStock: 20, price: 120, expiry: '2026-11', supplier: 'Alkem Labs', lowStock: true },
    { id: 'MED04', name: 'Paracetamol 650mg', category: 'Analgesics', stock: 240, minStock: 50, price: 35, expiry: '2028-02', supplier: 'Micro Labs Ltd' },
    { id: 'MED05', name: 'Metformin 500mg', category: 'Antidiabetic', stock: 160, minStock: 40, price: 80, expiry: '2027-10', supplier: 'USV Pharma' },
    { id: 'MED06', name: 'Pantoprazole 40mg', category: 'Gastroenterology', stock: 8, minStock: 25, price: 95, expiry: '2026-12', supplier: 'Zydus Cadila', lowStock: true },
    { id: 'MED07', name: 'Atorvastatin 20mg', category: 'Lipid Lowering', stock: 95, minStock: 25, price: 210, expiry: '2027-04', supplier: 'Lupin Pharma' },
    { id: 'MED08', name: 'Azithromycin 500mg', category: 'Antibiotics', stock: 45, minStock: 20, price: 160, expiry: '2027-01', supplier: 'Torrent Pharma' }
  ],

  beds: [
    { category: 'General Ward', total: 50, occupied: 38, available: 12, costPerDay: 800 },
    { category: 'Private Room', total: 25, occupied: 18, available: 7, costPerDay: 2500 },
    { category: 'ICU', total: 20, occupied: 15, available: 5, costPerDay: 6500 },
    { category: 'Emergency Ward', total: 15, occupied: 11, available: 4, costPerDay: 1800 }
  ],

  bills: [
    {
      id: 'INV202601',
      patientId: 'PAT20260001',
      patientName: 'Ramesh Patel',
      date: '2026-09-11',
      consultationFee: 800,
      roomCharges: 0,
      labCharges: 450,
      medicineCharges: 210,
      treatmentCharges: 150,
      totalAmount: 1610,
      status: 'Paid',
      paymentMode: 'UPI / Online',
      paidAt: '2026-09-11 11:20'
    },
    {
      id: 'INV202602',
      patientId: 'PAT20260001',
      patientName: 'Ramesh Patel',
      date: '2026-09-12',
      consultationFee: 0,
      roomCharges: 0,
      labCharges: 200,
      medicineCharges: 0,
      treatmentCharges: 0,
      totalAmount: 200,
      status: 'Pending',
      paymentMode: null,
      paidAt: null
    }
  ],

  ambulances: [
    { id: 'AMB-01', driver: 'Rajesh Nair', phone: '+91 98888 11001', type: 'Advanced Cardiac Life Support (ACLS)', status: 'Available', location: 'Hospital Bay 1' },
    { id: 'AMB-02', driver: 'Kiran Kumar', phone: '+91 98888 11002', type: 'Basic Life Support (BLS)', status: 'On Duty', location: 'Indiranagar En Route' },
    { id: 'AMB-03', driver: 'Sunil Rao', phone: '+91 98888 11003', type: 'Neonatal Critical Transport', status: 'Available', location: 'Hospital Bay 2' },
    { id: 'AMB-04', driver: 'David Thomas', phone: '+91 98888 11004', type: 'Patient Transfer Van', status: 'Unavailable', location: 'Maintenance Workshop' }
  ],

  notifications: [
    { id: 'NT01', targetRole: 'all', patientId: 'PAT20260001', message: 'Your cardiology consultation with Dr. Sarah Jenkins is scheduled for Sep 18, 2026 at 10:00 AM.', date: '2026-09-12 14:32', read: false },
    { id: 'NT02', targetRole: 'all', patientId: 'PAT20260001', message: 'Your Complete Blood Count (CBC) laboratory report has been finalized and is ready for download.', date: '2026-09-11 15:45', read: false },
    { id: 'NT03', targetRole: 'pharmacist', message: 'Low-stock warning: Amoxicillin 500mg and Pantoprazole 40mg have fallen below reorder safety threshold.', date: '2026-09-12 09:00', read: false },
    { id: 'NT04', targetRole: 'doctor', doctorId: 'DOC01', message: 'New patient appointment booked for Dr. Sarah Jenkins: Ramesh Patel (Sep 18, 10:00 AM).', date: '2026-09-12 14:31', read: true }
  ],

  emailsSent: [
    {
      id: 'EML01',
      recipient: 'patient@vmedicare.com',
      patientName: 'Ramesh Patel',
      subject: 'Welcome to V MediCare — Registration Successful',
      date: '2026-09-08 09:15',
      content: `Dear Ramesh Patel,

Welcome to V MediCare Hospital Management System. Your registration was completed successfully.

Your Unique Patient ID: PAT20260001

Please retain this Patient ID for all appointments, laboratory inquiries, prescription renewals, and hospital billing.

You can now log in securely at our portal to access health records, book doctor slots, and consult specialists.

Warm regards,
Patient Care Team
V MediCare Hospital & Research Centre`
    }
  ]
};

// ============================================================================
// APPLICATION CONTROLLER & LOCAL PERSISTENCE
// ============================================================================
class VMediCareApp {
  constructor() {
    this.storageKey = 'v_medicare_state_v1';
    this.apiBase = window.location.origin.includes('5000') ? window.location.origin : 'http://localhost:5000';
    this.pendingBookingDoctorId = null;
    this.selectedReceptionistPatient = null;
    this.state = this.loadState();
    this.currentUser = null;
    this.activeView = 'overview';
    this.initEventListeners();
    this.renderLandingPublic();
    this.checkSavedSession();
  }

  loadState() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading saved state, falling back to initial data', e);
      }
    }
    this.saveState(INITIAL_DATA);
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  saveState(stateToSave) {
    const data = stateToSave || this.state;
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  checkSavedSession() {
    const session = localStorage.getItem('v_medicare_active_user');
    if (session) {
      try {
        const user = JSON.parse(session);
        this.loginUser(user.email, user.password, false);
      } catch (e) {
        localStorage.removeItem('v_medicare_active_user');
      }
    }
  }

  // ==========================================================================
  // AUTHENTICATION & ROLE-BASED ACCESS CONTROL (RBAC)
  // ==========================================================================
  // ==========================================================================
  // AUTHENTICATION & ROLE-BASED ACCESS CONTROL (RBAC)
  // ==========================================================================

  // --- SEPARATE PATIENT LOGIN ---
  openPatientLoginModal(prefillPatientId = '', prefillEmail = '') {
    this.closeAllModals();
    const modal = document.getElementById('patient-login-modal');
    if (modal) {
      const errBox = document.getElementById('patient-login-error');
      if (errBox) {
        errBox.style.display = 'none';
        errBox.innerText = '';
      }
      const emailInput = document.getElementById('pat-login-email');
      const idInput = document.getElementById('pat-login-id');
      const pwdInput = document.getElementById('pat-login-password');

      if (emailInput && prefillEmail) emailInput.value = prefillEmail;
      if (idInput && prefillPatientId) idInput.value = prefillPatientId;
      if (pwdInput) pwdInput.value = '';

      modal.classList.add('active');
    }
  }

  populateDemoPatientCredentials() {
    const emailInput = document.getElementById('pat-login-email');
    const idInput = document.getElementById('pat-login-id');
    const pwdInput = document.getElementById('pat-login-password');
    if (emailInput) emailInput.value = 'patient@vmedicare.com';
    if (idInput) idInput.value = 'PAT20260001';
    if (pwdInput) pwdInput.value = 'password123';
    const errBox = document.getElementById('patient-login-error');
    if (errBox) errBox.style.display = 'none';
  }

  forgotPasswordPrompt() {
    const email = document.getElementById('pat-login-email')?.value || '';
    if (email) {
      this.showToast(`Password recovery link sent to ${email}. Check simulated email logs.`, 'info');
      this.state.emailsSent.unshift({
        id: 'EML_' + Date.now(),
        recipient: email,
        patientName: 'Valued Patient',
        subject: 'V MediCare Password Reset Security Link',
        date: new Date().toLocaleString(),
        content: `Dear Patient,\n\nWe received a request to reset your password for your V MediCare account.\nClick the link below or contact hospital desk if this was not requested by you.\nTemporary Access Code: ${Math.floor(100000 + Math.random() * 900000)}`
      });
      this.saveState();
    } else {
      alert('Please enter your registered email in the form and click "Forgot Password?" to receive reset instructions.');
    }
  }

  async handlePatientLoginSubmit(form) {
    const email = (form.email.value || '').trim().toLowerCase();
    const patientId = (form.patient_id.value || '').trim().toUpperCase();
    const password = form.password.value || '';
    const errBox = document.getElementById('patient-login-error');

    const showError = (msg) => {
      if (errBox) {
        errBox.style.display = 'flex';
        errBox.innerText = msg;
      } else {
        this.showToast(msg, 'danger');
      }
    };

    if (errBox) errBox.style.display = 'none';

    // 1. Empty fields validation
    if (!email || !patientId || !password) {
      showError('Please fill in all required fields: Email, Patient ID, and Password.');
      return;
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Invalid email format. Please enter a valid email address.');
      return;
    }

    // 3. Patient ID format validation
    if (!patientId.startsWith('PAT')) {
      showError('Invalid Patient ID format. Patient ID must start with "PAT" (e.g. PAT20260001).');
      return;
    }

    // Attempt API Login first if available
    let loggedInUser = null;
    let apiError = '';

    try {
      const response = await fetch(`${this.apiBase}/api/auth/patient/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patient_id: patientId, email, password })
      });
      const data = await response.json();
      if (response.ok && data.user) {
        loggedInUser = data.user;
      } else {
        apiError = data.error || 'Authentication failed.';
      }
    } catch (e) {
      // Offline fallback: check local state
      const user = this.state.users.find(u => u.email.toLowerCase() === email);
      if (!user) {
        apiError = 'Patient account not found with this email address.';
      } else if (user.role !== 'patient') {
        apiError = 'This account is not a patient account. Please use the Staff Portal.';
      } else if ((user.patientId || '').toUpperCase() !== patientId) {
        apiError = 'Invalid Patient ID. It does not match the registered account for this email.';
      } else if (user.password !== password) {
        apiError = 'Incorrect password. Please verify your credentials.';
      } else {
        loggedInUser = user;
      }
    }

    if (!loggedInUser) {
      showError(apiError || 'Login failed. Please check your credentials.');
      return;
    }

    // Login successful
    this.currentUser = loggedInUser;
    localStorage.setItem('v_medicare_active_user', JSON.stringify({
      email: loggedInUser.email,
      password: password,
      role: 'patient',
      patientId: loggedInUser.patientId || loggedInUser.patient_id
    }));

    this.closeAllModals();
    this.showToast(`Welcome, ${loggedInUser.name}! You are now logged into the Patient Portal.`, 'success');
    this.enterDashboard();

    // If user previously attempted to book, route them smoothly to book-appointment
    if (this.pendingBookingDoctorId !== null) {
      const docId = this.pendingBookingDoctorId;
      this.pendingBookingDoctorId = null;
      this.switchView('book-appointment');
      if (docId) {
        setTimeout(() => {
          const select = document.getElementById('apt-doctor-select');
          if (select) {
            select.value = docId;
            this.onDoctorChanged(docId);
          }
        }, 150);
      }
    }
  }

  // --- STAFF & GENERAL PORTAL LOGIN ---
  async loginUser(email, password, persist = true) {
    email = (email || '').trim().toLowerCase();
    password = password || '';

    if (!email || !password) {
      this.showToast('Please enter both email and password.', 'warning');
      return false;
    }

    let user = null;
    try {
      const response = await fetch(`${this.apiBase}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok && data.user) {
        user = data.user;
      }
    } catch (e) {
      // offline fallback
      user = this.state.users.find(u => u.email.toLowerCase() === email && u.password === password);
    }

    if (!user) {
      const exists = this.state.users.find(u => u.email.toLowerCase() === email);
      if (!exists) {
        this.showToast('Account not found with this email address.', 'danger');
      } else {
        this.showToast('Incorrect password. Please try again.', 'danger');
      }
      return false;
    }

    this.currentUser = user;
    if (persist) {
      localStorage.setItem('v_medicare_active_user', JSON.stringify({ email: user.email, password: password, role: user.role }));
    }

    this.closeAllModals();
    this.showToast(`Welcome back, ${user.name}! Accessing ${user.role.toUpperCase()} console.`, 'success');
    this.enterDashboard();
    return true;
  }

  logout() {
    this.currentUser = null;
    this.pendingBookingDoctorId = null;
    localStorage.removeItem('v_medicare_active_user');
    document.getElementById('dashboard-app').classList.remove('active');
    document.getElementById('landing-view').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.showToast('Logged out successfully.', 'info');
  }

  // --- SEPARATE PATIENT REGISTRATION ---
  openRegisterModal() {
    this.closeAllModals();
    const modal = document.getElementById('register-modal');
    if (modal) {
      const errBox = document.getElementById('patient-reg-error');
      if (errBox) {
        errBox.style.display = 'none';
        errBox.innerText = '';
      }
      const form = document.getElementById('patient-registration-form');
      if (form) form.reset();
      modal.classList.add('active');
    }
  }

  async handlePatientRegisterSubmit(form) {
    const name = form.reg_name.value.trim();
    const email = form.reg_email.value.trim().toLowerCase();
    const dob = form.reg_dob.value;
    const gender = form.reg_gender.value;
    const bloodGroup = form.reg_blood.value;
    const phone = form.reg_phone.value.trim();
    const emergencyContact = (form.reg_emergency.value || '').trim() || phone;
    const address = form.reg_address.value.trim();
    const password = form.reg_password.value;
    const confirmPassword = form.reg_confirm_password.value;
    const errBox = document.getElementById('patient-reg-error');

    const showError = (msg) => {
      if (errBox) {
        errBox.style.display = 'flex';
        errBox.innerText = msg;
      } else {
        this.showToast(msg, 'danger');
      }
    };

    if (errBox) errBox.style.display = 'none';

    // 1. Check all required fields
    if (!name || !email || !dob || !gender || !bloodGroup || !phone || !address || !password || !confirmPassword) {
      showError('All fields marked with an asterisk (*) are required.');
      return;
    }

    // 2. Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Please enter a valid email address.');
      return;
    }

    // 3. Password length
    if (password.length < 6) {
      showError('Password must be at least 6 characters long.');
      return;
    }

    // 4. Password match
    if (password !== confirmPassword) {
      showError('Passwords do not match. Please re-enter your password.');
      return;
    }

    // 5. Check duplicate email locally
    const exists = this.state.users.some(u => u.email.toLowerCase() === email);
    if (exists) {
      showError('An account with this email address is already registered. Please log in.');
      return;
    }

    let generatedPatientId = '';

    // Attempt backend registration
    try {
      const response = await fetch(`${this.apiBase}/api/auth/patient/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, dob, gender, bloodGroup, phone, emergencyContact, address, password
        })
      });
      const data = await response.json();
      if (response.ok && data.patient) {
        generatedPatientId = data.patient.patient_id;
      } else {
        showError(data.error || 'Registration failed. Please try again.');
        return;
      }
    } catch (e) {
      // Offline fallback: generate unique next sequence
      let maxSeq = 0;
      this.state.users.forEach(u => {
        if (u.patientId && u.patientId.startsWith('PAT2026')) {
          const num = parseInt(u.patientId.replace('PAT2026', ''));
          if (!isNaN(num) && num > maxSeq) maxSeq = num;
        }
      });
      generatedPatientId = `PAT2026${String(maxSeq + 1).padStart(4, '0')}`;
    }

    const newPatientUser = {
      id: 'USR_' + Date.now(),
      name,
      email,
      role: 'patient',
      patientId: generatedPatientId,
      phone,
      dob,
      gender,
      bloodGroup,
      address,
      emergencyContact,
      password
    };

    this.state.users.push(newPatientUser);

    // Send Simulated Welcome Email
    this.state.emailsSent.unshift({
      id: 'EML_' + Date.now(),
      recipient: email,
      patientName: name,
      subject: 'Welcome to V MediCare — Registration Successful',
      date: new Date().toLocaleString(),
      content: `Dear ${name},\n\nWelcome to V MediCare Hospital Management System. Your registration was completed successfully.\n\nYour Unique Patient ID: ${generatedPatientId}\nRegistered Email: ${email}\n\nPlease retain your Patient ID and registered email for all future appointments, laboratory reports, prescription refills, and hospital billing records.\n\nWarm regards,\nV MediCare Hospital & Research Centre`
    });

    // In-App Notification
    this.state.notifications.unshift({
      id: 'NT_' + Date.now(),
      targetRole: 'all',
      patientId: generatedPatientId,
      message: `Account activated for ${name}. Patient ID: ${generatedPatientId}`,
      date: new Date().toLocaleString(),
      read: false
    });

    this.saveState();

    // Show dedicated Success Modal
    this.closeAllModals();
    this.openRegistrationSuccessModal(newPatientUser);
  }

  openRegistrationSuccessModal(user) {
    const modal = document.getElementById('register-success-modal');
    if (modal) {
      const idEl = document.getElementById('success-patient-id');
      const nameEl = document.getElementById('success-patient-name');
      const emailEl = document.getElementById('success-patient-email');
      if (idEl) idEl.innerText = user.patientId;
      if (nameEl) nameEl.innerText = user.name;
      if (emailEl) emailEl.innerText = user.email;
      modal.classList.add('active');
    }
  }

  goToPatientLoginFromSuccess() {
    const patId = document.getElementById('success-patient-id')?.innerText || '';
    const patEmail = document.getElementById('success-patient-email')?.innerText || '';
    this.closeAllModals();
    this.openPatientLoginModal(patId, patEmail);
  }

  // ==========================================================================
  // APPOINTMENT BOOKING & MANAGEMENT
  // ==========================================================================
  async bookAppointment(aptData) {
    // 1. Conflict check: prevent double-booking for the same doctor at the same date & time
    const isDoubleBooked = this.state.appointments.some(
      a => (a.doctorId === aptData.doctorId || a.doctor_id === aptData.doctorId) &&
        (a.date === aptData.date || a.appointment_date === aptData.date) &&
        (a.time === aptData.time || a.appointment_time === aptData.time) &&
        a.status !== 'Cancelled'
    );

    if (isDoubleBooked) {
      this.showToast('This time slot is already booked for this doctor. Please pick another slot.', 'warning');
      return false;
    }

    const doctor = this.state.doctors.find(d => d.id === aptData.doctorId || d.doctor_id === aptData.doctorId) || {
      id: aptData.doctorId,
      name: 'Specialist Doctor',
      department: aptData.department || 'General Medicine',
      fee: 500
    };

    const patientId = this.currentUser ? (this.currentUser.patientId || this.currentUser.patient_id || 'PAT20260001') : (aptData.patientId || 'PAT20260001');
    const patientName = this.currentUser ? this.currentUser.name : (aptData.patientName || 'Patient');
    const patientEmail = this.currentUser ? this.currentUser.email : (aptData.patientEmail || 'patient@vmedicare.com');

    // Generate Unique Appointment ID (Format: APT + YEAR + 4-digit sequence)
    let maxAptSeq = 0;
    this.state.appointments.forEach(a => {
      const id = a.id || a.appointment_id || '';
      if (id.startsWith('APT2026')) {
        const num = parseInt(id.replace('APT2026', ''));
        if (!isNaN(num) && num > maxAptSeq) maxAptSeq = num;
      }
    });
    let generatedAptId = `APT2026${String(maxAptSeq + 1).padStart(4, '0')}`;

    // Attempt backend sync
    try {
      const response = await fetch(`${this.apiBase}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patient_id: patientId,
          doctor_id: doctor.id || doctor.doctor_id,
          department: doctor.department,
          date: aptData.date,
          time_slot: aptData.time,
          reason: aptData.reason || 'General Consultation',
          notes: aptData.notes || '',
          fee: doctor.fee || 500
        })
      });
      const data = await response.json();
      if (response.ok && data.appointment) {
        generatedAptId = data.appointment.appointment_id;
      } else if (response.status === 409) {
        this.showToast(data.error || 'Time slot already booked for this doctor.', 'warning');
        return false;
      }
    } catch (e) {
      // offline fallback: generatedAptId already set
    }

    const newApt = {
      id: generatedAptId,
      appointment_id: generatedAptId,
      patientId: patientId,
      patient_id: patientId,
      patientName: patientName,
      patientEmail: patientEmail,
      doctorId: doctor.id || doctor.doctor_id,
      doctor_id: doctor.id || doctor.doctor_id,
      doctorName: doctor.name,
      department: doctor.department,
      date: aptData.date,
      time: aptData.time,
      reason: aptData.reason || 'General Medical Consultation',
      notes: aptData.notes || '',
      status: 'Confirmed',
      fee: doctor.fee || 500,
      createdAt: new Date().toLocaleString()
    };

    this.state.appointments.unshift(newApt);

    // Simulated Confirmation Notification
    this.state.notifications.unshift({
      id: 'NT_' + Date.now(),
      targetRole: 'all',
      patientId: newApt.patientId,
      message: `Appointment Confirmed: ${newApt.patientName} with ${newApt.doctorName} on ${newApt.date} at ${newApt.time}.`,
      date: new Date().toLocaleString(),
      read: false
    });

    // Simulated Confirmation Email
    this.state.emailsSent.unshift({
      id: 'EML_' + Date.now(),
      recipient: patientEmail,
      patientName: patientName,
      subject: `Appointment Confirmed — ${newApt.doctorName} (${newApt.date})`,
      date: new Date().toLocaleString(),
      content: `Dear ${patientName},\n\nYour appointment with ${newApt.doctorName} (${newApt.department}) has been confirmed.\n\nAppointment ID: ${newApt.id}\nDate: ${newApt.date}\nTime: ${newApt.time}\nConsultation Fee: ₹${newApt.fee}\n\nPlease arrive 15 minutes prior to your scheduled time at Hospital OPD Level 2.`
    });

    this.saveState();
    this.showToast(`Appointment booked successfully! ID: ${newApt.id}`, 'success');

    // Show Appointment Confirmation Modal
    this.openAppointmentConfirmationModal(newApt);
    return true;
  }

  openAppointmentConfirmationModal(apt) {
    this.closeAllModals();
    const modal = document.getElementById('apt-confirmation-modal');
    if (modal) {
      document.getElementById('confirm-apt-id').innerText = apt.id;
      document.getElementById('confirm-patient-name').innerText = apt.patientName;
      document.getElementById('confirm-patient-id').innerText = apt.patientId;
      document.getElementById('confirm-patient-email').innerText = apt.patientEmail;
      document.getElementById('confirm-doctor-name').innerText = apt.doctorName;
      document.getElementById('confirm-department').innerText = apt.department;
      document.getElementById('confirm-date').innerText = apt.date;
      document.getElementById('confirm-time').innerText = apt.time;
      document.getElementById('confirm-status').innerText = apt.status;
      modal.classList.add('active');
    }
  }

  async cancelAppointment(aptId) {
    const apt = this.state.appointments.find(a => a.id === aptId || a.appointment_id === aptId);
    if (!apt) return;

    const confirmed = confirm(`Are you sure you want to cancel appointment ${aptId}?`);
    if (!confirmed) return;

    try {
      await fetch(`${this.apiBase}/api/appointments/cancel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appointment_id: aptId,
          patient_id: apt.patientId || apt.patient_id
        })
      });
    } catch (e) {
      // offline fallback
    }

    apt.status = 'Cancelled';
    this.state.notifications.unshift({
      id: 'NT_' + Date.now(),
      targetRole: 'all',
      patientId: apt.patientId,
      message: `Appointment ${apt.id} with ${apt.doctorName} on ${apt.date} was cancelled.`,
      date: new Date().toLocaleString(),
      read: false
    });

    this.saveState();
    this.showToast(`Appointment ${aptId} was cancelled.`, 'info');
    this.renderDashboardContent();
  }

  viewAppointmentDetails(aptId) {
    const apt = this.state.appointments.find(a => a.id === aptId || a.appointment_id === aptId);
    if (!apt) return;

    this.closeAllModals();
    const modal = document.getElementById('apt-detail-modal');
    const content = document.getElementById('apt-detail-content');
    if (modal && content) {
      content.innerHTML = `
        <div style="border-bottom: 2px solid var(--primary); padding-bottom:14px; margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div>
              <h2 style="color:var(--primary);">✚ V MediCare Hospital</h2>
              <p style="font-size:0.85rem; color:var(--text-muted);">Outpatient Clinical Consultation Slip</p>
            </div>
            <div class="receipt-id-badge">${apt.id}</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:20px; font-size:0.9rem;">
          <div><b>Patient Name:</b> ${apt.patientName}</div>
          <div><b>Patient ID:</b> ${apt.patientId}</div>
          <div><b>Patient Email:</b> ${apt.patientEmail}</div>
          <div><b>Doctor:</b> ${apt.doctorName}</div>
          <div><b>Department:</b> ${apt.department}</div>
          <div><b>Date & Time:</b> ${apt.date} | ${apt.time}</div>
          <div><b>Consultation Fee:</b> ₹${apt.fee}</div>
          <div><b>Status:</b> <span class="badge ${apt.status === 'Confirmed' ? 'badge-success' : 'badge-danger'}">${apt.status}</span></div>
        </div>

        <div style="background:var(--bg-subtle); padding:14px; border-radius:var(--radius-md); margin-bottom:14px; font-size:0.88rem;">
          <b>Reason for Visit:</b> ${apt.reason || 'General Medical Consultation'}
          ${apt.notes ? `<div style="margin-top:6px;"><b>Clinical Notes:</b> ${apt.notes}</div>` : ''}
        </div>

        <div style="font-size:0.8rem; color:var(--text-muted); border-top:1px solid var(--border-light); padding-top:10px;">
          Please present this slip at OPD Desk Counter 2 on Level 2 at least 15 minutes before your scheduled appointment.
        </div>
      `;
      modal.classList.add('active');
    }
  }

  // ==========================================================================
  // MEDICAL RECORDS & CONSULTATIONS
  // ==========================================================================
  addMedicalRecord(recData) {
    const newRec = {
      id: 'REC2026' + String(this.state.medicalRecords.length + 1).padStart(2, '0'),
      patientId: recData.patientId,
      patientName: recData.patientName,
      doctorId: this.currentUser.id,
      doctorName: this.currentUser.name,
      date: new Date().toISOString().split('T')[0],
      diagnosis: recData.diagnosis,
      symptoms: recData.symptoms,
      treatmentPlan: recData.treatmentPlan,
      vitals: recData.vitals,
      notes: recData.notes
    };

    this.state.medicalRecords.unshift(newRec);

    this.state.notifications.unshift({
      id: 'NT_' + Date.now(),
      targetRole: 'all',
      patientId: recData.patientId,
      message: `Doctor ${this.currentUser.name} updated your clinical medical record.`,
      date: new Date().toLocaleString(),
      read: false
    });

    this.saveState();
    this.showToast('Clinical medical record saved.', 'success');
    this.closeAllModals();
    this.renderDashboardContent();
  }

  // ==========================================================================
  // PRESCRIPTION MODULE
  // ==========================================================================
  addPrescription(rxData) {
    const newRx = {
      id: 'RX2026' + String(this.state.prescriptions.length + 1).padStart(2, '0'),
      patientId: rxData.patientId,
      patientName: rxData.patientName,
      doctorId: this.currentUser.id,
      doctorName: this.currentUser.name,
      date: new Date().toISOString().split('T')[0],
      diagnosis: rxData.diagnosis,
      items: rxData.items,
      dispensed: false
    };

    this.state.prescriptions.unshift(newRx);

    this.state.notifications.unshift({
      id: 'NT_' + Date.now(),
      targetRole: 'all',
      patientId: rxData.patientId,
      message: `New digital prescription issued by ${this.currentUser.name}.`,
      date: new Date().toLocaleString(),
      read: false
    });

    this.saveState();
    this.showToast('Prescription generated successfully.', 'success');
    this.closeAllModals();
    this.renderDashboardContent();
  }

  // ==========================================================================
  // LABORATORY MODULE
  // ==========================================================================
  requestLabTest(testData) {
    const newLab = {
      id: 'LAB2026' + String(this.state.labTests.length + 1).padStart(2, '0'),
      patientId: testData.patientId,
      patientName: testData.patientName,
      doctorName: this.currentUser ? this.currentUser.name : 'Dr. Specialist',
      testType: testData.testType,
      category: testData.category || 'Diagnostic Pathology',
      requestedDate: new Date().toISOString().split('T')[0],
      completedDate: null,
      status: 'Requested',
      fee: testData.fee || 350,
      results: [],
      findings: 'Awaiting specimen collection & lab processing.'
    };

    this.state.labTests.unshift(newLab);
    this.saveState();
    this.showToast(`Laboratory test requested: ${testData.testType}`, 'success');
    this.closeAllModals();
    this.renderDashboardContent();
  }

  completeLabTest(testId, resultsData, findings) {
    const test = this.state.labTests.find(t => t.id === testId);
    if (test) {
      test.status = 'Completed';
      test.completedDate = new Date().toISOString().split('T')[0];
      test.results = resultsData;
      test.findings = findings;

      this.state.notifications.unshift({
        id: 'NT_' + Date.now(),
        targetRole: 'all',
        patientId: test.patientId,
        message: `Your ${test.testType} laboratory report is ready to view.`,
        date: new Date().toLocaleString(),
        read: false
      });

      this.state.emailsSent.unshift({
        id: 'EML_' + Date.now(),
        recipient: 'patient@vmedicare.com',
        patientName: test.patientName,
        subject: `Laboratory Report Available — ${test.testType}`,
        date: new Date().toLocaleString(),
        content: `Dear ${test.patientName},\n\nYour laboratory diagnostic report for ${test.testType} has been published by the Pathology team.\n\nStatus: Completed\nTest ID: ${test.id}\n\nPlease log in to your patient portal to review and download the verified clinical report.`
      });

      this.saveState();
      this.showToast(`Lab report for ${testId} completed & published.`, 'success');
      this.closeAllModals();
      this.renderDashboardContent();
    }
  }

  // ==========================================================================
  // PHARMACY INVENTORY & DISPENSE
  // ==========================================================================
  addOrUpdateMedicine(medData) {
    if (medData.id) {
      const idx = this.state.medicines.findIndex(m => m.id === medData.id);
      if (idx !== -1) {
        this.state.medicines[idx] = { ...this.state.medicines[idx], ...medData };
        this.state.medicines[idx].lowStock = this.state.medicines[idx].stock < this.state.medicines[idx].minStock;
      }
    } else {
      const newMed = {
        id: 'MED' + String(this.state.medicines.length + 1).padStart(2, '0'),
        ...medData,
        lowStock: Number(medData.stock) < Number(medData.minStock)
      };
      this.state.medicines.unshift(newMed);
    }

    this.saveState();
    this.showToast('Medicine inventory updated successfully.', 'success');
    this.closeAllModals();
    this.renderDashboardContent();
  }

  dispensePrescription(rxId) {
    const rx = this.state.prescriptions.find(p => p.id === rxId);
    if (rx) {
      rx.dispensed = true;
      this.saveState();
      this.showToast(`Prescription ${rxId} marked as dispensed.`, 'success');
      this.renderDashboardContent();
    }
  }

  // ==========================================================================
  // BED & ROOM MANAGEMENT
  // ==========================================================================
  updateBedStatus(category, change) {
    const cat = this.state.beds.find(b => b.category === category);
    if (cat) {
      if (change === 'admit' && cat.available > 0) {
        cat.occupied += 1;
        cat.available -= 1;
        this.showToast(`Patient admitted to ${category}. Bed allocated.`, 'success');
      } else if (change === 'discharge' && cat.occupied > 0) {
        cat.occupied -= 1;
        cat.available += 1;
        this.showToast(`Patient discharged from ${category}. Bed released.`, 'info');
      } else {
        this.showToast('No beds available or invalid operation.', 'warning');
      }
      this.saveState();
      this.renderDashboardContent();
    }
  }

  // ==========================================================================
  // BILLING & MOCK PAYMENT GATEWAY
  // ==========================================================================
  createBill(billData) {
    const newBill = {
      id: 'INV2026' + String(this.state.bills.length + 1).padStart(2, '0'),
      patientId: billData.patientId,
      patientName: billData.patientName,
      date: new Date().toISOString().split('T')[0],
      consultationFee: Number(billData.consultationFee || 0),
      roomCharges: Number(billData.roomCharges || 0),
      labCharges: Number(billData.labCharges || 0),
      medicineCharges: Number(billData.medicineCharges || 0),
      treatmentCharges: Number(billData.treatmentCharges || 0),
      totalAmount: Number(billData.consultationFee || 0) +
        Number(billData.roomCharges || 0) +
        Number(billData.labCharges || 0) +
        Number(billData.medicineCharges || 0) +
        Number(billData.treatmentCharges || 0),
      status: 'Pending',
      paymentMode: null,
      paidAt: null
    };

    this.state.bills.unshift(newBill);
    this.saveState();
    this.showToast(`Invoice ${newBill.id} generated for ${newBill.patientName}.`, 'success');
    this.closeAllModals();
    this.renderDashboardContent();
  }

  payBill(billId, paymentMode) {
    const bill = this.state.bills.find(b => b.id === billId);
    if (bill) {
      bill.status = 'Paid';
      bill.paymentMode = paymentMode;
      bill.paidAt = new Date().toLocaleString();

      this.state.notifications.unshift({
        id: 'NT_' + Date.now(),
        targetRole: 'all',
        patientId: bill.patientId,
        message: `Payment of ₹${bill.totalAmount} for invoice ${bill.id} confirmed via ${paymentMode}.`,
        date: new Date().toLocaleString(),
        read: false
      });

      this.saveState();
      this.showToast(`Payment successful! Receipt generated for Invoice ${billId}.`, 'success');
      this.closeAllModals();
      this.renderDashboardContent();
    }
  }

  // ==========================================================================
  // ADMIN STAFF MANAGEMENT
  // ==========================================================================
  addStaffMember(staffData) {
    let generatedId = '';
    if (staffData.role === 'doctor') {
      const docs = this.state.users.filter(u => u.role === 'doctor');
      generatedId = `DOC2026${String(docs.length + 1).padStart(4, '0')}`;
    } else {
      const staffList = this.state.users.filter(u => u.role !== 'doctor' && u.role !== 'patient');
      generatedId = `STF2026${String(staffList.length + 1).padStart(4, '0')}`;
    }

    const newUser = {
      id: 'USR_' + Date.now(),
      name: staffData.name,
      email: staffData.email,
      role: staffData.role,
      staffId: generatedId,
      department: staffData.department,
      phone: staffData.phone,
      status: 'Active',
      password: staffData.password || 'welcome123'
    };

    if (staffData.role === 'doctor') {
      newUser.specialty = staffData.specialty || 'General Consultant';
      newUser.experience = staffData.experience || '5+ Years';
      newUser.availableDays = staffData.days || 'Mon to Fri';
      newUser.fee = Number(staffData.fee) || 500;

      // Also add to doctors directory
      this.state.doctors.push({
        id: 'DOC_' + Date.now(),
        staffId: generatedId,
        name: staffData.name,
        department: staffData.department,
        specialty: newUser.specialty,
        experience: newUser.experience,
        days: newUser.availableDays,
        timing: '09:00 AM - 01:00 PM',
        slots: ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'],
        fee: newUser.fee,
        avatar: '👨‍⚕️'
      });
    }

    this.state.users.push(newUser);
    this.saveState();
    this.showToast(`Staff member ${staffData.name} enrolled with ID: ${generatedId}`, 'success');
    this.closeAllModals();
    this.renderDashboardContent();
  }

  toggleStaffStatus(staffId) {
    const user = this.state.users.find(u => u.staffId === staffId);
    if (user) {
      user.status = user.status === 'Active' ? 'Deactivated' : 'Active';
      this.saveState();
      this.showToast(`Staff account ${staffId} status set to ${user.status}.`, 'info');
      this.renderDashboardContent();
    }
  }

  // ==========================================================================
  // V MEDICARE AI ASSISTANT CONVERSATIONAL LOGIC
  // ==========================================================================
  askAIAssistant(userPrompt) {
    const q = userPrompt.toLowerCase().trim();
    let reply = '';

    if (q.includes('appoint') || q.includes('book') || q.includes('schedule')) {
      reply = `To book an appointment at V MediCare:\n1. Click 'Book Appointment' on the top navbar or sidebar.\n2. Choose your clinical Department.\n3. Pick your Doctor and convenient Date.\n4. Select an available Time Slot and confirm.\n\nYour appointment ID will be issued instantly!`;
    } else if (q.includes('emergency') || q.includes('ambulance') || q.includes('accident') || q.includes('urgent')) {
      reply = `🚨 V MediCare 24/7 Emergency Hotline: 1800-200-9999\nAmbulance Dispatch: +91 98888 11001.\nOur Emergency & Trauma Centre is located at Main Gate East, 24/7 with dedicated ACLS ambulances on standby.`;
    } else if (q.includes('cardio') || q.includes('heart')) {
      reply = `Our Cardiology department is led by Dr. Sarah Jenkins (Senior Interventional Cardiologist). OPD Hours: Mon, Wed, Fri (09:00 AM - 01:00 PM). Services include ECG, Echocardiography, Angiography, and Cardiac ICU.`;
    } else if (q.includes('neuro') || q.includes('brain') || q.includes('spine')) {
      reply = `Our Neurology & Spine department is headed by Dr. Vikram Malhotra. OPD Hours: Tue, Thu, Sat (10:00 AM - 02:00 PM). We offer CT scans, MRI, stroke emergency care, and neuro-surgery.`;
    } else if (q.includes('lab') || q.includes('blood') || q.includes('test') || q.includes('report')) {
      reply = `V MediCare Pathology & Diagnostic Center operates 24/7. We perform CBC, Blood Sugar, Urine Analysis, Chest X-Rays, ECG, CT Scans, and MRI. Reports are uploaded directly to your Patient Dashboard.`;
    } else if (q.includes('time') || q.includes('hour') || q.includes('visit')) {
      reply = `Hospital OPD Timings: 08:00 AM to 08:00 PM (Mon-Sat).\nIn-patient Visiting Hours: 04:00 PM to 07:00 PM daily.\nEmergency & Pharmacy: 24/7 round-the-clock.`;
    } else if (q.includes('pharmacy') || q.includes('medicine')) {
      reply = `The V MediCare 24/7 In-House Pharmacy dispenses all prescribed medicines, specialty injectables, and medical consumables with digital barcode verification.`;
    } else if (q.includes('doctor') || q.includes('specialist')) {
      reply = `V MediCare has 50+ super-specialist doctors across Cardiology, Neurology, Orthopedics, Pediatrics, Dermatology, General Medicine, Gynecology, and ENT. You can view all profiles in the 'Doctors' section.`;
    } else {
      reply = `Welcome to V MediCare! I can assist you with:\n• Finding doctors & departments\n• Booking OPD appointments\n• Emergency numbers & ambulance status\n• Diagnostic lab test guidance\n• Hospital visiting hours\n\nHow may I help you today?`;
    }

    return reply;
  }

  // ==========================================================================
  // RENDERERS (Landing, Dashboards, Modals)
  // ==========================================================================
  renderLandingPublic() {
    // Render Departments
    const deptContainer = document.getElementById('departments-grid-target');
    if (deptContainer) {
      deptContainer.innerHTML = this.state.departments.map(d => `
        <div class="dept-card">
          <div class="dept-icon-wrapper">${d.icon}</div>
          <h4>${d.name}</h4>
          <p>${d.desc}</p>
          <span class="badge badge-primary">${d.doctorsCount} Specialists</span>
        </div>
      `).join('');
    }

    // Render Doctors
    const docContainer = document.getElementById('doctors-grid-target');
    if (docContainer) {
      docContainer.innerHTML = this.state.doctors.map(d => `
        <div class="doctor-card">
          <div class="doc-avatar-container">
            <span>${d.avatar}</span>
            <span class="doc-badge-dept">${d.department}</span>
          </div>
          <div class="doctor-info">
            <h4>${d.name}</h4>
            <p class="specialty">${d.specialty}</p>
            <div class="doctor-meta">
              <span>🩺 <b>Exp:</b> ${d.experience}</span>
              <span>📅 <b>Days:</b> ${d.days}</span>
              <span>⏰ <b>Timing:</b> ${d.timing}</span>
              <span>💵 <b>Fee:</b> ₹${d.fee}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm" style="width:100%" onclick="app.openBookingWizard('${d.id}')">
              Book Appointment
            </button>
          </div>
        </div>
      `).join('');
    }

    // Render Ambulance Status Tracker
    const ambContainer = document.getElementById('ambulance-list-target');
    if (ambContainer) {
      ambContainer.innerHTML = this.state.ambulances.map(a => {
        let badgeClass = 'badge-success';
        if (a.status === 'On Duty') badgeClass = 'badge-warning';
        if (a.status === 'Unavailable') badgeClass = 'badge-danger';
        return `
          <div class="ambulance-item">
            <div>
              <b>${a.id}</b> — ${a.type}
              <div style="font-size:0.75rem; color:var(--text-muted);">Driver: ${a.driver} | ${a.location}</div>
            </div>
            <span class="badge ${badgeClass}">${a.status}</span>
          </div>
        `;
      }).join('');
    }
  }

  enterDashboard() {
    document.getElementById('landing-view').style.display = 'none';
    const dashApp = document.getElementById('dashboard-app');
    dashApp.classList.add('active');

    // Setup User Details on Sidebar
    document.getElementById('dash-user-name').innerText = this.currentUser.name;
    document.getElementById('dash-user-role').innerText = this.currentUser.role.toUpperCase() + (this.currentUser.patientId ? ` (${this.currentUser.patientId})` : (this.currentUser.staffId ? ` (${this.currentUser.staffId})` : ''));
    document.getElementById('dash-user-avatar').innerText = this.currentUser.name.charAt(0);

    // Update Notifications Badge
    this.updateNotificationCount();

    // Render Role Sidebar Links
    this.renderSidebarNav();

    // Switch to Overview View
    this.switchView('overview');
  }

  updateNotificationCount() {
    const unreadCount = this.state.notifications.filter(n => !n.read && (n.targetRole === 'all' || n.targetRole === this.currentUser.role || (this.currentUser.patientId && n.patientId === this.currentUser.patientId))).length;
    const badge = document.getElementById('dash-unread-badge');
    if (badge) {
      badge.innerText = unreadCount;
      badge.style.display = unreadCount > 0 ? 'flex' : 'none';
    }
  }

  renderSidebarNav() {
    const nav = document.getElementById('sidebar-menu-target');
    if (!nav) return;

    const role = this.currentUser.role;
    let items = [];

    if (role === 'patient') {
      items = [
        { id: 'overview', label: 'Dashboard Overview', icon: '📊' },
        { id: 'my-appointments', label: 'My Appointments', icon: '📅' },
        { id: 'book-appointment', label: 'Book Appointment', icon: '➕' },
        { id: 'medical-history', label: 'Medical Records', icon: '🩺' },
        { id: 'prescriptions', label: 'Prescriptions', icon: '💊' },
        { id: 'lab-reports', label: 'Lab Reports', icon: '🧪' },
        { id: 'bills', label: 'Bills & Payments', icon: '💳' },
        { id: 'my-profile', label: 'My Profile', icon: '👤' }
      ];
    } else if (role === 'doctor') {
      items = [
        { id: 'overview', label: 'Doctor Overview', icon: '📊' },
        { id: 'doctor-appointments', label: 'My Schedule', icon: '📅' },
        { id: 'doctor-patients', label: 'Patient Clinical History', icon: '👥' },
        { id: 'doctor-prescriptions', label: 'Issue Prescriptions', icon: '💊' },
        { id: 'doctor-lab-requests', label: 'Request Lab Tests', icon: '🧪' }
      ];
    } else if (role === 'receptionist') {
      items = [
        { id: 'overview', label: 'Front Desk Overview', icon: '📊' },
        { id: 'reception-register', label: 'Patient Registration', icon: '📝' },
        { id: 'reception-appointments', label: 'Appointment Master', icon: '📅' },
        { id: 'reception-beds', label: 'Bed Allocation & Rooms', icon: '🛏️' },
        { id: 'reception-billing', label: 'Billing Counter', icon: '💳' }
      ];
    } else if (role === 'pharmacist') {
      items = [
        { id: 'overview', label: 'Pharmacy Dashboard', icon: '📊' },
        { id: 'pharmacy-prescriptions', label: 'Prescription Dispense', icon: '💊' },
        { id: 'pharmacy-inventory', label: 'Medicine Stock & Expiry', icon: '📦' },
        { id: 'pharmacy-alerts', label: 'Low-Stock Warnings', icon: '⚠️' }
      ];
    } else if (role === 'labtech') {
      items = [
        { id: 'overview', label: 'Laboratory Console', icon: '📊' },
        { id: 'lab-requests-queue', label: 'Test Requests Queue', icon: '🧪' },
        { id: 'lab-completed', label: 'Published Reports', icon: '📑' }
      ];
    } else if (role === 'admin') {
      items = [
        { id: 'overview', label: 'Admin Command Center', icon: '📊' },
        { id: 'admin-staff', label: 'Staff Management', icon: '👨‍⚕️' },
        { id: 'admin-patients', label: 'Patients Directory', icon: '👥' },
        { id: 'admin-appointments', label: 'All Appointments', icon: '📅' },
        { id: 'admin-beds', label: 'Bed & Room Occupancy', icon: '🛏️' },
        { id: 'admin-pharmacy', label: 'Pharmacy Inventory', icon: '📦' },
        { id: 'admin-lab', label: 'Laboratory Metrics', icon: '🧪' },
        { id: 'admin-billing', label: 'Financial Billing', icon: '💳' },
        { id: 'admin-analytics', label: 'Interactive Analytics', icon: '📈' }
      ];
    }

    nav.innerHTML = items.map(item => `
      <li class="sidebar-item ${this.activeView === item.id ? 'active' : ''}" onclick="app.switchView('${item.id}')">
        <span class="item-icon">${item.icon}</span>
        <span>${item.label}</span>
      </li>
    `).join('');
  }

  switchView(viewId) {
    this.activeView = viewId;
    this.renderSidebarNav();
    this.renderDashboardContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================================================
  // DASHBOARD VIEW CONTENT RENDERER
  // ==========================================================================
  renderDashboardContent() {
    const container = document.getElementById('dash-content-target');
    if (!container) return;

    const role = this.currentUser.role;
    const view = this.activeView;

    // 1. PATIENT VIEWS
    if (role === 'patient') {
      if (view === 'overview') this.renderPatientOverview(container);
      else if (view === 'my-appointments') this.renderPatientAppointments(container);
      else if (view === 'book-appointment') this.renderPatientBookAppointment(container);
      else if (view === 'medical-history') this.renderPatientMedicalRecords(container);
      else if (view === 'prescriptions') this.renderPatientPrescriptions(container);
      else if (view === 'lab-reports') this.renderPatientLabReports(container);
      else if (view === 'bills') this.renderPatientBills(container);
      else if (view === 'my-profile') this.renderPatientProfile(container);
    }
    // 2. DOCTOR VIEWS
    else if (role === 'doctor') {
      if (view === 'overview') this.renderDoctorOverview(container);
      else if (view === 'doctor-appointments') this.renderDoctorSchedule(container);
      else if (view === 'doctor-patients') this.renderDoctorPatients(container);
      else if (view === 'doctor-prescriptions') this.renderDoctorPrescriptionTools(container);
      else if (view === 'doctor-lab-requests') this.renderDoctorLabTools(container);
    }
    // 3. RECEPTIONIST VIEWS
    else if (role === 'receptionist') {
      if (view === 'overview') this.renderReceptionOverview(container);
      else if (view === 'reception-register') this.renderReceptionRegister(container);
      else if (view === 'reception-appointments') this.renderReceptionAppointments(container);
      else if (view === 'reception-beds') this.renderReceptionBeds(container);
      else if (view === 'reception-billing') this.renderReceptionBilling(container);
    }
    // 4. PHARMACIST VIEWS
    else if (role === 'pharmacist') {
      if (view === 'overview') this.renderPharmacyOverview(container);
      else if (view === 'pharmacy-prescriptions') this.renderPharmacyPrescriptions(container);
      else if (view === 'pharmacy-inventory') this.renderPharmacyInventory(container);
      else if (view === 'pharmacy-alerts') this.renderPharmacyAlerts(container);
    }
    // 5. LAB TECH VIEWS
    else if (role === 'labtech') {
      if (view === 'overview') this.renderLabOverview(container);
      else if (view === 'lab-requests-queue') this.renderLabQueue(container);
      else if (view === 'lab-completed') this.renderLabCompleted(container);
    }
    // 6. ADMIN VIEWS
    else if (role === 'admin') {
      if (view === 'overview') this.renderAdminOverview(container);
      else if (view === 'admin-staff') this.renderAdminStaff(container);
      else if (view === 'admin-patients') this.renderAdminPatients(container);
      else if (view === 'admin-appointments') this.renderAdminAppointments(container);
      else if (view === 'admin-beds') this.renderAdminBeds(container);
      else if (view === 'admin-pharmacy') this.renderPharmacyInventory(container);
      else if (view === 'admin-lab') this.renderLabCompleted(container);
      else if (view === 'admin-billing') this.renderAdminBilling(container);
      else if (view === 'admin-analytics') this.renderAdminAnalytics(container);
    }
  }

  // --- PATIENT COMPONENTS ---
  renderPatientOverview(container) {
    const patientApts = this.state.appointments.filter(a => a.patientId === this.currentUser.patientId);
    const upcomingApt = patientApts.find(a => a.status === 'Confirmed');
    const prescriptions = this.state.prescriptions.filter(p => p.patientId === this.currentUser.patientId);
    const labReports = this.state.labTests.filter(l => l.patientId === this.currentUser.patientId);
    const pendingBills = this.state.bills.filter(b => b.patientId === this.currentUser.patientId && b.status === 'Pending');

    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h3>Hello, ${this.currentUser.name} 👋</h3>
        <p style="color:var(--text-muted)">Patient ID: <span class="badge badge-primary">${this.currentUser.patientId}</span> | Blood Group: <b>${this.currentUser.bloodGroup || 'O+'}</b></p>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Upcoming Appointments</p>
            <h3>${patientApts.filter(a => a.status === 'Confirmed').length}</h3>
          </div>
          <div class="kpi-icon blue">📅</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Prescriptions</p>
            <h3>${prescriptions.length}</h3>
          </div>
          <div class="kpi-icon purple">💊</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Lab Reports</p>
            <h3>${labReports.length}</h3>
          </div>
          <div class="kpi-icon green">🧪</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Pending Invoices</p>
            <h3>${pendingBills.length}</h3>
          </div>
          <div class="kpi-icon orange">💳</div>
        </div>
      </div>

      ${upcomingApt ? `
        <div class="content-card" style="background: linear-gradient(135deg, #e0e7ff 0%, #ffffff 100%); border-left: 5px solid var(--primary);">
          <div class="content-card-header">
            <div>
              <span class="badge badge-primary">Next Confirmed Visit</span>
              <h4 style="margin-top:6px;">Appointment with ${upcomingApt.doctorName} (${upcomingApt.department})</h4>
            </div>
            <button class="btn btn-outline-primary btn-sm" onclick="app.switchView('my-appointments')">Manage Visit</button>
          </div>
          <div class="modal-body" style="display:flex; gap:30px; flex-wrap:wrap;">
            <div>📅 <b>Date:</b> ${upcomingApt.date}</div>
            <div>⏰ <b>Time:</b> ${upcomingApt.time}</div>
            <div>📝 <b>Reason:</b> ${upcomingApt.reason}</div>
            <div>💵 <b>Consultation Fee:</b> ₹${upcomingApt.fee}</div>
          </div>
        </div>
      ` : `
        <div class="content-card" style="text-align:center; padding:30px;">
          <p style="color:var(--text-muted); margin-bottom:12px;">You have no scheduled appointments.</p>
          <button class="btn btn-primary" onclick="app.switchView('book-appointment')">Book a Doctor Now</button>
        </div>
      `}

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
        <div class="content-card">
          <div class="content-card-header">
            <h4 class="content-card-title">Recent Prescriptions</h4>
            <button class="btn btn-outline btn-sm" onclick="app.switchView('prescriptions')">View All</button>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Diagnosis</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                ${prescriptions.slice(0, 3).map(p => `
                  <tr>
                    <td><b>${p.doctorName}</b></td>
                    <td>${p.diagnosis}</td>
                    <td>${p.date}</td>
                  </tr>
                `).join('') || '<tr><td colspan="3" style="text-align:center;color:var(--text-muted);">No records found</td></tr>'}
              </tbody>
            </table>
          </div>
        </div>

        <div class="content-card">
          <div class="content-card-header">
            <h4 class="content-card-title">Diagnostic Reports</h4>
            <button class="btn btn-outline btn-sm" onclick="app.switchView('lab-reports')">View All</button>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                ${labReports.slice(0, 3).map(l => `
                  <tr>
                    <td><b>${l.testType}</b></td>
                    <td><span class="badge ${l.status === 'Completed' ? 'badge-success' : 'badge-warning'}">${l.status}</span></td>
                    <td>${l.completedDate || l.requestedDate}</td>
                  </tr>
                `).join('') || '<tr><td colspan="3" style="text-align:center;color:var(--text-muted);">No lab records</td></tr>'}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  renderPatientAppointments(container) {
    const pId = this.currentUser.patientId || this.currentUser.patient_id;
    const apts = this.state.appointments.filter(a => (a.patientId === pId || a.patient_id === pId));

    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <div>
            <h3 class="content-card-title">My Appointments</h3>
            <p style="color:var(--text-muted); font-size:0.85rem;">Track, view details slip, or cancel your booked medical consultations.</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="app.switchView('book-appointment')">➕ Book New Appointment</button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date & Time</th>
                <th>Reason</th>
                <th>Fee</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${apts.map(a => `
                <tr>
                  <td><b>${a.id}</b></td>
                  <td>${a.doctorName}</td>
                  <td><span class="badge badge-primary">${a.department}</span></td>
                  <td>${a.date} | <b>${a.time}</b></td>
                  <td>${a.reason}</td>
                  <td>₹${a.fee}</td>
                  <td>
                    <span class="badge ${a.status === 'Confirmed' ? 'badge-success' : (a.status === 'Cancelled' ? 'badge-danger' : 'badge-info')}">
                      ${a.status}
                    </span>
                  </td>
                  <td>
                    <div style="display:flex; gap:6px;">
                      <button class="btn btn-outline-primary btn-sm" onclick="app.viewAppointmentDetails('${a.id}')" title="View Appointment Slip">📄 Slip</button>
                      ${a.status === 'Confirmed' ? `
                        <button class="btn btn-danger btn-sm" onclick="app.cancelAppointment('${a.id}')">Cancel</button>
                      ` : ''}
                    </div>
                  </td>
                </tr>
              `).join('') || '<tr><td colspan="8" style="text-align:center; padding:30px; color:var(--text-muted);">No appointments booked yet. Click "Book New Appointment" to schedule a visit.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderPatientBookAppointment(container) {
    const p = this.currentUser;
    const today = new Date().toISOString().split('T')[0];

    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <div>
            <h3 class="content-card-title">Book Doctor Appointment</h3>
            <p style="color:var(--text-muted); font-size:0.88rem;">Step-by-step verified outpatient clinical scheduling</p>
          </div>
          <span class="badge badge-success">● Live Slots</span>
        </div>
        <div class="modal-body">
          <!-- 1. Auto-loaded Registered Patient Information (Read-Only) -->
          <div class="patient-autofill-banner">
            <div class="banner-title">
              <span>👤</span> Auto-Verified Patient Profile (No re-entry required)
            </div>
            <div class="patient-autofill-grid">
              <div class="patient-autofill-item">
                <span>Patient Name</span>
                <strong>${p.name}</strong>
              </div>
              <div class="patient-autofill-item">
                <span>Patient ID</span>
                <strong class="badge badge-primary">${p.patientId || p.patient_id}</strong>
              </div>
              <div class="patient-autofill-item">
                <span>Registered Email</span>
                <strong>${p.email}</strong>
              </div>
              <div class="patient-autofill-item">
                <span>Phone Number</span>
                <strong>${p.phone || '+91 98765 43210'}</strong>
              </div>
            </div>
          </div>

          <form id="book-apt-form" onsubmit="event.preventDefault(); app.handleBookingSubmit();">
            <!-- 2. Step 1: Select Department -->
            <div class="form-group">
              <label class="form-label"><b>Step 1:</b> Select Department *</label>
              <select class="form-control" id="apt-dept-select" required onchange="app.onDeptChanged(this.value)">
                <option value="">-- Choose Clinical Department --</option>
                ${this.state.departments.map(d => `<option value="${d.name}">${d.name}</option>`).join('')}
              </select>
            </div>

            <!-- 3. Step 2: Select Doctor (Strictly belonging to selected Department) -->
            <div class="form-group">
              <label class="form-label"><b>Step 2:</b> Select Doctor *</label>
              <select class="form-control" id="apt-doctor-select" required onchange="app.onDoctorChanged(this.value)">
                <option value="">-- First Choose Department Above --</option>
                ${this.state.doctors.map(d => `<option value="${d.id}">${d.name} (${d.department})</option>`).join('')}
              </select>
            </div>

            <!-- Doctor Timing & Consultation Fee Info Box -->
            <div id="doctor-fee-display" class="auth-alert-box info" style="display:none;"></div>

            <!-- 4. Step 3: Select Appointment Date -->
            <div class="form-group">
              <label class="form-label"><b>Step 3:</b> Select Appointment Date *</label>
              <input type="date" class="form-control" id="apt-date-input" min="${today}" value="${today}" required onchange="app.renderAvailableSlots()">
            </div>

            <!-- 5. Step 4: Select Available Time Slot -->
            <div class="form-group">
              <label class="form-label"><b>Step 4:</b> Select Available Time Slot *</label>
              <div id="slots-container" class="slots-grid">
                <p style="grid-column: 1/-1; color:var(--text-muted); font-size:0.85rem;">Please select a doctor to view available consultation slots.</p>
              </div>
              <input type="hidden" id="selected-slot-value" required>
            </div>

            <!-- 6. Step 5: Reason for Visit & Additional Notes -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label"><b>Step 5:</b> Reason for Visit *</label>
                <input type="text" class="form-control" id="apt-reason-input" placeholder="e.g. Chest pain evaluation, routine BP follow-up..." required>
              </div>
              <div class="form-group">
                <label class="form-label">Additional Notes (Optional)</label>
                <input type="text" class="form-control" id="apt-notes-input" placeholder="e.g. Bringing prior ECG and blood reports...">
              </div>
            </div>

            <button type="submit" id="btn-confirm-apt" class="btn btn-primary btn-lg" style="width:100%; margin-top:8px;">
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    `;

    // Trigger initial slots if doctors available
    setTimeout(() => {
      const docSelect = document.getElementById('apt-doctor-select');
      if (docSelect && docSelect.value) {
        this.onDoctorChanged(docSelect.value);
      }
    }, 50);
  }

  onDeptChanged(deptName) {
    const docSelect = document.getElementById('apt-doctor-select');
    if (!docSelect) return;
    const filteredDocs = deptName ? this.state.doctors.filter(d => d.department === deptName) : this.state.doctors;
    docSelect.innerHTML = `<option value="">-- Choose Specialist Doctor --</option>` + filteredDocs.map(d => `<option value="${d.id}">${d.name} (${d.specialty || d.department})</option>`).join('');

    const feeDisplay = document.getElementById('doctor-fee-display');
    if (feeDisplay) feeDisplay.style.display = 'none';

    document.getElementById('selected-slot-value').value = '';
    this.renderAvailableSlots();
  }

  onDoctorChanged(doctorId) {
    const doc = this.state.doctors.find(d => d.id === doctorId || d.doctor_id === doctorId);
    const feeDisplay = document.getElementById('doctor-fee-display');
    if (doc && feeDisplay) {
      feeDisplay.style.display = 'flex';
      feeDisplay.innerHTML = `<span>ℹ️</span> <div><b>${doc.name}</b> (${doc.department}) &bull; Consultation Fee: <b>₹${doc.fee}</b> &bull; Timings: <b>${doc.timing}</b> (${doc.days})</div>`;
    } else if (feeDisplay) {
      feeDisplay.style.display = 'none';
    }
    document.getElementById('selected-slot-value').value = '';
    this.renderAvailableSlots();
  }

  renderAvailableSlots() {
    const docId = document.getElementById('apt-doctor-select')?.value;
    const date = document.getElementById('apt-date-input')?.value;
    const container = document.getElementById('slots-container');
    if (!container) return;

    if (!docId || !date) {
      container.innerHTML = `<p style="grid-column: 1/-1; color:var(--text-muted); font-size:0.85rem;">Please select doctor and date to load slots.</p>`;
      return;
    }

    const doctor = this.state.doctors.find(d => d.id === docId || d.doctor_id === docId);
    if (!doctor) return;

    // Filter appointments for this doctor on this date that are not cancelled
    const bookedSlots = this.state.appointments
      .filter(a => (a.doctorId === docId || a.doctor_id === docId) &&
        (a.date === date || a.appointment_date === date) &&
        a.status !== 'Cancelled')
      .map(a => a.time || a.appointment_time);

    const slots = doctor.slots || ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

    container.innerHTML = slots.map(slot => {
      const isBooked = bookedSlots.includes(slot);
      return `
        <button type="button" class="slot-btn ${isBooked ? 'disabled' : ''}"
          ${isBooked ? 'disabled title="Time slot already booked by another patient"' : `onclick="app.selectSlot('${slot}', this)"`}>
          ${slot} ${isBooked ? '(Booked)' : ''}
        </button>
      `;
    }).join('');
  }

  selectSlot(slot, element) {
    document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('selected-slot-value').value = slot;
  }

  async handleBookingSubmit() {
    const docId = document.getElementById('apt-doctor-select').value;
    const date = document.getElementById('apt-date-input').value;
    const time = document.getElementById('selected-slot-value').value;
    const reason = document.getElementById('apt-reason-input').value.trim();
    const notes = document.getElementById('apt-notes-input') ? document.getElementById('apt-notes-input').value.trim() : '';

    if (!docId) {
      this.showToast('Please select a doctor.', 'warning');
      return;
    }
    if (!date) {
      this.showToast('Please select an appointment date.', 'warning');
      return;
    }
    if (!time) {
      this.showToast('Please select an available time slot.', 'warning');
      return;
    }
    if (!reason) {
      this.showToast('Please describe the reason for your consultation.', 'warning');
      return;
    }

    await this.bookAppointment({
      doctorId: docId,
      date,
      time,
      reason,
      notes
    });
  }

  renderPatientMedicalRecords(container) {
    const records = this.state.medicalRecords.filter(r => r.patientId === this.currentUser.patientId);
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Electronic Health & Clinical Records</h3>
        </div>
        <div class="modal-body">
          ${records.map(r => `
            <div style="border:1px solid var(--border-light); border-radius:var(--radius-lg); padding:20px; margin-bottom:20px; background:#ffffff;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div>
                  <h4 style="color:var(--primary); font-size:1.2rem;">${r.diagnosis}</h4>
                  <span style="font-size:0.85rem; color:var(--text-muted);">Consultant: <b>${r.doctorName}</b> | Date: ${r.date}</span>
                </div>
                <button class="btn btn-outline btn-sm" onclick="window.print()">🖨️ Print Clinical Summary</button>
              </div>
              <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:12px; background:var(--bg-subtle); padding:12px; border-radius:var(--radius-md); margin-bottom:14px; font-size:0.85rem;">
                <div><b>Blood Pressure:</b> ${r.vitals.bp}</div>
                <div><b>Pulse:</b> ${r.vitals.pulse}</div>
                <div><b>Temperature:</b> ${r.vitals.temp}</div>
                <div><b>Weight:</b> ${r.vitals.weight}</div>
              </div>
              <div style="margin-bottom:8px;"><b>Presenting Symptoms:</b> ${r.symptoms}</div>
              <div style="margin-bottom:8px;"><b>Treatment Plan:</b> ${r.treatmentPlan}</div>
              <div style="font-size:0.85rem; color:var(--text-muted);"><b>Clinical Notes:</b> ${r.notes}</div>
            </div>
          `).join('') || '<p style="text-align:center; color:var(--text-muted);">No clinical medical records recorded yet.</p>'}
        </div>
      </div>
    `;
  }

  renderPatientPrescriptions(container) {
    const prescriptions = this.state.prescriptions.filter(p => p.patientId === this.currentUser.patientId);
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Digital Doctor Prescriptions</h3>
        </div>
        <div class="modal-body">
          ${prescriptions.map(p => `
            <div style="border:1px solid var(--border-light); border-radius:var(--radius-lg); padding:24px; margin-bottom:20px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
                <div>
                  <h4 style="font-size:1.15rem;">Prescription #${p.id}</h4>
                  <span style="color:var(--text-muted); font-size:0.85rem;">Prescribed by <b>${p.doctorName}</b> on ${p.date}</span>
                </div>
                <span class="badge ${p.dispensed ? 'badge-success' : 'badge-warning'}">${p.dispensed ? 'Dispensed by Pharmacy' : 'Active Prescription'}</span>
              </div>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Medicine Name</th>
                    <th>Dosage</th>
                    <th>Frequency</th>
                    <th>Duration</th>
                    <th>Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  ${p.items.map(item => `
                    <tr>
                      <td><b>${item.medicine}</b></td>
                      <td>${item.dosage}</td>
                      <td>${item.frequency}</td>
                      <td>${item.duration}</td>
                      <td>${item.instructions}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `).join('') || '<p style="text-align:center; color:var(--text-muted);">No prescriptions on file.</p>'}
        </div>
      </div>
    `;
  }

  renderPatientLabReports(container) {
    const tests = this.state.labTests.filter(l => l.patientId === this.currentUser.patientId);
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Laboratory Diagnostic Reports</h3>
        </div>
        <div class="modal-body">
          ${tests.map(t => `
            <div style="border:1px solid var(--border-light); border-radius:var(--radius-lg); padding:24px; margin-bottom:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <div>
                  <h4 style="font-size:1.2rem; color:var(--primary);">${t.testType}</h4>
                  <span style="font-size:0.85rem; color:var(--text-muted);">Test ID: <b>${t.id}</b> | Ordered by: <b>${t.doctorName}</b> | Category: ${t.category}</span>
                </div>
                <span class="badge ${t.status === 'Completed' ? 'badge-success' : 'badge-warning'}">${t.status}</span>
              </div>

              ${t.status === 'Completed' && t.results && t.results.length > 0 ? `
                <table class="data-table" style="margin-bottom:14px;">
                  <thead>
                    <tr>
                      <th>Analyte Parameter</th>
                      <th>Observed Value</th>
                      <th>Unit</th>
                      <th>Reference Range</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${t.results.map(r => `
                      <tr>
                        <td><b>${r.parameter}</b></td>
                        <td>${r.value}</td>
                        <td>${r.unit}</td>
                        <td>${r.normalRange}</td>
                        <td><span class="badge badge-success">${r.status}</span></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
                <div style="background:var(--bg-subtle); padding:12px; border-radius:var(--radius-md); font-size:0.88rem;">
                  <b>Pathologist Verified Impression:</b> ${t.findings}
                </div>
              ` : `
                <p style="color:var(--text-muted); font-size:0.9rem;">${t.findings}</p>
              `}
            </div>
          `).join('') || '<p style="text-align:center; color:var(--text-muted);">No lab test orders found.</p>'}
        </div>
      </div>
    `;
  }

  renderPatientBills(container) {
    const bills = this.state.bills.filter(b => b.patientId === this.currentUser.patientId);
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Billing Statements & Payment History</h3>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Consultation</th>
                <th>Room</th>
                <th>Lab Tests</th>
                <th>Medicines</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${bills.map(b => `
                <tr>
                  <td><b>${b.id}</b></td>
                  <td>${b.date}</td>
                  <td>₹${b.consultationFee}</td>
                  <td>₹${b.roomCharges}</td>
                  <td>₹${b.labCharges}</td>
                  <td>₹${b.medicineCharges}</td>
                  <td><b>₹${b.totalAmount}</b></td>
                  <td><span class="badge ${b.status === 'Paid' ? 'badge-success' : 'badge-danger'}">${b.status}</span></td>
                  <td>
                    ${b.status === 'Pending' ? `
                      <button class="btn btn-primary btn-sm" onclick="app.openPaymentModal('${b.id}')">Pay Now</button>
                    ` : `
                      <button class="btn btn-outline btn-sm" onclick="app.openInvoicePrint('${b.id}')">Print Receipt</button>
                    `}
                  </td>
                </tr>
              `).join('') || '<tr><td colspan="9" style="text-align:center;">No billing records found.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderPatientProfile(container) {
    const p = this.currentUser;
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">My Patient Profile</h3>
          <span class="badge badge-primary">ID: ${p.patientId}</span>
        </div>
        <div class="modal-body">
          <form onsubmit="event.preventDefault(); app.showToast('Profile information updated successfully.', 'success');">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control" value="${p.name}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-control" value="${p.email}" readonly style="background:var(--bg-subtle);">
              </div>
            </div>
            <div class="form-row-3">
              <div class="form-group">
                <label class="form-label">Phone</label>
                <input type="text" class="form-control" value="${p.phone || ''}">
              </div>
              <div class="form-group">
                <label class="form-label">Date of Birth</label>
                <input type="date" class="form-control" value="${p.dob || ''}">
              </div>
              <div class="form-group">
                <label class="form-label">Blood Group</label>
                <input type="text" class="form-control" value="${p.bloodGroup || ''}">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Residential Address</label>
                <input type="text" class="form-control" value="${p.address || ''}">
              </div>
              <div class="form-group">
                <label class="form-label">Emergency Contact Phone</label>
                <input type="text" class="form-control" value="${p.emergencyContact || ''}">
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Update Profile Information</button>
          </form>
        </div>
      </div>
    `;
  }

  // --- DOCTOR DASHBOARD COMPONENTS ---
  renderDoctorOverview(container) {
    const docApts = this.state.appointments.filter(a => a.doctorName.includes(this.currentUser.name) || a.doctorId === 'DOC01');
    const today = new Date().toISOString().split('T')[0];
    const todayApts = docApts.filter(a => a.date === today);

    container.innerHTML = `
      <div style="margin-bottom:24px;">
        <h3>Doctor Clinical Portal — ${this.currentUser.name}</h3>
        <p style="color:var(--text-muted)">Specialty: <b>${this.currentUser.specialty || 'Senior Consultant'}</b> | Department: <b>${this.currentUser.department}</b></p>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Total Consultations</p>
            <h3>${docApts.length}</h3>
          </div>
          <div class="kpi-icon blue">🩺</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Today's Schedule</p>
            <h3>${todayApts.length}</h3>
          </div>
          <div class="kpi-icon purple">📅</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Pending Consults</p>
            <h3>${docApts.filter(a => a.status === 'Confirmed').length}</h3>
          </div>
          <div class="kpi-icon orange">⏳</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Completed Visits</p>
            <h3>${docApts.filter(a => a.status === 'Completed').length}</h3>
          </div>
          <div class="kpi-icon green">✅</div>
        </div>
      </div>

      <div class="content-card">
        <div class="content-card-header">
          <h4 class="content-card-title">Patient Appointments Schedule</h4>
          <button class="btn btn-primary btn-sm" onclick="app.openNewMedicalRecordModal()">➕ Add Clinical Record</button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Patient ID</th>
                <th>Date & Time</th>
                <th>Chief Complaint</th>
                <th>Status</th>
                <th>Clinical Actions</th>
              </tr>
            </thead>
            <tbody>
              ${docApts.map(a => `
                <tr>
                  <td><b>${a.patientName}</b></td>
                  <td><span class="badge badge-primary">${a.patientId}</span></td>
                  <td>${a.date} | ${a.time}</td>
                  <td>${a.reason}</td>
                  <td><span class="badge ${a.status === 'Confirmed' ? 'badge-success' : 'badge-info'}">${a.status}</span></td>
                  <td>
                    <button class="btn btn-outline-primary btn-sm" onclick="app.openPrescriptionModal('${a.patientId}', '${a.patientName}')">Prescribe</button>
                    <button class="btn btn-outline btn-sm" onclick="app.openLabOrderModal('${a.patientId}', '${a.patientName}')">Order Lab</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderDoctorSchedule(container) {
    this.renderDoctorOverview(container);
  }

  renderDoctorPatients(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Clinical History & Records Database</h3>
          <button class="btn btn-primary btn-sm" onclick="app.openNewMedicalRecordModal()">➕ New Consultation Diagnosis</button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Diagnosis</th>
                <th>Date</th>
                <th>Treatment Plan</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.medicalRecords.map(r => `
                <tr>
                  <td><span class="badge badge-primary">${r.patientId}</span></td>
                  <td><b>${r.patientName}</b></td>
                  <td>${r.diagnosis}</td>
                  <td>${r.date}</td>
                  <td>${r.treatmentPlan}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderDoctorPrescriptionTools(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Prescriptions Management</h3>
          <button class="btn btn-primary btn-sm" onclick="app.openPrescriptionModal('PAT20260001', 'Ramesh Patel')">➕ Issue Prescription</button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Rx ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Prescribed Items</th>
                <th>Pharmacy Status</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.prescriptions.map(p => `
                <tr>
                  <td><b>${p.id}</b></td>
                  <td>${p.patientName} (${p.patientId})</td>
                  <td>${p.doctorName}</td>
                  <td>${p.date}</td>
                  <td>${p.items.map(i => i.medicine).join(', ')}</td>
                  <td><span class="badge ${p.dispensed ? 'badge-success' : 'badge-warning'}">${p.dispensed ? 'Dispensed' : 'Pending'}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderDoctorLabTools(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Laboratory Diagnostic Orders</h3>
          <button class="btn btn-primary btn-sm" onclick="app.openLabOrderModal('PAT20260001', 'Ramesh Patel')">➕ Request Test</button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Test ID</th>
                <th>Patient</th>
                <th>Test Ordered</th>
                <th>Requested Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.labTests.map(l => `
                <tr>
                  <td><b>${l.id}</b></td>
                  <td>${l.patientName} (${l.patientId})</td>
                  <td><b>${l.testType}</b></td>
                  <td>${l.requestedDate}</td>
                  <td><span class="badge ${l.status === 'Completed' ? 'badge-success' : 'badge-warning'}">${l.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- RECEPTIONIST DASHBOARD ---
  renderReceptionOverview(container) {
    const totalPatients = this.state.users.filter(u => u.role === 'patient').length;
    const todayApts = this.state.appointments.length;
    const totalBedsAvail = this.state.beds.reduce((acc, b) => acc + b.available, 0);

    container.innerHTML = `
      <div style="margin-bottom:24px;">
        <h3>Hospital Reception & Admissions Desk</h3>
        <p style="color:var(--text-muted)">Staff Member: <b>${this.currentUser.name}</b> (${this.currentUser.staffId})</p>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Registered Patients</p>
            <h3>${totalPatients}</h3>
          </div>
          <div class="kpi-icon blue">👥</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Active Appointments</p>
            <h3>${todayApts}</h3>
          </div>
          <div class="kpi-icon purple">📅</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Beds Available</p>
            <h3>${totalBedsAvail}</h3>
          </div>
          <div class="kpi-icon green">🛏️</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Unpaid Invoices</p>
            <h3>${this.state.bills.filter(b => b.status === 'Pending').length}</h3>
          </div>
          <div class="kpi-icon orange">💳</div>
        </div>
      </div>

      <div style="display:flex; gap:12px; margin-bottom:24px;">
        <button class="btn btn-primary" onclick="app.switchView('reception-register')">➕ Register Walk-in Patient</button>
        <button class="btn btn-secondary" onclick="app.switchView('reception-beds')">🛏️ Bed Tracker</button>
        <button class="btn btn-outline" onclick="app.switchView('reception-billing')">💳 Billing Counter</button>
      </div>

      <div class="content-card">
        <div class="content-card-header">
          <h4 class="content-card-title">Live Hospital Appointments</h4>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Appt ID</th>
                <th>Patient Name</th>
                <th>Doctor</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.appointments.map(a => `
                <tr>
                  <td><b>${a.id}</b></td>
                  <td>${a.patientName} (${a.patientId})</td>
                  <td>${a.doctorName}</td>
                  <td>${a.date} ${a.time}</td>
                  <td><span class="badge ${a.status === 'Confirmed' ? 'badge-success' : 'badge-warning'}">${a.status}</span></td>
                  <td>
                    <button class="btn btn-sm btn-outline" onclick="app.showToast('Patient marked present at OPD desk.', 'success')">Check In</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderReceptionRegister(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Hospital Patient Registration (Front Desk)</h3>
          <p style="color:var(--text-muted); font-size:0.85rem;">System will automatically generate unique Patient ID and notify patient.</p>
        </div>
        <div class="modal-body">
          <form onsubmit="event.preventDefault(); app.handleReceptionistRegister(this);">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" name="name" class="form-control" required placeholder="e.g. Priya Nair">
              </div>
              <div class="form-group">
                <label class="form-label">Email Address (For ID & Reports)</label>
                <input type="email" name="email" class="form-control" required placeholder="e.g. priya@gmail.com">
              </div>
            </div>
            <div class="form-row-3">
              <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="text" name="phone" class="form-control" required placeholder="+91 98765 11223">
              </div>
              <div class="form-group">
                <label class="form-label">Date of Birth</label>
                <input type="date" name="dob" class="form-control" required>
              </div>
              <div class="form-group">
                <label class="form-label">Gender</label>
                <select name="gender" class="form-control" required>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Blood Group</label>
                <select name="bloodGroup" class="form-control">
                  <option value="A+">A+</option><option value="A-">A-</option>
                  <option value="B+">B+</option><option value="B-">B-</option>
                  <option value="O+">O+</option><option value="O-">O-</option>
                  <option value="AB+">AB+</option><option value="AB-">AB-</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Residential Address</label>
                <input type="text" name="address" class="form-control" placeholder="City, State" required>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">
              Register Patient & Generate ID
            </button>
          </form>
        </div>
      </div>
    `;
  }

  handleReceptionistRegister(form) {
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      dob: form.dob.value,
      gender: form.gender.value,
      bloodGroup: form.bloodGroup.value,
      address: form.address.value,
      emergencyContact: form.phone.value,
      password: 'password123'
    };
    this.registerPatient(data);
  }

  renderReceptionAppointments(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">All Hospital Appointments</h3>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Appt ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date & Slot</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.appointments.map(a => `
                <tr>
                  <td><b>${a.id}</b></td>
                  <td>${a.patientName} (${a.patientId})</td>
                  <td>${a.doctorName}</td>
                  <td>${a.department}</td>
                  <td>${a.date} | ${a.time}</td>
                  <td><span class="badge ${a.status === 'Confirmed' ? 'badge-success' : 'badge-warning'}">${a.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderReceptionBeds(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Hospital Bed Occupancy & Room Management</h3>
        </div>
        <div class="modal-body">
          <div class="bed-category-grid">
            ${this.state.beds.map(b => {
      const pct = Math.round((b.occupied / b.total) * 100);
      return `
                <div class="bed-cat-card">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h4>${b.category}</h4>
                    <span class="badge badge-primary">₹${b.costPerDay}/day</span>
                  </div>
                  <div class="bed-progress-bar">
                    <div class="bed-progress-fill" style="width: ${pct}%;"></div>
                  </div>
                  <div class="bed-cat-stats">
                    <span>Occupied: <b>${b.occupied}</b></span>
                    <span>Available: <b>${b.available}</b></span>
                    <span>Total: <b>${b.total}</b></span>
                  </div>
                  <div style="display:flex; gap:8px; margin-top:16px;">
                    <button class="btn btn-primary btn-sm" style="flex:1" onclick="app.updateBedStatus('${b.category}', 'admit')">Admit</button>
                    <button class="btn btn-outline btn-sm" style="flex:1" onclick="app.updateBedStatus('${b.category}', 'discharge')">Discharge</button>
                  </div>
                </div>
              `;
    }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderReceptionBilling(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Reception Billing Counter</h3>
          <button class="btn btn-primary btn-sm" onclick="app.openNewBillModal()">➕ Generate New Invoice</button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Total Bill</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.bills.map(b => `
                <tr>
                  <td><b>${b.id}</b></td>
                  <td>${b.patientName} (${b.patientId})</td>
                  <td>${b.date}</td>
                  <td><b>₹${b.totalAmount}</b></td>
                  <td><span class="badge ${b.status === 'Paid' ? 'badge-success' : 'badge-danger'}">${b.status}</span></td>
                  <td>
                    ${b.status === 'Pending' ? `
                      <button class="btn btn-sm btn-primary" onclick="app.payBill('${b.id}', 'Cash Counter')">Collect Cash</button>
                    ` : `
                      <button class="btn btn-sm btn-outline" onclick="app.openInvoicePrint('${b.id}')">Print</button>
                    `}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- PHARMACIST DASHBOARD ---
  renderPharmacyOverview(container) {
    const lowStockCount = this.state.medicines.filter(m => m.stock < m.minStock).length;
    const pendingRx = this.state.prescriptions.filter(p => !p.dispensed).length;

    container.innerHTML = `
      <div style="margin-bottom:24px;">
        <h3>Pharmacy Operations Dashboard</h3>
        <p style="color:var(--text-muted)">Pharmacist In-Charge: <b>${this.currentUser.name}</b></p>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Total Medicines</p>
            <h3>${this.state.medicines.length}</h3>
          </div>
          <div class="kpi-icon blue">📦</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Pending Dispense</p>
            <h3>${pendingRx}</h3>
          </div>
          <div class="kpi-icon purple">💊</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Low-Stock Alerts</p>
            <h3 style="color:${lowStockCount > 0 ? 'var(--danger)' : 'var(--success)'};">${lowStockCount}</h3>
          </div>
          <div class="kpi-icon ${lowStockCount > 0 ? 'red' : 'green'}">⚠️</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Dispensed Today</p>
            <h3>${this.state.prescriptions.filter(p => p.dispensed).length}</h3>
          </div>
          <div class="kpi-icon green">✅</div>
        </div>
      </div>

      ${lowStockCount > 0 ? `
        <div style="background:var(--danger-subtle); border-left:4px solid var(--danger); padding:16px; border-radius:var(--radius-md); margin-bottom:24px;">
          <h4 style="color:#b91c1c; margin-bottom:4px;">🚨 Critical Inventory Warning</h4>
          <p style="color:#7f1d1d; font-size:0.9rem;">
            ${lowStockCount} medicines have fallen below the configured minimum reorder threshold. Please place replenishment orders with suppliers.
          </p>
        </div>
      ` : ''}

      <div class="content-card">
        <div class="content-card-header">
          <h4 class="content-card-title">Pending Doctor Prescriptions Queue</h4>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Rx ID</th>
                <th>Patient</th>
                <th>Prescribing Doctor</th>
                <th>Date</th>
                <th>Medicines</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.prescriptions.map(p => `
                <tr>
                  <td><b>${p.id}</b></td>
                  <td>${p.patientName} (${p.patientId})</td>
                  <td>${p.doctorName}</td>
                  <td>${p.date}</td>
                  <td>${p.items.map(i => `${i.medicine} (${i.duration})`).join(', ')}</td>
                  <td>
                    ${!p.dispensed ? `
                      <button class="btn btn-primary btn-sm" onclick="app.dispensePrescription('${p.id}')">Dispense Medicine</button>
                    ` : `<span class="badge badge-success">Dispensed</span>`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderPharmacyPrescriptions(container) {
    this.renderPharmacyOverview(container);
  }

  renderPharmacyInventory(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Medicine Catalog & Stock Management</h3>
          <button class="btn btn-primary btn-sm" onclick="app.openNewMedicineModal()">➕ Add New Medicine</button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Item Code</th>
                <th>Medicine Name</th>
                <th>Category</th>
                <th>Stock Qty</th>
                <th>Min Stock</th>
                <th>Unit Price</th>
                <th>Expiry Date</th>
                <th>Supplier</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.medicines.map(m => `
                <tr>
                  <td><b>${m.id}</b></td>
                  <td><b>${m.name}</b></td>
                  <td>${m.category}</td>
                  <td>
                    <span style="font-weight:700; color:${m.stock < m.minStock ? 'var(--danger)' : 'var(--text-main)'};">
                      ${m.stock} units
                    </span>
                    ${m.stock < m.minStock ? '<span class="badge badge-danger">LOW</span>' : ''}
                  </td>
                  <td>${m.minStock}</td>
                  <td>₹${m.price}</td>
                  <td>${m.expiry}</td>
                  <td>${m.supplier}</td>
                  <td>
                    <button class="btn btn-outline btn-sm" onclick="app.editMedicineStock('${m.id}')">Update Stock</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderPharmacyAlerts(container) {
    const lowStock = this.state.medicines.filter(m => m.stock < m.minStock);
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Low-Stock Alert Center</h3>
        </div>
        <div class="modal-body">
          ${lowStock.map(m => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:14px; border:1px solid var(--danger); background:var(--danger-subtle); border-radius:var(--radius-md); margin-bottom:12px;">
              <div>
                <h4 style="color:#b91c1c;">${m.name} (${m.category})</h4>
                <p style="font-size:0.85rem; color:#7f1d1d;">Current Stock: <b>${m.stock} units</b> | Minimum Configured Threshold: <b>${m.minStock} units</b> | Supplier: ${m.supplier}</p>
              </div>
              <button class="btn btn-danger btn-sm" onclick="app.editMedicineStock('${m.id}')">Restock Now</button>
            </div>
          `).join('') || '<p style="text-align:center; color:var(--success);">All medicine inventory levels are well above safety threshold.</p>'}
        </div>
      </div>
    `;
  }

  // --- LABORATORY TECHNICIAN DASHBOARD ---
  renderLabOverview(container) {
    const pending = this.state.labTests.filter(t => t.status !== 'Completed').length;
    const completed = this.state.labTests.filter(t => t.status === 'Completed').length;

    container.innerHTML = `
      <div style="margin-bottom:24px;">
        <h3>Diagnostic Pathology & Imaging Console</h3>
        <p style="color:var(--text-muted)">Technician: <b>${this.currentUser.name}</b></p>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Total Test Orders</p>
            <h3>${this.state.labTests.length}</h3>
          </div>
          <div class="kpi-icon blue">🧪</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Pending Processing</p>
            <h3>${pending}</h3>
          </div>
          <div class="kpi-icon orange">⏳</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Published Reports</p>
            <h3>${completed}</h3>
          </div>
          <div class="kpi-icon green">📑</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Assay Reliability</p>
            <h3>99.8%</h3>
          </div>
          <div class="kpi-icon purple">🔬</div>
        </div>
      </div>

      <div class="content-card">
        <div class="content-card-header">
          <h4 class="content-card-title">Diagnostic Test Queue</h4>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Test ID</th>
                <th>Patient</th>
                <th>Test Name</th>
                <th>Category</th>
                <th>Ordered By</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.labTests.map(t => `
                <tr>
                  <td><b>${t.id}</b></td>
                  <td>${t.patientName} (${t.patientId})</td>
                  <td><b>${t.testType}</b></td>
                  <td>${t.category}</td>
                  <td>${t.doctorName}</td>
                  <td><span class="badge ${t.status === 'Completed' ? 'badge-success' : 'badge-warning'}">${t.status}</span></td>
                  <td>
                    ${t.status !== 'Completed' ? `
                      <button class="btn btn-primary btn-sm" onclick="app.openEnterLabResultModal('${t.id}')">Enter Findings</button>
                    ` : `
                      <button class="btn btn-outline btn-sm" onclick="app.openLabReportView('${t.id}')">View Report</button>
                    `}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderLabQueue(container) {
    this.renderLabOverview(container);
  }

  renderLabCompleted(container) {
    const completedTests = this.state.labTests.filter(t => t.status === 'Completed');
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Published Diagnostic Test Reports</h3>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Patient</th>
                <th>Test Name</th>
                <th>Completed Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${completedTests.map(t => `
                <tr>
                  <td><b>${t.id}</b></td>
                  <td>${t.patientName} (${t.patientId})</td>
                  <td>${t.testType}</td>
                  <td>${t.completedDate}</td>
                  <td>
                    <button class="btn btn-outline btn-sm" onclick="app.openLabReportView('${t.id}')">Print Report</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- ADMIN COMMAND CENTER & ANALYTICS ---
  renderAdminOverview(container) {
    const totalPatients = this.state.users.filter(u => u.role === 'patient').length;
    const totalDoctors = this.state.users.filter(u => u.role === 'doctor').length;
    const totalStaff = this.state.users.filter(u => u.role !== 'patient').length;
    const totalApts = this.state.appointments.length;
    const availableBeds = this.state.beds.reduce((a, b) => a + b.available, 0);
    const pendingLabs = this.state.labTests.filter(t => t.status !== 'Completed').length;
    const totalRevenue = this.state.bills.filter(b => b.status === 'Paid').reduce((a, b) => a + b.totalAmount, 0);

    container.innerHTML = `
      <div style="margin-bottom:24px;">
        <h3>V MediCare Executive Command Center</h3>
        <p style="color:var(--text-muted)">Hospital Administrator: <b>Arthur Pendelton</b></p>
      </div>

      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Total Patients</p>
            <h3>${totalPatients}</h3>
          </div>
          <div class="kpi-icon blue">👥</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Consultant Doctors</p>
            <h3>${totalDoctors}</h3>
          </div>
          <div class="kpi-icon purple">👨‍⚕️</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Available Beds</p>
            <h3>${availableBeds}</h3>
          </div>
          <div class="kpi-icon green">🛏️</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-info">
            <p>Gross Revenue</p>
            <h3>₹${totalRevenue.toLocaleString()}</h3>
          </div>
          <div class="kpi-icon orange">💰</div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 2fr 1fr; gap:24px; margin-bottom:28px;">
        <div class="content-card">
          <div class="content-card-header">
            <h4 class="content-card-title">Patient Admissions & Appointments Growth</h4>
          </div>
          <div class="modal-body" style="height:220px; display:flex; align-items:flex-end; gap:20px; padding-top:20px;">
            ${[45, 62, 85, 95, 120, 145].map((val, i) => `
              <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
                <span style="font-size:0.75rem; font-weight:700;">${val}</span>
                <div style="width:100%; height:${val}px; background:linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%); border-radius:var(--radius-sm);"></div>
                <span style="font-size:0.75rem; color:var(--text-muted);">${['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'][i]}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="content-card">
          <div class="content-card-header">
            <h4 class="content-card-title">Quick Administration</h4>
          </div>
          <div class="modal-body" style="display:flex; flex-direction:column; gap:12px;">
            <button class="btn btn-primary" onclick="app.openNewStaffModal()">➕ Enroll Doctor / Staff</button>
            <button class="btn btn-secondary" onclick="app.switchView('admin-beds')">🛏️ Manage Beds</button>
            <button class="btn btn-outline" onclick="app.openSimulatedEmailModal()">✉️ Email Logs Hub</button>
            <button class="btn btn-outline" onclick="app.switchView('admin-analytics')">📈 Detailed Analytics</button>
          </div>
        </div>
      </div>

      <div class="content-card">
        <div class="content-card-header">
          <h4 class="content-card-title">Hospital Personnel Directory</h4>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Staff ID</th>
                <th>Full Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.users.filter(u => u.role !== 'patient').map(u => `
                <tr>
                  <td><b>${u.staffId || 'STF-ADM'}</b></td>
                  <td><b>${u.name}</b></td>
                  <td><span class="badge badge-primary">${u.role.toUpperCase()}</span></td>
                  <td>${u.department || 'Clinical'}</td>
                  <td><span class="badge ${u.status === 'Active' ? 'badge-success' : 'badge-danger'}">${u.status || 'Active'}</span></td>
                  <td>
                    ${u.role !== 'admin' ? `
                      <button class="btn btn-outline btn-sm" onclick="app.toggleStaffStatus('${u.staffId}')">
                        ${u.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </button>
                    ` : `<span style="font-size:0.8rem; color:var(--text-muted);">Protected</span>`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderAdminStaff(container) {
    this.renderAdminOverview(container);
  }

  renderAdminPatients(container) {
    const patients = this.state.users.filter(u => u.role === 'patient');
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Registered Patients Database</h3>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
                <th>Blood Group</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              ${patients.map(p => `
                <tr>
                  <td><b>${p.patientId}</b></td>
                  <td><b>${p.name}</b></td>
                  <td>${p.email}</td>
                  <td>${p.phone}</td>
                  <td>${p.dob}</td>
                  <td><span class="badge badge-danger">${p.bloodGroup}</span></td>
                  <td>${p.address}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderAdminAppointments(container) {
    this.renderReceptionAppointments(container);
  }

  renderAdminBeds(container) {
    this.renderReceptionBeds(container);
  }

  renderAdminBilling(container) {
    this.renderReceptionBilling(container);
  }

  renderAdminAnalytics(container) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3 class="content-card-title">Interactive Hospital Analytics & Reports</h3>
        </div>
        <div class="modal-body">
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
            <div style="border:1px solid var(--border-light); padding:20px; border-radius:var(--radius-lg);">
              <h4>Monthly Revenue Generation (₹ Lakhs)</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px;">Steady 18% month-on-month clinic revenue growth.</p>
              <div style="height:180px; display:flex; align-items:flex-end; gap:16px;">
                ${[28, 34, 42, 49, 58, 64].map((v, i) => `
                  <div style="flex:1; text-align:center;">
                    <div style="height:${v * 2.5}px; background:linear-gradient(180deg, var(--secondary) 0%, var(--primary) 100%); border-radius:var(--radius-sm);"></div>
                    <span style="font-size:0.75rem; font-weight:700;">₹${v}L</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div style="border:1px solid var(--border-light); padding:20px; border-radius:var(--radius-lg);">
              <h4>Department Load Distribution</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px;">Breakdown of patient consultations across departments.</p>
              <div style="display:flex; flex-direction:column; gap:10px;">
                ${[
        { name: 'Cardiology', pct: 32 },
        { name: 'General Medicine', pct: 28 },
        { name: 'Orthopedics', pct: 18 },
        { name: 'Neurology', pct: 14 },
        { name: 'Pediatrics', pct: 8 }
      ].map(item => `
                  <div>
                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                      <span><b>${item.name}</b></span>
                      <span>${item.pct}%</span>
                    </div>
                    <div style="height:8px; background:var(--bg-subtle); border-radius:var(--radius-full); overflow:hidden;">
                      <div style="height:100%; width:${item.pct}%; background:var(--primary);"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // MODAL CONTROLLERS
  // ==========================================================================
  openLoginModal(defaultRole = 'patient') {
    this.closeAllModals();
    const modal = document.getElementById('login-modal');
    if (modal) {
      modal.classList.add('active');
      this.populateDemoCredentials(defaultRole);
    }
  }

  populateDemoCredentials(role) {
    const user = this.state.users.find(u => u.role === role);
    if (user) {
      document.getElementById('login-email').value = user.email;
      document.getElementById('login-password').value = user.password;
    }
  }

  openRegisterModal() {
    this.closeAllModals();
    const modal = document.getElementById('register-modal');
    if (modal) modal.classList.add('active');
  }

  openRegistrationSuccessModal(user) {
    const modal = document.getElementById('register-success-modal');
    if (modal) {
      document.getElementById('success-patient-id').innerText = user.patientId;
      document.getElementById('success-patient-name').innerText = user.name;
      document.getElementById('success-patient-email').innerText = user.email;
      modal.classList.add('active');
    }
  }

  openBookingWizard(doctorId) {
    if (!this.currentUser) {
      this.pendingBookingDoctorId = doctorId || null;
      this.closeAllModals();
      const promptModal = document.getElementById('apt-auth-prompt-modal');
      if (promptModal) {
        promptModal.classList.add('active');
      } else {
        this.openPatientLoginModal();
      }
      return;
    }

    if (this.currentUser.role === 'patient') {
      this.enterDashboard();
      this.switchView('book-appointment');
      if (doctorId) {
        setTimeout(() => {
          const select = document.getElementById('apt-doctor-select');
          if (select) {
            select.value = doctorId;
            this.onDoctorChanged(doctorId);
          }
        }, 150);
      }
    } else if (this.currentUser.role === 'receptionist') {
      this.enterDashboard();
      this.switchView('reception-appointments');
    } else {
      this.showToast('Please switch to a Patient account to book clinical appointments.', 'warning');
    }
  }

  openNewMedicalRecordModal() {
    this.closeAllModals();
    const modal = document.getElementById('medical-record-modal');
    if (modal) modal.classList.add('active');
  }

  openPrescriptionModal(patientId, patientName) {
    this.closeAllModals();
    const modal = document.getElementById('prescription-modal');
    if (modal) {
      document.getElementById('rx-patient-id').value = patientId || 'PAT20260001';
      document.getElementById('rx-patient-name').value = patientName || 'Ramesh Patel';
      modal.classList.add('active');
    }
  }

  openLabOrderModal(patientId, patientName) {
    this.closeAllModals();
    const modal = document.getElementById('lab-order-modal');
    if (modal) {
      document.getElementById('lab-order-patient-id').value = patientId || 'PAT20260001';
      document.getElementById('lab-order-patient-name').value = patientName || 'Ramesh Patel';
      modal.classList.add('active');
    }
  }

  openEnterLabResultModal(testId) {
    const test = this.state.labTests.find(t => t.id === testId);
    if (!test) return;
    this.closeAllModals();
    const modal = document.getElementById('lab-result-modal');
    if (modal) {
      document.getElementById('lab-result-test-id').value = test.id;
      document.getElementById('lab-result-patient-info').innerText = `${test.patientName} (${test.patientId}) — ${test.testType}`;
      modal.classList.add('active');
    }
  }

  openLabReportView(testId) {
    const test = this.state.labTests.find(t => t.id === testId);
    if (!test) return;
    this.closeAllModals();
    const modal = document.getElementById('lab-view-modal');
    if (modal) {
      document.getElementById('lab-view-content').innerHTML = `
        <div style="border-bottom: 2px solid var(--primary); padding-bottom:12px; margin-bottom:16px;">
          <h2>V MediCare Diagnostic Pathology & Clinical Lab</h2>
          <p>NABH Accredited Diagnostic Center | Reference ID: ${test.id}</p>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:20px;">
          <div><b>Patient:</b> ${test.patientName} (${test.patientId})</div>
          <div><b>Doctor:</b> ${test.doctorName}</div>
          <div><b>Test:</b> ${test.testType}</div>
          <div><b>Completed Date:</b> ${test.completedDate || 'Pending'}</div>
        </div>
        ${test.results && test.results.length > 0 ? `
          <table class="data-table" style="margin-bottom:16px;">
            <thead>
              <tr><th>Parameter</th><th>Value</th><th>Unit</th><th>Reference</th></tr>
            </thead>
            <tbody>
              ${test.results.map(r => `<tr><td>${r.parameter}</td><td><b>${r.value}</b></td><td>${r.unit}</td><td>${r.normalRange}</td></tr>`).join('')}
            </tbody>
          </table>
        ` : ''}
        <div style="background:var(--bg-subtle); padding:14px; border-radius:var(--radius-md);">
          <b>Clinical Impression:</b> ${test.findings}
        </div>
      `;
      modal.classList.add('active');
    }
  }

  openNewMedicineModal() {
    this.closeAllModals();
    const modal = document.getElementById('medicine-modal');
    if (modal) modal.classList.add('active');
  }

  editMedicineStock(medId) {
    const med = this.state.medicines.find(m => m.id === medId);
    if (!med) return;
    const addQty = prompt(`Current stock for ${med.name} is ${med.stock} units.\nEnter quantity to add:`, "50");
    if (addQty && !isNaN(addQty)) {
      med.stock += parseInt(addQty);
      med.lowStock = med.stock < med.minStock;
      this.saveState();
      this.showToast(`Updated stock for ${med.name}. New quantity: ${med.stock}`, 'success');
      this.renderDashboardContent();
    }
  }

  openNewStaffModal() {
    this.closeAllModals();
    const modal = document.getElementById('staff-modal');
    if (modal) modal.classList.add('active');
  }

  openNewBillModal() {
    this.closeAllModals();
    const modal = document.getElementById('bill-modal');
    if (modal) modal.classList.add('active');
  }

  openPaymentModal(billId) {
    const bill = this.state.bills.find(b => b.id === billId);
    if (!bill) return;
    this.closeAllModals();
    const modal = document.getElementById('payment-modal');
    if (modal) {
      document.getElementById('pay-bill-id').value = bill.id;
      document.getElementById('pay-bill-amount').innerText = `₹${bill.totalAmount}`;
      document.getElementById('pay-bill-patient').innerText = `${bill.patientName} (${bill.patientId})`;
      modal.classList.add('active');
    }
  }

  openInvoicePrint(billId) {
    const bill = this.state.bills.find(b => b.id === billId);
    if (!bill) return;
    this.closeAllModals();
    const modal = document.getElementById('invoice-modal');
    if (modal) {
      document.getElementById('invoice-print-area').innerHTML = `
        <div style="border-bottom:2px solid var(--primary); padding-bottom:14px; margin-bottom:16px;">
          <h2 style="color:var(--primary);">V MediCare Hospital & Research Centre</h2>
          <p style="color:var(--text-muted); font-size:0.85rem;">MG Road, Bengaluru | Emergency 24/7: 1800-200-9999 | GSTIN: 29AAAAA0000A1Z5</p>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:16px; font-size:0.9rem;">
          <div>
            <b>Billed To:</b> ${bill.patientName}<br>
            <b>Patient ID:</b> ${bill.patientId}
          </div>
          <div style="text-align:right;">
            <b>Invoice #:</b> ${bill.id}<br>
            <b>Date:</b> ${bill.date}<br>
            <b>Status:</b> <span class="badge ${bill.status === 'Paid' ? 'badge-success' : 'badge-danger'}">${bill.status}</span>
          </div>
        </div>
        <table class="data-table" style="margin-bottom:20px;">
          <thead>
            <tr><th>Service Description</th><th style="text-align:right;">Amount</th></tr>
          </thead>
          <tbody>
            <tr><td>Doctor Specialist Consultation</td><td style="text-align:right;">₹${bill.consultationFee}</td></tr>
            <tr><td>Inpatient Room & Bed Charges</td><td style="text-align:right;">₹${bill.roomCharges}</td></tr>
            <tr><td>Diagnostic Pathology & Lab Tests</td><td style="text-align:right;">₹${bill.labCharges}</td></tr>
            <tr><td>Pharmacy & Medical Consumables</td><td style="text-align:right;">₹${bill.medicineCharges}</td></tr>
            <tr><td>Treatment & Nursing Care</td><td style="text-align:right;">₹${bill.treatmentCharges}</td></tr>
            <tr style="font-weight:700; font-size:1.1rem; border-top:2px solid var(--border-light);">
              <td>Grand Total Amount</td><td style="text-align:right; color:var(--primary);">₹${bill.totalAmount}</td>
            </tr>
          </tbody>
        </table>
        ${bill.paidAt ? `<p style="font-size:0.85rem; color:var(--success);">✅ Paid via ${bill.paymentMode} on ${bill.paidAt}</p>` : ''}
      `;
      modal.classList.add('active');
    }
  }

  openSimulatedEmailModal() {
    this.closeAllModals();
    const modal = document.getElementById('email-hub-modal');
    if (modal) {
      document.getElementById('email-list-target').innerHTML = this.state.emailsSent.map(e => `
        <div style="border:1px solid var(--border-light); border-radius:var(--radius-md); padding:16px; margin-bottom:12px; background:#ffffff;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <b>${e.subject}</b>
            <span style="font-size:0.75rem; color:var(--text-muted);">${e.date}</span>
          </div>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">To: <b>${e.recipient}</b> (${e.patientName})</p>
          <pre style="white-space:pre-wrap; font-family:inherit; background:var(--bg-subtle); padding:12px; border-radius:var(--radius-sm); font-size:0.85rem;">${e.content}</pre>
        </div>
      `).join('');
      modal.classList.add('active');
    }
  }

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }

  // ==========================================================================
  // TOAST NOTIFICATION ENGINE
  // ==========================================================================
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'danger') icon = '⚠️';
    if (type === 'warning') icon = '🔔';

    toast.innerHTML = `<span>${icon}</span><div style="flex:1; font-size:0.88rem;">${message}</div>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ==========================================================================
  // EVENT LISTENERS & DOM HOOKS
  // ==========================================================================
  initEventListeners() {
    // AI Floating Assistant Toggle
    const aiToggle = document.getElementById('ai-fab-btn');
    const aiWindow = document.getElementById('ai-chat-window');
    if (aiToggle && aiWindow) {
      aiToggle.addEventListener('click', () => {
        aiWindow.classList.toggle('active');
      });
    }

    // AI Chat Input
    const aiInput = document.getElementById('ai-user-msg');
    const aiSend = document.getElementById('ai-send-btn');
    if (aiInput && aiSend) {
      const handleSend = () => {
        const text = aiInput.value.trim();
        if (!text) return;
        this.addAIMessage(text, 'user');
        aiInput.value = '';

        setTimeout(() => {
          const response = this.askAIAssistant(text);
          this.addAIMessage(response, 'bot');
        }, 400);
      };

      aiSend.addEventListener('click', handleSend);
      aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }

    // Modal Close buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close-btn')) {
        this.closeAllModals();
      }
    });
  }

  addAIMessage(text, sender) {
    const area = document.getElementById('ai-messages-target');
    if (!area) return;
    const bubble = document.createElement('div');
    bubble.className = `ai-bubble ${sender}`;
    bubble.innerText = text;
    area.appendChild(bubble);
    area.scrollTop = area.scrollHeight;
  }

  askAIPreset(prompt) {
    const aiInput = document.getElementById('ai-user-msg');
    if (aiInput) {
      aiInput.value = prompt;
      document.getElementById('ai-send-btn').click();
    }
  }
}

// Global Application Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new VMediCareApp();
});
