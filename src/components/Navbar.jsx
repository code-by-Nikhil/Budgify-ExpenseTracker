import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import logo from '../assets/logo-retro.svg'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 bg-white/60 backdrop-blur-md border-b border-slate-100 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Motion.img src={logo} alt="Budgify" className="h-10 w-10 rounded-lg" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.98 }} />
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
