import React, { useState } from 'react';

function CreateMedicine({ onNavigate }) {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    offerPrice: '',
    purchaseDate: '',
    expiryDate: '',
    stock: '',
    description: '',
    unit: '',
    category: '',
    manufacturer: '',
    batchNumber: '',
    supplier: '',
    minStockLevel: '',
    storageCondition: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Medicine added successfully!');
    onNavigate('pharmacy');
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">Add New Medicine</h1>
            <p className="text-[#64748B] mt-1">Add a new medicine to the pharmacy inventory</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">medication</span>
              Product Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Product Name *</label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select category</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Capsule">Capsule</option>
                  <option value="Syrup">Syrup</option>
                  <option value="Injection">Injection</option>
                  <option value="Ointment">Ointment</option>
                  <option value="Drops">Drops</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Unit (ml/mg) *</label>
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="e.g., 500mg, 100ml"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Manufacturer</label>
                <input
                  type="text"
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Manufacturer name"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm resize-none"
                  placeholder="Medicine description and usage..."
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">attach_money</span>
              Pricing Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Price *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  step="0.01"
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="₹0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Offer Price</label>
                <input
                  type="number"
                  name="offerPrice"
                  value={formData.offerPrice}
                  onChange={handleChange}
                  step="0.01"
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="₹0.00"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">inventory</span>
              Stock & Dates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Stock Quantity *</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Min Stock Level</label>
                <input
                  type="number"
                  name="minStockLevel"
                  value={formData.minStockLevel}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Purchase Date *</label>
                <input
                  type="date"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Expiry Date *</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E88E5]">business</span>
              Supplier Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  value={formData.supplier}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Supplier name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Batch Number</label>
                <input
                  type="text"
                  name="batchNumber"
                  value={formData.batchNumber}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                  placeholder="Batch number"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Storage Condition</label>
                <select
                  name="storageCondition"
                  value={formData.storageCondition}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5] text-sm"
                >
                  <option value="">Select storage condition</option>
                  <option value="Room Temperature">Room Temperature</option>
                  <option value="Refrigerated">Refrigerated (2-8°C)</option>
                  <option value="Frozen">Frozen (-20°C)</option>
                  <option value="Cool & Dry">Cool & Dry Place</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 h-11 px-6 bg-[#1E88E5] hover:bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 transition"
            >
              <span className="material-symbols-outlined text-lg">save</span>
              Add Medicine
            </button>
            <button
              type="button"
              onClick={() => onNavigate('pharmacy')}
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

export default CreateMedicine;