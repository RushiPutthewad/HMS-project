import React, { useState } from 'react';

function CreateDoctor({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialization: '',
    licenseNumber: '',
    experience: '',
    qualification: '',
    department: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    joiningDate: '',
    salary: '',
    workingHours: '',
    consultationFee: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Doctor created successfully!');
    onNavigate('doctors');
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Create New Doctor</h1>
            <p className="text-[#64748B] mt-1">Add a new doctor to the hospital system</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">person</span>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="doctor@medicare.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
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
              Professional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Specialization *</label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select specialization</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Psychiatry">Psychiatry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">License Number *</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Medical license number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Qualification *</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="e.g., MBBS, MD"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Years of Experience</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Years of experience"
                />
              </div>
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
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="General">General</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Consultation Fee</label>
                <input
                  type="number"
                  name="consultationFee"
                  value={formData.consultationFee}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Amount in USD"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">contact_phone</span>
              Contact Information
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Street address"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                    placeholder="State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">work</span>
              Employment Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Working Hours</label>
                <select
                  name="workingHours"
                  value={formData.workingHours}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select working hours</option>
                  <option value="9 AM - 5 PM">9 AM - 5 PM</option>
                  <option value="10 AM - 6 PM">10 AM - 6 PM</option>
                  <option value="2 PM - 10 PM">2 PM - 10 PM</option>
                  <option value="Night Shift">Night Shift</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Monthly Salary</label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Monthly salary in USD"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">emergency</span>
              Emergency Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Contact Name</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Emergency contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Contact Phone</label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="+1 234-567-8900"
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
              Create Doctor
            </button>
            <button
              type="button"
              onClick={() => onNavigate('doctors')}
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

export default CreateDoctor;