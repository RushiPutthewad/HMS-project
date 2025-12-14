import React, { useState } from 'react';

function LoginPage({ onSwitchToRegister, onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#f8f8f5] text-[#181811] font-['Spline_Sans'] min-h-screen flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #e5e5e5;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #d4d4d4;
        }
      `}</style>

      <main className="flex-1 w-full flex justify-center items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] w-full bg-white rounded-[2rem] shadow-xl overflow-hidden border border-[#f0f0eb] flex flex-col lg:flex-row min-h-[600px]">
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="max-w-[440px] mx-auto w-full flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f8f5] border border-stone-200 w-fit">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-stone-600">System Online</span>
                </span>
                <h1 className="text-4xl font-black tracking-tight text-[#181811]">
                  Staff Portal
                </h1>
                <p className="text-stone-500 text-lg">
                  Welcome back. Please login to access patient records securely.
                </p>
              </div>
              
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#181811] ml-1">Email Address</label>
                  <div className="relative group">
                    <input 
                      className="w-full h-14 bg-white border-2 border-[#e6e6db] rounded-full px-6 pr-12 text-base outline-none focus:border-[#f9f506] focus:ring-1 focus:ring-[#f9f506] transition-all text-[#181811] placeholder:text-stone-400" 
                      placeholder="dr.smith@hospital.com" 
                      required 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none flex items-center">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="block text-sm font-semibold text-[#181811]">Password</label>
                  </div>
                  <div className="relative group">
                    <input 
                      className="w-full h-14 bg-white border-2 border-[#e6e6db] rounded-full px-6 pr-12 text-base outline-none focus:border-[#f9f506] focus:ring-1 focus:ring-[#f9f506] transition-all text-[#181811] placeholder:text-stone-400" 
                      placeholder="••••••••" 
                      required 
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 flex items-center cursor-pointer transition-colors" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined">{showPassword ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between px-1">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input className="peer h-5 w-5 rounded border-2 border-stone-300 text-[#f9f506] focus:ring-[#f9f506] focus:ring-offset-0 bg-transparent cursor-pointer transition-all checked:bg-[#f9f506] checked:border-[#f9f506]" type="checkbox"/>
                    </div>
                    <span className="text-sm font-medium text-stone-600 group-hover:text-[#181811] transition-colors">Remember me</span>
                  </label>
                  <a className="text-sm font-bold text-[#181811] hover:text-[#f9f506] hover:underline underline-offset-4 decoration-2 transition-colors" href="#">Forgot Password?</a>
                </div>
                
                <button className="w-full h-14 bg-[#f9f506] hover:bg-yellow-300 text-[#181811] font-bold text-base rounded-full shadow-lg shadow-yellow-200/50 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-2" type="submit">
                  <span className="material-symbols-outlined">lock</span>
                  <span>Secure Login</span>
                </button>
                
                <p className="text-center text-sm text-stone-500">
                  Don't have an account? <button onClick={onSwitchToRegister} className="text-[#181811] font-semibold hover:text-[#f9f506] transition-colors">Register here</button>
                </p>
              </form>
              
              <div className="pt-4 border-t border-[#f5f5f0] text-center">
                <div className="flex items-center justify-center gap-2 text-xs text-stone-400 mb-2">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span>HIPAA Compliant & Secured Connection</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block w-1/2 relative bg-[#f8f8f5]">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGZcbm9MdvdyVz1XZ2d6uVeu4gcOwtyRqnmUum3Y9xVTsMBV6NmE-iodRSscdleTLHMU54dCcy-IV1bOlBG3B1MNpwN37hFqNXAwoIYlY8kFKiJ5wQNriq8k90T01Ziwsa2HyDdY_dNOFfd43fPOxHE2eaZ01ram8KMpZrm1b-kG1HgqDieuXOl2ZQIfLTBCInI56o3yoRjQpx0bp96iIFVltRDZ421BjJP1N_vD1OnTePUJbqM5v98hea1S7zsCNjsnw4N7DhQjs')"}}>              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#f9f506] flex items-center justify-center text-[#181811] shadow-lg">
                      <span className="material-symbols-outlined text-2xl">medical_services</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">Emergency Protocol Updated</p>
                      <p className="text-white/80 text-sm">Effective immediately for all ER staff.</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed font-light">
                    "Our commitment to patient care starts with the wellbeing and preparedness of our staff. Thank you for your dedication."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="md:hidden py-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a className="text-sm text-stone-500 font-medium" href="#">Help Desk</a>
          <a className="text-sm text-stone-500 font-medium" href="#">Privacy Policy</a>
        </div>
        <p className="text-xs text-stone-400">© 2023 St. Mary's Medical Center</p>
      </footer>
    </div>
  );
}

export default LoginPage;