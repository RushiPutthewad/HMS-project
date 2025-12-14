import React, { useState } from 'react';

function Patients() {
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
    { id: 'PAT-001', name: 'James Dean', age: 45, gender: 'Male', phone: '+1 234-567-8901', email: 'james.dean@email.com', department: 'Cardiology', doctor: 'Dr. Sarah Smith', status: 'Active', lastVisit: 'Oct 24, 2023' },
    { id: 'PAT-002', name: 'Anna Lee', age: 32, gender: 'Female', phone: '+1 234-567-8902', email: 'anna.lee@email.com', department: 'Neurology', doctor: 'Dr. John Doe', status: 'Discharged', lastVisit: 'Oct 22, 2023' },
    { id: 'PAT-003', name: 'Robert Miller', age: 58, gender: 'Male', phone: '+1 234-567-8903', email: 'robert.miller@email.com', department: 'Orthopedics', doctor: 'Dr. Emily Chen', status: 'Active', lastVisit: 'Oct 23, 2023' },
    { id: 'PAT-004', name: 'Maria Komarov', age: 28, gender: 'Female', phone: '+1 234-567-8904', email: 'maria.komarov@email.com', department: 'General', doctor: 'Dr. House', status: 'Active', lastVisit: 'Oct 24, 2023' },
    { id: 'PAT-005', name: 'David Wilson', age: 41, gender: 'Male', phone: '+1 234-567-8905', email: 'david.wilson@email.com', department: 'Pediatrics', doctor: 'Dr. Emily Chen', status: 'Discharged', lastVisit: 'Oct 20, 2023' }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Patients</h1>
              <p className="text-[#64748B] mt-1">Manage and view all patient records</p>
            </div>
            <button className="flex items-center gap-2 h-10 px-5 bg-[#1E88E5] hover:bg-blue-600 text-white rounded-full text-sm font-bold shadow-md shadow-blue-500/20 transition">
              <span className="material-symbols-outlined text-xl">add</span>
              <span>Add Patient</span>
            </button>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#E2E8F0]">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex items-center gap-4 flex-1 max-w-md">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]">search</span>
                    <input
                      type="text"
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full h-10 pl-10 pr-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#F1F5F9] rounded-full text-xs font-bold text-[#64748B] hover:bg-gray-200 transition">
                    <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#F1F5F9] rounded-full text-xs font-bold text-[#64748B] hover:bg-gray-200 transition">
                    <span className="material-symbols-outlined text-sm">download</span> Export
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F1F5F9]/50 text-[#64748B] text-xs uppercase tracking-wider border-b border-[#E2E8F0]">
                    <th className="p-4 font-semibold">Patient Info</th>
                    <th className="p-4 font-semibold">ID</th>
                    <th className="p-4 font-semibold">Age/Gender</th>
                    <th className="p-4 font-semibold">Contact</th>
                    <th className="p-4 font-semibold">Department</th>
                    <th className="p-4 font-semibold">Assigned Doctor</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold">Last Visit</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-sm">
                  {filteredPatients.map((patient, index) => (
                    <tr key={patient.id} className="hover:bg-[#F1F5F9]/50 transition-colors">
                      <td className="p-4 font-medium text-[#0F172A]">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ring-1 ${
                            index % 4 === 0 ? 'bg-[#E3F2FD] text-[#1E88E5] ring-blue-100' :
                            index % 4 === 1 ? 'bg-purple-100 text-purple-600 ring-purple-100' :
                            index % 4 === 2 ? 'bg-red-100 text-red-600 ring-red-100' :
                            'bg-teal-100 text-teal-600 ring-teal-100'
                          }`}>
                            {patient.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold">{patient.name}</p>
                            <p className="text-xs text-[#64748B]">{patient.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#64748B]">{patient.id}</td>
                      <td className="p-4 text-[#0F172A]">{patient.age}y, {patient.gender}</td>
                      <td className="p-4 text-[#64748B]">{patient.phone}</td>
                      <td className="p-4 text-[#0F172A]">{patient.department}</td>
                      <td className="p-4 text-[#1E88E5] font-medium">{patient.doctor}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          patient.status === 'Active' 
                            ? 'bg-green-50 text-[#43A047] border border-green-100'
                            : 'bg-gray-50 text-gray-600 border border-gray-100'
                        }`}>
                          {patient.status}
                        </span>
                      </td>
                      <td className="p-4 text-[#64748B]">{patient.lastVisit}</td>
                      <td className="p-4 text-right">
                        <button className="text-[#64748B] hover:text-[#1E88E5] transition">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-[#E2E8F0] flex items-center justify-between text-sm text-[#64748B]">
              <span>Showing {filteredPatients.length} of {patients.length} patients</span>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border border-[#E2E8F0] rounded hover:bg-[#F1F5F9] transition">Previous</button>
                <button className="px-3 py-1 bg-[#1E88E5] text-white rounded">1</button>
                <button className="px-3 py-1 border border-[#E2E8F0] rounded hover:bg-[#F1F5F9] transition">2</button>
                <button className="px-3 py-1 border border-[#E2E8F0] rounded hover:bg-[#F1F5F9] transition">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Patients;