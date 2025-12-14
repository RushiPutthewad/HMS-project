import React, { useState } from 'react';

function Dashboard() {
  return (

    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">Good Morning, Dr. Admin</h2>
                  <p className="text-[#64748B] mt-1">Here is the latest update on hospital operations.</p>
                </div>
                <div className="flex gap-2 text-sm text-[#1E88E5] font-medium bg-white border border-[#E2E8F0] shadow-sm px-4 py-2 rounded-full self-start md:self-auto items-center">
                  <span className="material-symbols-outlined text-base">calendar_today</span>
                  <span>October 24, 2023</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-[#E2E8F0] p-5 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-[#E3F2FD] rounded-lg text-[#1E88E5]">
                      <span className="material-symbols-outlined">group</span>
                    </div>
                    <span className="text-[#43A047] text-xs font-bold bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span> +5%
                    </span>
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm font-medium">Total Patients</p>
                    <p className="text-2xl font-bold text-[#0F172A] mt-1">1,240</p>
                  </div>
                </div>

                <div className="bg-white border border-[#E2E8F0] p-5 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                      <span className="material-symbols-outlined">bed</span>
                    </div>
                    <span className="text-[#43A047] text-xs font-bold bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span> +2%
                    </span>
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm font-medium">Available Beds</p>
                    <p className="text-2xl font-bold text-[#0F172A] mt-1">45</p>
                  </div>
                </div>

                <div className="bg-white border border-[#E2E8F0] p-5 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                      <span className="material-symbols-outlined">surgical</span>
                    </div>
                    <span className="text-[#64748B] text-xs font-bold bg-[#F1F5F9] px-2 py-1 rounded-full border border-[#E2E8F0]">
                      Today
                    </span>
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm font-medium">Appointments</p>
                    <p className="text-2xl font-bold text-[#0F172A] mt-1">8</p>
                  </div>
                </div>

                <div className="bg-white border border-[#E2E8F0] p-5 rounded-xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                      <span className="material-symbols-outlined">payments</span>
                    </div>
                    <span className="text-[#43A047] text-xs font-bold bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
                    </span>
                  </div>
                  <div>
                    <p className="text-[#64748B] text-sm font-medium">Revenue</p>
                    <p className="text-2xl font-bold text-[#0F172A] mt-1">$42k</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A]">Hospital Traffic</h3>
                      <p className="text-sm text-[#64748B]">Intake vs Discharge (Weekly)</p>
                    </div>
                    <button className="text-sm text-[#1E88E5] font-bold hover:bg-[#E3F2FD] px-3 py-1.5 rounded-lg transition-colors">View Report</button>
                  </div>
                  <div className="flex-1 min-h-[250px] relative w-full">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
                      <line stroke="#E2E8F0" strokeWidth="1" x1="0" x2="800" y1="250" y2="250"></line>
                      <line stroke="#E2E8F0" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="190" y2="190"></line>
                      <line stroke="#E2E8F0" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="130" y2="130"></line>
                      <line stroke="#E2E8F0" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="70" y2="70"></line>
                      <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.2"></stop>
                          <stop offset="100%" stopColor="#1E88E5" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M0,200 C100,200 100,100 200,120 C300,140 300,220 400,180 C500,140 500,60 600,80 C700,100 700,150 800,130 L800,250 L0,250 Z" fill="url(#chartGradient)"></path>
                      <path d="M0,200 C100,200 100,100 200,120 C300,140 300,220 400,180 C500,140 500,60 600,80 C700,100 700,150 800,130" fill="none" stroke="#1E88E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                      <circle cx="200" cy="120" fill="#FFFFFF" r="5" stroke="#1E88E5" strokeWidth="2.5"></circle>
                      <circle cx="400" cy="180" fill="#FFFFFF" r="5" stroke="#1E88E5" strokeWidth="2.5"></circle>
                      <circle cx="600" cy="80" fill="#FFFFFF" r="5" stroke="#1E88E5" strokeWidth="2.5"></circle>
                    </svg>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-[#64748B] font-medium uppercase tracking-wider px-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 flex-1 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-[#0F172A]">Doctors On Duty</h3>
                      <button className="text-xs bg-[#F1F5F9] hover:bg-[#E3F2FD] text-[#64748B] hover:text-[#1E88E5] px-3 py-1.5 rounded-full transition-colors font-medium">View All</button>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cover bg-center ring-2 ring-gray-100" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA87RI3-fTRzh03ssStDhw7G2-d-j2W3s9ZrilmF6ERQnTQI2IhIxVabY1ORdP52Ua7u0zuo3_pN2oK6nPtVRpIJGpchUsb7CwnUMkdY1qQHauBeOnxYUyDLL2sBVo8q4UxYHFn5x2pOT8bdrbFGNvb8-orrdy3-fFs9cwIBsa-sTUFKTMtiV8Ejxhe-918X3WQ5Y1kt05lEcgPraXGKEqnmCllLGTrqwGKbBJRbjES3VNfd91GXqQDg3IrNWhYeFw0F3GXjArtM2To')"}}></div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-[#0F172A]">Dr. Sarah Smith</p>
                          <p className="text-xs text-[#64748B]">Cardiology</p>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#43A047] ring-4 ring-green-50"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cover bg-center ring-2 ring-gray-100" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqUQwQn0Zeu3dQqA7Z5S4QB5IFCI7c5z7wRbwpvO0tsWKSv9chb8rSp8Ff4Km80ojDAywCuY6nFnfNe3J0w4ASmJ5zA_35R22EYQX98NR5WrQdhVnnBtwbwKlG7zvwBsIQzSpB2LsWNa7t-5a6Tj9ad83OFTb1TTgbjWd-TMYGwn2PWZ9ttxYM2i3aWLaBt9SDuzuyUNuRGhexEGJeuPy5lGbxHOp00xTEuDnESFaIp3fxfJTh9xd1qZhhUlQTV3W3EP722p4y57uY')"}}></div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-[#0F172A]">Dr. John Doe</p>
                          <p className="text-xs text-[#64748B]">Neurology</p>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FB8C00] ring-4 ring-orange-50"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cover bg-center ring-2 ring-gray-100" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2AwN4AXxDzhyX6wzoZhmMQHsNDEGbEti7D7_rhmw5iYqi7bA5npxbKmTkCQCES77_stptDfD_J57qrakvOMRFlRIJ0PZ8Sjm-U8KyKuUsXdeymp8w1iePBP2tn9o7WyxuRAZ04VVYwwJH2N2KoExHtfk-4PTHJr64CmcNX3WnI0LlhDnP9rUzVJo56j1J_rWGO6Tkac569Q9Hhcr1xTKC1DfeiPCHJMcIQBC7SlAjW1JFaJ2ezh_fXKUW8KsAOy2iMgwBuzqvLp1w')"}}></div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-[#0F172A]">Dr. Emily Chen</p>
                          <p className="text-xs text-[#64748B]">Pediatrics</p>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-400 ring-4 ring-gray-100"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-[#0F172A] mb-4">System Alerts</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <span className="material-symbols-outlined text-[#E53935] text-lg mt-0.5">warning</span>
                        <div>
                          <p className="text-sm font-bold text-gray-900">Low Stock: Insulin</p>
                          <p className="text-xs text-gray-600">Pharmacy inventory below 10%</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                        <span className="material-symbols-outlined text-[#FB8C00] text-lg mt-0.5">dns</span>
                        <div>
                          <p className="text-sm font-bold text-gray-900">Server Maintenance</p>
                          <p className="text-xs text-gray-600">Scheduled for 02:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-[#E2E8F0] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <h3 className="text-lg font-bold text-[#0F172A]">Recent Appointments</h3>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#F1F5F9] rounded-full text-xs font-bold text-[#64748B] hover:bg-gray-200 transition">
                      <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#F1F5F9] rounded-full text-xs font-bold text-[#64748B] hover:bg-gray-200 transition">
                      <span className="material-symbols-outlined text-sm">download</span> Export
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#F1F5F9]/50 text-[#64748B] text-xs uppercase tracking-wider border-b border-[#E2E8F0]">
                        <th className="p-4 font-semibold">Patient Name</th>
                        <th className="p-4 font-semibold">ID</th>
                        <th className="p-4 font-semibold">Department</th>
                        <th className="p-4 font-semibold">Assigned Dr.</th>
                        <th className="p-4 font-semibold">Date & Time</th>
                        <th className="p-4 font-semibold">Status</th>
                        <th className="p-4 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0] text-sm">
                      <tr className="hover:bg-[#F1F5F9]/50 transition-colors">
                        <td className="p-4 font-medium text-[#0F172A] flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center text-xs font-bold ring-1 ring-blue-100">JD</div>
                          James Dean
                        </td>
                        <td className="p-4 text-[#64748B]">#PAT-001</td>
                        <td className="p-4 text-[#0F172A]">Cardiology</td>
                        <td className="p-4 text-[#1E88E5] font-medium">Dr. Sarah Smith</td>
                        <td className="p-4 text-[#64748B]">Oct 24, 09:00 AM</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-[#43A047] border border-green-100">Confirmed</span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-[#64748B] hover:text-[#1E88E5] transition">
                            <span className="material-symbols-outlined">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
    </div>
  );
}

export default Dashboard;