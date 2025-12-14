import React, { useState } from 'react';

function CreateAppointment({ onNavigate }) {
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    doctorName: '',
    department: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: '',
    reason: '',
    notes: '',
    priority: '',
    duration: '',
    status: 'Pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment created successfully!');
    onNavigate('appointments');
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Create New Appointment</h1>
            <p className="text-[#64748B] mt-1">Schedule a new appointment for a patient</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">person</span>
              Patient Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Patient Name *</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Enter patient name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Patient Phone *</label>
                <input
                  type="tel"
                  name="patientPhone"
                  value={formData.patientPhone}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="+1 234-567-8900"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">stethoscope</span>
              Doctor & Department
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Department *</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="General">General</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Doctor *</label>
                <select
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select doctor</option>
                  <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                  <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                  <option value="Dr. Emily Rodriguez">Dr. Emily Rodriguez</option>
                  <option value="Dr. James Wilson">Dr. James Wilson</option>
                  <option value="Dr. Lisa Brown">Dr. Lisa Brown</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">event</span>
              Appointment Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Date *</label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Time *</label>
                <input
                  type="time"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Appointment Type *</label>
                <select
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select type</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Check-up">Check-up</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select duration</option>
                  <option value="15 minutes">15 minutes</option>
                  <option value="30 minutes">30 minutes</option>
                  <option value="45 minutes">45 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Priority</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select priority</option>
                  <option value="Low">Low</option>
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">description</span>
              Additional Information
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Reason for Visit</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm resize-none"
                  placeholder="Describe the reason for this appointment..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm resize-none"
                  placeholder="Any additional notes or special instructions..."
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 h-11 px-6 bg-[#1E88E5] hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 transition"
            >
              <span className="material-symbols-outlined text-lg">save</span>
              Create Appointment
            </button>
            <button
              type="button"
              onClick={() => onNavigate('appointments')}
              className="flex items-center gap-2 h-11 px-6 bg-[#F1F5F9] hover:bg-gray-200 text-[#64748B] rounded-lg text-sm font-bold transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAppointment;