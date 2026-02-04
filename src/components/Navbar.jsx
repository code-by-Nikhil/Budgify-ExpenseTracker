import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 bg-white/60 backdrop-blur-md border-b border-slate-100 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button onClick={()=>navigate('/')} className="text-indigo-600 font-bold text-lg">Budgify</button>
          <nav className="hidden md:flex gap-4 text-slate-700">
            <Link to="/expenses" className="hover:underline">Expenses</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* placeholder for user avatar/actions */}
        </div>
      </div>
    </header>
  )
}
