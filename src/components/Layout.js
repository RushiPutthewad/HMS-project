import React, { useState } from 'react';

function Layout({ children, onNavigate, currentPage }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [doctorsDropdownOpen, setDoctorsDropdownOpen] = useState(false);
  const [patientsDropdownOpen, setPatientsDropdownOpen] = useState(false);
  const [appointmentsDropdownOpen, setAppointmentsDropdownOpen] = useState(false);

  return (
    <div className="bg-white text-[#0F172A] transition-colors duration-200 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        body {
          font-family: 'Manrope', sans-serif;
        }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #F1F5F9;
        }
        ::-webkit-scrollbar-thumb {
          background: #CBD5E1;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94A3B8;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .icon-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
      
      <div className="flex h-screen w-full">
        <aside className="hidden lg:flex flex-col w-72 h-full border-r border-[#E2E8F0] bg-white flex-shrink-0">
          <div className="p-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E88E5] flex items-center justify-center text-white">
              <span className="material-symbols-outlined icon-fill">local_hospital</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#0F172A] text-lg font-bold leading-tight tracking-tight">MediCare</h1>
              <p className="text-[#64748B] text-xs font-medium">Admin Portal</p>
            </div>
          </div>
          
          <nav className="flex-1 px-4 flex flex-col gap-2 mt-4 overflow-y-auto">
            <button 
              onClick={() => onNavigate('dashboard')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg group transition-all w-full text-left ${
                currentPage === 'dashboard' 
                  ? 'bg-[#E3F2FD] text-[#1E88E5]' 
                  : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
              }`}
            >
              <span className={`material-symbols-outlined ${currentPage === 'dashboard' ? 'icon-fill' : 'group-hover:text-[#1E88E5]'} transition-colors`}>dashboard</span>
              <span className={`text-sm ${currentPage === 'dashboard' ? 'font-semibold' : 'font-medium'}`}>Dashboard</span>
            </button>
            
            <div className="flex flex-col">
              <button 
                onClick={() => setPatientsDropdownOpen(!patientsDropdownOpen)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg group transition-all w-full text-left ${
                  currentPage === 'patients' || currentPage === 'create-patient'
                    ? 'bg-[#E3F2FD] text-[#1E88E5]' 
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                }`}
              >
                <span className={`material-symbols-outlined ${currentPage === 'patients' || currentPage === 'create-patient' ? 'icon-fill' : 'group-hover:text-[#1E88E5]'} transition-colors`}>group</span>
                <span className={`text-sm ${currentPage === 'patients' || currentPage === 'create-patient' ? 'font-semibold' : 'font-medium'}`}>Patients</span>
                <span className={`material-symbols-outlined ml-auto text-sm transition-transform ${patientsDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              
              <div className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                patientsDropdownOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <button 
                  onClick={() => onNavigate('patients')}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#64748B] hover:text-[#1E88E5] hover:bg-[#F1F5F9] transition-all w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64748B]"></span>
                  View Patients
                </button>
                <button 
                  onClick={() => onNavigate('create-patient')}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#64748B] hover:text-[#1E88E5] hover:bg-[#F1F5F9] transition-all w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64748B]"></span>
                  Create Patient
                </button>
              </div>
            </div>
            
            <div className="flex flex-col">
              <button 
                onClick={() => setAppointmentsDropdownOpen(!appointmentsDropdownOpen)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg group transition-all w-full text-left ${
                  currentPage === 'appointments' || currentPage === 'create-appointment'
                    ? 'bg-[#E3F2FD] text-[#1E88E5]' 
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                }`}
              >
                <span className={`material-symbols-outlined ${currentPage === 'appointments' || currentPage === 'create-appointment' ? 'icon-fill' : 'group-hover:text-[#1E88E5]'} transition-colors`}>surgical</span>
                <span className={`text-sm ${currentPage === 'appointments' || currentPage === 'create-appointment' ? 'font-semibold' : 'font-medium'}`}>Appointments</span>
                <span className={`material-symbols-outlined ml-auto text-sm transition-transform ${appointmentsDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              
              <div className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                appointmentsDropdownOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <button 
                  onClick={() => onNavigate('appointments')}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#64748B] hover:text-[#1E88E5] hover:bg-[#F1F5F9] transition-all w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64748B]"></span>
                  View Appointments
                </button>
                <button 
                  onClick={() => onNavigate('create-appointment')}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#64748B] hover:text-[#1E88E5] hover:bg-[#F1F5F9] transition-all w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64748B]"></span>
                  Create Appointment
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <button 
                onClick={() => setDoctorsDropdownOpen(!doctorsDropdownOpen)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg group transition-all w-full text-left ${
                  currentPage === 'doctors' || currentPage === 'create-doctor'
                    ? 'bg-[#E3F2FD] text-[#1E88E5]' 
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                }`}
              >
                <span className={`material-symbols-outlined ${currentPage === 'doctors' || currentPage === 'create-doctor' ? 'icon-fill' : 'group-hover:text-[#1E88E5]'} transition-colors`}>stethoscope</span>
                <span className={`text-sm ${currentPage === 'doctors' || currentPage === 'create-doctor' ? 'font-semibold' : 'font-medium'}`}>Doctors</span>
                <span className={`material-symbols-outlined ml-auto text-sm transition-transform ${doctorsDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              
              <div className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                doctorsDropdownOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <button 
                  onClick={() => onNavigate('doctors')}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#64748B] hover:text-[#1E88E5] hover:bg-[#F1F5F9] transition-all w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64748B]"></span>
                  View Doctors
                </button>
                <button 
                  onClick={() => onNavigate('create-doctor')}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-[#64748B] hover:text-[#1E88E5] hover:bg-[#F1F5F9] transition-all w-full text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#64748B]"></span>
                  Create Doctor
                </button>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('pharmacy')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg group transition-all w-full text-left ${
                currentPage === 'pharmacy' 
                  ? 'bg-[#E3F2FD] text-[#1E88E5]' 
                  : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
              }`}
            >
              <span className={`material-symbols-outlined ${currentPage === 'pharmacy' ? 'icon-fill' : 'group-hover:text-[#1E88E5]'} transition-colors`}>medication</span>
              <span className={`text-sm ${currentPage === 'pharmacy' ? 'font-semibold' : 'font-medium'}`}>Pharmacy</span>
            </button>

            

          </nav>
        </aside>

        <main className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">
          <header className="h-20 border-b border-[#E2E8F0] flex items-center justify-between px-6 bg-white z-20 shrink-0">
            <button className="lg:hidden p-2 text-[#0F172A]" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            
            <div className="hidden md:flex items-center max-w-md w-full h-11 bg-[#F1F5F9] rounded-full px-4 ml-4 border border-transparent focus-within:border-[#1E88E5]/20 transition-colors">
              <span className="material-symbols-outlined text-[#64748B]">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-[#0F172A] placeholder-[#64748B] text-sm flex-1 w-full ml-2" 
                placeholder="Search patients, doctors, or records..." 
                type="text"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('create-patient')}
                className="hidden sm:flex h-10 px-5 items-center justify-center bg-[#1E88E5] hover:bg-blue-600 shadow-md shadow-blue-500/20 transition text-white rounded-full text-sm font-bold gap-2"
              >
                <span className="material-symbols-outlined text-xl">add</span>
                <span>Add Patient</span>
              </button>
              

              
              <div className="flex items-center gap-3 pl-2 border-l border-[#E2E8F0] ml-2">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-[#0F172A]">Dr. Admin</p>
                  <p className="text-xs text-[#64748B]">Chief Medical Officer</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4qw_Qhr9UhxUAQGYS6P1t16GMtB-0wYj67_IF232agdMNhhRhJvfEGi7iHp1Caa1eIzYsLllM5N3e8FoDtJT4g42GSbQhoBhmctLN5hwFADMCe0btS05kpGv8LoxP8FJToi-bjvJMDtwj2ZBaDQ4cTiF8WWQ5VSTODOdK4pHw27QA4aA7uZ3SkAOSt6SGzSrty_JHklb8q6yhbDx4UhmrYJ5Kby8YiSjzM1_ePne5O-ZpiSxqtqKkg5kDwtkOhQdmEuxWn2mLRc02')"}}></div>
              </div>
            </div>
          </header>

          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;