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
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md mx-auto p-8 retro-glass rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-white">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm">
            <span className="text-slate-300">Email</span>
            <input className="mt-1 block w-full px-3 py-2 rounded-md bg-slate-800 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-400 transition" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
          </label>

          <label className="block text-sm">
            <span className="text-slate-300">Password</span>
            <input className="mt-1 block w-full px-3 py-2 rounded-md bg-slate-800 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-400 transition" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
          </label>

          <div className="flex gap-3">
            <button type="submit" className="flex-1 btn-primary">Login</button>
            <button type="button" onClick={()=>navigate('/register')} className="flex-1 btn-outline">Create account</button>
          </div>
        </form>

        <ToastContainer />
      </div>
    </main>
  );
}
