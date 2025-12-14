import React, { useState } from 'react';

function Appointments({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const appointments = [
    { id: 'APT-001', patientName: 'James Dean', doctorName: 'Dr. Sarah Johnson', department: 'Cardiology', date: '2023-10-25', time: '10:00 AM', type: 'Consultation', status: 'Confirmed', phone: '+1 234-567-8901' },
    { id: 'APT-002', patientName: 'Anna Lee', doctorName: 'Dr. Michael Chen', department: 'Neurology', date: '2023-10-25', time: '11:30 AM', type: 'Follow-up', status: 'Pending', phone: '+1 234-567-8902' },
    { id: 'APT-003', patientName: 'Robert Miller', doctorName: 'Dr. Emily Rodriguez', department: 'Pediatrics', date: '2023-10-25', time: '02:00 PM', type: 'Check-up', status: 'Confirmed', phone: '+1 234-567-8903' },
    { id: 'APT-004', patientName: 'Maria Komarov', doctorName: 'Dr. James Wilson', department: 'Orthopedics', date: '2023-10-26', time: '09:00 AM', type: 'Surgery', status: 'Scheduled', phone: '+1 234-567-8904' },
    { id: 'APT-005', patientName: 'David Wilson', doctorName: 'Dr. Lisa Brown', department: 'General', date: '2023-10-26', time: '03:30 PM', type: 'Consultation', status: 'Cancelled', phone: '+1 234-567-8905' }
  ];

  const filteredAppointments = appointments.filter(appointment =>
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Appointments</h1>
              <p className="text-[#64748B] mt-1">Manage and view all appointment records</p>
            </div>
            <button 
              onClick={() => onNavigate('create-appointment')}
              className="flex items-center gap-2 h-10 px-5 bg-[#1E88E5] hover:bg-blue-600 text-white rounded-full text-sm font-bold shadow-md shadow-blue-500/20 transition"
            >
              <span className="material-symbols-outlined text-xl">add</span>
              <span>Add Appointment</span>
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
                      placeholder="Search appointments..."
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
                    <th className="p-4 font-semibold">Appointment Info</th>
                    <th className="p-4 font-semibold">ID</th>
                    <th className="p-4 font-semibold">Patient</th>
                    <th className="p-4 font-semibold">Doctor</th>
                    <th className="p-4 font-semibold">Department</th>
                    <th className="p-4 font-semibold">Date & Time</th>
                    <th className="p-4 font-semibold">Type</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-sm">
                  {filteredAppointments.map((appointment, index) => (
                    <tr key={appointment.id} className="hover:bg-[#F1F5F9]/50 transition-colors">
                      <td className="p-4 font-medium text-[#0F172A]">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ring-1 ${
                            index % 4 === 0 ? 'bg-[#E3F2FD] text-[#1E88E5] ring-blue-100' :
                            index % 4 === 1 ? 'bg-purple-100 text-purple-600 ring-purple-100' :
                            index % 4 === 2 ? 'bg-red-100 text-red-600 ring-red-100' :
                            'bg-teal-100 text-teal-600 ring-teal-100'
                          }`}>
                            <span className="material-symbols-outlined text-sm">event</span>
                          </div>
                          <div>
                            <p className="font-semibold">{appointment.type}</p>
                            <p className="text-xs text-[#64748B]">{appointment.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[#64748B]">{appointment.id}</td>
                      <td className="p-4 text-[#0F172A]">{appointment.patientName}</td>
                      <td className="p-4 text-[#1E88E5] font-medium">{appointment.doctorName}</td>
                      <td className="p-4 text-[#0F172A]">{appointment.department}</td>
                      <td className="p-4 text-[#64748B]">
                        <div>
                          <div className="text-[#0F172A]">{appointment.date}</div>
                          <div className="text-xs">{appointment.time}</div>
                        </div>
                      </td>
                      <td className="p-4 text-[#64748B]">{appointment.type}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          appointment.status === 'Confirmed' 
                            ? 'bg-green-50 text-[#43A047] border border-green-100'
                            : appointment.status === 'Pending'
                            ? 'bg-yellow-50 text-yellow-600 border border-yellow-100'
                            : appointment.status === 'Scheduled'
                            ? 'bg-blue-50 text-blue-600 border border-blue-100'
                            : 'bg-gray-50 text-gray-600 border border-gray-100'
                        }`}>
                          {appointment.status}
                        </span>
                      </td>
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
              <span>Showing {filteredAppointments.length} of {appointments.length} appointments</span>
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

export default Appointments;