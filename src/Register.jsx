import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useRegisterMutation } from './services/apiSlice';

export default function Register() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  
    const navigate = useNavigate();

    const [register] = useRegisterMutation();
    
    const handleSubmit = async(e)=>{
      e.preventDefault();
  
      try {
        const res = await register({ name,email,password });
  
        if(res.data.result){ toast.success(res.data.message); navigate('/login'); }
        else{ toast.error(res.data.message); }
      } catch (error) {
        if(error.response?.data?.message) toast.error(error.response.data.message);
        else toast.error("Server error");
      }
    };

  return (
    
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md mx-auto p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm"><span className="text-slate-700">Name</span><input className="mt-1 block w-full px-3 py-2 rounded-md ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-400" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/></label>
          <label className="block text-sm"><span className="text-slate-700">Email</span><input className="mt-1 block w-full px-3 py-2 rounded-md ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-400" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/></label>
          <label className="block text-sm"><span className="text-slate-700">Password</span><input className="mt-1 block w-full px-3 py-2 rounded-md ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-400" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/></label>

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-xl">Create Account</button>
          <button type="button" onClick={()=>window.location.href='/login'} className="w-full mt-2 border border-slate-200 py-2 rounded-xl">Already have an account?</button>
        </form>

        <ToastContainer/>
      </div>
    </main>
  )
}
