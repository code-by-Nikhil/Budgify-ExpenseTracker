import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useLoginMutation } from "./services/apiSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/expenses");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response?.data?.message) toast.error(error.response.data.message);
      else toast.error("Server error");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md mx-auto p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm">
            <span className="text-slate-700">Email</span>
            <input className="mt-1 block w-full px-3 py-2 rounded-md ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-400 transition" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
          </label>

          <label className="block text-sm">
            <span className="text-slate-700">Password</span>
            <input className="mt-1 block w-full px-3 py-2 rounded-md ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-400 transition" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
          </label>

          <div className="flex gap-3">
            <button type="submit" className="flex-1 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition transform hover:-translate-y-0.5">Login</button>
            <button type="button" onClick={()=>navigate('/register')} className="flex-1 border border-slate-200 py-2 rounded-xl">Create account</button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </main>
  );
}
