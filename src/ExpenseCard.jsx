import React from "react";
import { motion as Motion } from 'framer-motion'

export default function ExpenseCard({ expense, onDelete, onEdit }) {
  return (
    <Motion.article whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }} className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold">{expense.title}</h3>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">${expense.amount}</span>
      </div>

      <p className="text-sm text-slate-500 mt-2">{expense.date ? new Date(expense.date).toLocaleDateString() : '-'}</p>
      <p className="mt-1 text-slate-700">{expense.category}</p>

      <div className="flex gap-3 mt-3">
        <button onClick={onEdit} className="px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 transition">✏️ Edit</button>
        <button onClick={onDelete} className="px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition">🗑️ Delete</button>
      </div>
    </Motion.article>
  );
}
