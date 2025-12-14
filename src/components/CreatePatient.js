import React, { useState } from 'react';

function CreatePatient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    bloodType: '',
    allergies: '',
    medications: '',
    medicalHistory: '',
    insurance: '',
    insuranceId: '',
    department: '',
    assignedDoctor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Patient created successfully!');
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Create New Patient</h1>
            <p className="text-[#64748B] mt-1">Add a new patient to the hospital system</p>
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
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Date of Birth *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">contact_phone</span>
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="patient@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Street address"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
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
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">emergency</span>
              Emergency Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Contact Name *</label>
                <input
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Emergency contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Contact Phone *</label>
                <input
                  type="tel"
                  name="emergencyContactPhone"
                  value={formData.emergencyContactPhone}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="+1 234-567-8900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Relationship *</label>
                <select
                  name="emergencyContactRelation"
                  value={formData.emergencyContactRelation}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select relationship</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Parent">Parent</option>
                  <option value="Child">Child</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">medical_services</span>
              Medical Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Blood Type</label>
                <select
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select blood type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
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
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Allergies</label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm resize-none"
                  placeholder="List any known allergies..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Current Medications</label>
                <textarea
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm resize-none"
                  placeholder="List current medications..."
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">credit_card</span>
              Insurance Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Insurance Provider</label>
                <input
                  type="text"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Insurance company name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Insurance ID</label>
                <input
                  type="text"
                  name="insuranceId"
                  value={formData.insuranceId}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Insurance ID number"
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
              Create Patient
            </button>
            <button
              type="button"
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

export default CreatePatient;