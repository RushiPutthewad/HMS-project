# Hospital Management System (HMS)

A modern, responsive Hospital Management System built with React and Tailwind CSS. This application provides comprehensive management of patients, doctors, appointments, and pharmacy operations in a healthcare facility.

---

## 📌 Project Overview

The Hospital Management System is a full-featured web application designed to streamline hospital operations. It enables hospital administrators and staff to efficiently manage patient records, doctor profiles, appointment scheduling, and pharmacy inventory.

### Key Capabilities:
- User authentication and registration
- Patient management (create, view, update)
- Doctor management (create, view, update)
- Appointment scheduling and tracking
- Pharmacy inventory management
- User-friendly dashboard

---

## 🔄 Project Workflow

```
User Entry Point
    ↓
[Login/Register]
    ↓
[Authentication Check]
    ↓
[Dashboard Navigation]
    ├── Patients Module
    │   ├── View Patients List
    │   └── Create/Edit Patient
    │
    ├── Doctors Module
    │   ├── View Doctors List
    │   └── Create/Edit Doctor
    │
    ├── Appointments Module
    │   ├── View Appointments
    │   └── Schedule Appointment
    │
    └── Pharmacy Module
        ├── View Medicines/Inventory
        └── Add/Update Medicine
```

### Workflow Steps:

1. **Authentication Phase**
   - User accesses the application
   - New users register with credentials
   - Existing users log in
   - System validates credentials

2. **Dashboard Phase**
   - User navigates to main dashboard
   - Access to multiple management modules
   - Sidebar navigation for module selection

3. **Module Operations**
   - **Patients**: Add new patients, view patient records, manage patient data
   - **Doctors**: Register doctors, view doctor profiles, manage availability
   - **Appointments**: Schedule appointments between patients and doctors
   - **Pharmacy**: Manage medicine inventory, track stock levels

4. **Data Management**
   - Operations performed through dedicated forms
   - Data validation and error handling
   - User feedback and notifications

---

## 🏗️ Working Structure

The application follows a **component-based architecture** with state management using React hooks:

### Architecture Layers:

```
┌─────────────────────────────────────────┐
│     User Interface (Components)          │
│  (React Components with Tailwind CSS)    │
└────────────────┬────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│   State Management (React Hooks)         │
│  (useState for component state)          │
└────────────────┬────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│    Business Logic (Component Methods)    │
│  (Event handlers, form processing)       │
└────────────────┬────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│    Data Storage (Local/Session)          │
│  (Browser storage or backend API)        │
└─────────────────────────────────────────┘
```

### Data Flow:

1. User interacts with UI component
2. Event handlers update React state
3. Component re-renders with new data
4. Data persists in storage
5. UI reflects changes

### Component Communication:

- **Props**: Pass data and callbacks from parent to child components
- **State Lifting**: Shared state managed in App.js
- **Navigation**: Central routing through `currentView` state in App.js

---

## 📁 File Structure

```
HMS-project/
│
├── 📄 package.json                 # Project dependencies and scripts
├── 📄 .gitignore                   # Git ignore rules
├── 📄 README.md                    # Project documentation
│
├── 📂 public/
│   ├── 📄 index.html              # HTML entry point
│   └── 📂 assets/                 # Static assets (images, icons, etc.)
│
└── 📂 src/                        # Source code directory
    ├── 📄 index.js                # React DOM render entry point
    ├── 📄 index.css               # Global styles
    ├── 📄 App.js                  # Main app component with routing logic
    │
    ├── 📂 components/             # Reusable React components
    │   ├── 📄 Layout.js           # Main layout wrapper with navigation
    │   ├── 📄 Header.js           # Header/Navigation bar component
    │   ├── 📄 Dashboard.js        # Dashboard landing page
    │   ├── 📄 Login.js            # Legacy login component
    │   ├── 📄 LoginPage.js        # Modern login page with validation
    │   ├── 📄 Register.js         # User registration component
    │   │
    │   ├── 📂 Patients/
    │   │   ├── 📄 Patients.js           # Patient list display
    │   │   └── 📄 CreatePatient.js      # Patient creation form
    │   │
    │   ├── 📂 Doctors/
    │   │   ├── 📄 Doctors.js            # Doctor list display
    │   │   └── 📄 CreateDoctor.js       # Doctor creation form
    │   │
    │   ├── 📂 Appointments/
    │   │   ├── 📄 Appointments.js       # Appointment list display
    │   │   └── 📄 CreateAppointment.js  # Appointment booking form
    │   │
    │   └── 📂 Pharmacy/
    │       ├── 📄 Pharmacy.js           # Medicine inventory display
    │       └── 📄 CreateMedicine.js     # Medicine entry form
    │
    └── 📂 modules/                # Modular business logic (future expansion)
        └── (To be populated with utility modules)
```

### Component Descriptions:

| Component | Purpose | Type |
|-----------|---------|------|
| `App.js` | Main app component, handles routing and state | Container |
| `Layout.js` | Wraps authenticated pages with navigation | Layout |
| `Header.js` | Navigation bar and header | UI |
| `LoginPage.js` | Authentication entry point | Page |
| `Register.js` | User registration | Page |
| `Dashboard.js` | Main dashboard | Page |
| `Patients.js` | View all patients | List View |
| `CreatePatient.js` | Add new patient | Form |
| `Doctors.js` | View all doctors | List View |
| `CreateDoctor.js` | Add new doctor | Form |
| `Appointments.js` | View all appointments | List View |
| `CreateAppointment.js` | Schedule appointment | Form |
| `Pharmacy.js` | View medicine inventory | List View |
| `CreateMedicine.js` | Add new medicine | Form |

---

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd HMS-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

---

## 💻 Usage

### Running the Application

1. Start development server: `npm start`
2. Login with credentials or register a new account
3. Navigate through dashboard using sidebar menu
4. Use respective modules to manage data

### Available Scripts

- `npm start` - Run development server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (irreversible)

---

## ✨ Features

- ✅ **User Authentication**: Secure login and registration system
- ✅ **Patient Management**: Create, view, and manage patient records
- ✅ **Doctor Management**: Register and manage doctor profiles
- ✅ **Appointment Scheduling**: Book and track appointments
- ✅ **Pharmacy Management**: Manage medicine inventory
- ✅ **Responsive Design**: Works on desktop and mobile devices
- ✅ **Intuitive UI**: User-friendly interface with Tailwind CSS styling
- ✅ **Navigation**: Easy navigation between modules

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React** | Frontend framework for UI components |
| **React DOM** | React binding for DOM rendering |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **PostCSS** | CSS transformation tool |
| **AutoPrefixer** | CSS vendor prefixes |
| **React Scripts** | Build scripts and configuration |

---

## 📝 Notes

- This project is a frontend application. For production, integrate with a backend API for data persistence.
- Implement proper authentication mechanisms and data encryption.
- Add input validation and error handling as needed.
- Consider adding unit and integration tests.

---

## 📧 Support

For questions or issues, please contact the development team or create an issue in the repository.

---

**Created on**: December 14, 2025  
**Version**: 1.0.0  
**Status**: Active Development
