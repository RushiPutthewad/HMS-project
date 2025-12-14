import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients';
import CreatePatient from './components/CreatePatient';
import Doctors from './components/Doctors';
import CreateDoctor from './components/CreateDoctor';
import Appointments from './components/Appointments';
import CreateAppointment from './components/CreateAppointment';
import Pharmacy from './components/Pharmacy';
import CreateMedicine from './components/CreateMedicine';
import Layout from './components/Layout';

function App() {
  const [currentView, setCurrentView] = useState('login');

  const renderContent = () => {
    if (currentView === 'login') {
      return (
        <LoginPage 
          onSwitchToRegister={() => setCurrentView('register')} 
          onLogin={() => setCurrentView('dashboard')}
        />
      );
    }
    
    if (currentView === 'register') {
      return <Register onSwitchToLogin={() => setCurrentView('login')} />;
    }
    
    return (
      <Layout onNavigate={setCurrentView} currentPage={currentView}>
        {currentView === 'patients' ? (
          <Patients onNavigate={setCurrentView} />
        ) : currentView === 'create-patient' ? (
          <CreatePatient onNavigate={setCurrentView} />
        ) : currentView === 'doctors' ? (
          <Doctors onNavigate={setCurrentView} />
        ) : currentView === 'create-doctor' ? (
          <CreateDoctor onNavigate={setCurrentView} />
        ) : currentView === 'appointments' ? (
          <Appointments onNavigate={setCurrentView} />
        ) : currentView === 'create-appointment' ? (
          <CreateAppointment onNavigate={setCurrentView} />
        ) : currentView === 'pharmacy' ? (
          <Pharmacy onNavigate={setCurrentView} />
        ) : currentView === 'create-medicine' ? (
          <CreateMedicine onNavigate={setCurrentView} />
        ) : (
          <Dashboard />
        )}
      </Layout>
    );
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;