import React, { useState } from 'react';

function Pharmacy({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const medicines = [
    { id: 'MED-001', productName: 'Paracetamol', price: '₹45', offerPrice: '₹39', purchaseDate: '2023-09-15', expiryDate: '2025-09-15', stock: 150, description: 'Pain relief and fever reducer', unit: '500mg' },
    { id: 'MED-002', productName: 'Amoxicillin', price: '₹95', offerPrice: '₹85', purchaseDate: '2023-08-20', expiryDate: '2024-08-20', stock: 75, description: 'Antibiotic for bacterial infections', unit: '250mg' },
    { id: 'MED-003', productName: 'Cough Syrup', price: '₹65', offerPrice: '₹55', purchaseDate: '2023-10-01', expiryDate: '2024-10-01', stock: 45, description: 'Relief from cough and cold', unit: '100ml' },
    { id: 'MED-004', productName: 'Insulin', price: '₹180', offerPrice: '₹165', purchaseDate: '2023-09-10', expiryDate: '2024-03-10', stock: 20, description: 'Diabetes medication', unit: '10ml' },
    { id: 'MED-005', productName: 'Aspirin', price: '₹25', offerPrice: '₹22', purchaseDate: '2023-07-25', expiryDate: '2025-07-25', stock: 200, description: 'Blood thinner and pain relief', unit: '75mg' }
  ];

  const filteredMedicines = medicines.filter(medicine =>
    medicine.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Pharmacy</h1>
              <p className="text-[#64748B] mt-1">Manage and view all medicine inventory</p>
            </div>
            <button 
              onClick={() => onNavigate('create-medicine')}
              className="flex items-center gap-2 h-10 px-5 bg-[#1E88E5] hover:bg-blue-600 text-white rounded-full text-sm font-bold shadow-md shadow-blue-500/20 transition"
            >
              <span className="material-symbols-outlined text-xl">add</span>
              <span>Add Medicine</span>
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
                      placeholder="Search medicines..."
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
                    <th className="p-4 font-semibold">ID</th>
                    <th className="p-4 font-semibold">Product Name</th>
                    <th className="p-4 font-semibold">Price</th>
                    <th className="p-4 font-semibold">Offer Price</th>
                    <th className="p-4 font-semibold">Purchase Date</th>
                    <th className="p-4 font-semibold">Expiry Date</th>
                    <th className="p-4 font-semibold">Stock</th>
                    <th className="p-4 font-semibold">Description</th>
                    <th className="p-4 font-semibold">Unit (ml/mg)</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-sm">
                  {filteredMedicines.map((medicine, index) => (
                    <tr key={medicine.id} className="hover:bg-[#F1F5F9]/50 transition-colors">
                      <td className="p-4 text-[#64748B]">{medicine.id}</td>
                      <td className="p-4 font-medium text-[#0F172A]">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ring-1 ${
                            index % 4 === 0 ? 'bg-[#E3F2FD] text-[#1E88E5] ring-blue-100' :
                            index % 4 === 1 ? 'bg-purple-100 text-purple-600 ring-purple-100' :
                            index % 4 === 2 ? 'bg-red-100 text-red-600 ring-red-100' :
                            'bg-teal-100 text-teal-600 ring-teal-100'
                          }`}>
                            <span className="material-symbols-outlined text-sm">medication</span>
                          </div>
                          <span className="font-semibold">{medicine.productName}</span>
                        </div>
                      </td>
                      <td className="p-4 text-[#64748B]">{medicine.price}</td>
                      <td className="p-4 text-[#1E88E5] font-medium">{medicine.offerPrice}</td>
                      <td className="p-4 text-[#64748B]">{medicine.purchaseDate}</td>
                      <td className="p-4 text-[#64748B]">{medicine.expiryDate}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          medicine.stock > 100 
                            ? 'bg-green-50 text-[#43A047] border border-green-100'
                            : medicine.stock > 50
                            ? 'bg-yellow-50 text-yellow-600 border border-yellow-100'
                            : 'bg-red-50 text-red-600 border border-red-100'
                        }`}>
                          {medicine.stock}
                        </span>
                      </td>
                      <td className="p-4 text-[#64748B] max-w-xs truncate">{medicine.description}</td>
                      <td className="p-4 text-[#0F172A]">{medicine.unit}</td>
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
              <span>Showing {filteredMedicines.length} of {medicines.length} medicines</span>
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

export default Pharmacy;