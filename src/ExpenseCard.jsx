import React from "react";
import { motion as Motion } from 'framer-motion'

export default function ExpenseCard({ expense, onDelete, onEdit }) {
  return (
    <Motion.article whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }} className="bg-slate-900 p-4 rounded-xl shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-white">{expense.title}</h3>
        <span className="bg-indigo-800 text-white px-3 py-1 rounded-full text-sm">${expense.amount}</span>
      </div>

      <p className="text-sm text-slate-400 mt-2">{expense.date ? new Date(expense.date).toLocaleDateString() : '-'}</p>
      <p className="mt-1 text-slate-300">{expense.category}</p>

      <div className="flex gap-3 mt-3">
        <button onClick={onEdit} className="px-3 py-1 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition">✏️ Edit</button>
        <button onClick={onDelete} className="px-3 py-1 rounded-md bg-red-700 text-white hover:bg-red-600 transition">🗑️ Delete</button>
      </div>
    </Motion.article>
  );
}
