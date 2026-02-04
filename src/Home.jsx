import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <section className="text-center max-w-2xl mx-auto p-8 backdrop-blur-sm bg-white/60 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">💸 Budgify</h1>
        <p className="text-slate-600 mb-6">Your smart path to financial freedom</p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button onClick={()=>navigate('/register')} className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition transform hover:-translate-y-0.5">Create Account</button>
          <button onClick={()=>navigate('/login')} className="px-6 py-3 rounded-xl border border-slate-200 bg-white hover:shadow transition">Login</button>
        </div>
      </section>
    </main>
  )
}
