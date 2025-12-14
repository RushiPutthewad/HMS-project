import React, { useState } from 'react';

function Register({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Doctor'
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'password') {
      setPasswordStrength(validatePassword(value));
    }
  };

  const getStrengthText = () => {
    const levels = ['Weak', 'Fair', 'Good', 'Strong'];
    return levels[passwordStrength - 1] || 'Fair';
  };

  return (
    <div className="bg-[#f8f8f5] font-['Spline_Sans'] text-[#181811] min-h-screen flex flex-col overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #e6e6db;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #8c8b5f;
        }
        .form-input:focus {
          box-shadow: 0 0 0 2px #f9f506;
          border-color: transparent;
        }
      `}</style>
      


      <main className="flex-1 flex flex-col lg:flex-row h-full relative">
        <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 relative bg-stone-100 items-center justify-center overflow-hidden p-12">
          <div className="absolute inset-0 z-0 opacity-80">
            <img 
              alt="Clean modern hospital corridor with blurred motion showing activity" 
              className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWfJFmi-1NTbDbm7BQYBodzllka7_OuwbmrDmhfa6-jaDMRIsqRBYhfBJksJn-PAQLxLUXVocKiuPIR8iWEmUQM1ruM_vRO9dTjiBMVUo_7BNPaP8XNqme_27T4fYGffobMl7wFA9fH4OWCmHyqUCyCjJKC7UeBv61s7814MteqKKvyA72oRt65pEu-9IzGdOz_HKAE3xsGItjka0Yuz8yiM6uRsjEJmWMQu2tdsHFXUc0_kHLW9MMIqSPMWJH3qogreLwbdOrejs"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-6 max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-[#f9f506] flex items-center justify-center shadow-xl shadow-[#f9f506]/20">
              <span className="material-symbols-outlined text-4xl text-black">verified_user</span>
            </div>
            <div>
              <h1 className="text-4xl xl:text-5xl font-black leading-tight tracking-tight text-[#181811] mb-4">
                Join our medical team.
              </h1>
              <p className="text-lg text-[#8c8b5f] font-medium leading-relaxed">
                Securely manage patient records, schedules, and hospital resources with our next-gen platform.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-stone-200">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-[#181811]">5k+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8c8b5f]">Staff Members</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-[#181811]">99.9%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8c8b5f]">Uptime</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-[#181811]">ISO</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8c8b5f]">Certified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 py-12 lg:p-12 xl:p-20 bg-[#f8f8f5]">
          <div className="w-full max-w-[520px] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#8c8b5f] mb-2">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span className="text-xs font-bold uppercase tracking-widest">Secure Registration</span>
              </div>
              <h1 className="text-[#181811] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Staff Registration</h1>
              <p className="text-[#8c8b5f] text-base font-normal leading-normal">Enter your credentials to request access to the system.</p>
            </div>
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-[#181811] text-sm font-bold leading-normal">I am a</label>
                <div className="flex h-12 w-full items-center rounded-full bg-[#e6e6db] p-1">
                  {['Doctor', 'Nurse', 'Admin'].map((role) => (
                    <label key={role} className="group flex cursor-pointer h-full flex-1 items-center justify-center overflow-hidden rounded-full has-[:checked]:bg-white has-[:checked]:shadow-sm transition-all duration-200">
                      <span className="truncate text-sm font-medium text-[#8c8b5f] group-has-[:checked]:text-[#181811]">{role}</span>
                      <input 
                        className="invisible w-0 h-0 absolute" 
                        name="role" 
                        type="radio" 
                        value={role}
                        checked={formData.role === role}
                        onChange={handleChange}
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181811] text-base font-medium leading-normal">Full Name</label>
                <div className="relative">
                  <input 
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-xl text-[#181811] border border-[#e6e6db] bg-white h-14 placeholder:text-[#8c8b5f] p-[15px] pl-12 text-base font-normal leading-normal transition-colors" 
                    placeholder="e.g. Dr. Jane Doe" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c8b5f]">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#181811] text-base font-medium leading-normal">Professional Email</label>
                <div className="relative">
                  <input 
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-xl text-[#181811] border border-[#e6e6db] bg-white h-14 placeholder:text-[#8c8b5f] p-[15px] pl-12 text-base font-normal leading-normal transition-colors" 
                    placeholder="name@hospital.com" 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c8b5f]">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[#181811] text-base font-medium leading-normal">Password</label>
                  <div className="relative">
                    <input 
                      className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-xl text-[#181811] border border-[#e6e6db] bg-white h-14 placeholder:text-[#8c8b5f] p-[15px] pl-4 pr-12 text-base font-normal leading-normal transition-colors" 
                      placeholder="Create password" 
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8c8b5f] hover:text-[#181811] transition-colors cursor-pointer" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined">{showPassword ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[#181811] text-base font-medium leading-normal">Confirm Password</label>
                  <input 
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-xl text-[#181811] border border-[#e6e6db] bg-white h-14 placeholder:text-[#8c8b5f] p-[15px] text-base font-normal leading-normal transition-colors" 
                    placeholder="Confirm password" 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((level) => (
                    <div 
                      key={level}
                      className={`h-1.5 flex-1 rounded-full ${
                        level <= passwordStrength ? 'bg-[#f9f506]' : 'bg-[#e6e6db]'
                      } ${level === 2 && passwordStrength >= 2 ? 'bg-[#f9f506]/40' : ''}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-[#8c8b5f]">
                  Password strength: <span className="text-[#181811] font-medium">{getStrengthText()}</span>. Use 8+ chars, mix of symbols & numbers.
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center pt-1">
                  <input 
                    className="peer h-5 w-5 appearance-none rounded-md border border-[#8c8b5f] bg-white checked:bg-[#f9f506] checked:border-[#f9f506] transition-all" 
                    type="checkbox"
                    required
                  />
                  <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%-2px)] text-[16px] text-[#181811] opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
                </div>
                <span className="text-sm text-[#8c8b5f] pt-0.5">
                  I agree to the <a className="text-[#181811] underline decoration-[#f9f506] decoration-2 underline-offset-2 hover:decoration-4 transition-all" href="#">Hospital Privacy Policy</a> and Data Protection Guidelines.
                </span>
              </label>

              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-4 bg-[#f9f506] hover:bg-[#e4df05] active:scale-[0.98] transition-all text-[#181811] text-base font-bold leading-normal tracking-[0.015em] shadow-[0_4px_10px_rgba(249,245,6,0.3)]">
                <span className="truncate">Create Staff Account</span>
                <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
              </button>
              
              <p className="text-center text-sm text-[#8c8b5f]">
                Already have an account? <button onClick={onSwitchToLogin} className="text-[#181811] font-semibold">Log In</button>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;