import { useNavigate } from "react-router-dom"
import hero from './assets/hero-retro.svg'

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <section className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="retro-glass p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 heading-accent">💸 Budgify</h1>
          <p className="text-slate-300 mb-6">Your smart path to financial freedom</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button onClick={()=>navigate('/register')} className="px-6 py-3 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition micro-bounce">Create Account</button>
            <button onClick={()=>navigate('/login')} className="px-6 py-3 rounded-xl border border-white/6 text-white hover:bg-white/2 transition">Login</button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src={hero} alt="illustration" className="w-full max-w-md rounded-xl shadow" />
        </div>
      </section>
    </main>
  )
} 
