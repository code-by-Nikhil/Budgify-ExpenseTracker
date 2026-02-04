import React from "react";
import { motion as Motion } from 'framer-motion'

export default function ExpenseCard({ expense, onDelete, onEdit }) {
  return (
    <Motion.article whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }} className="card-dark p-4 rounded-xl shadow-sm">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-white">{expense.title}</h3>
        <span className="badge-retro">${expense.amount}</span>
      </div>

      <p className="text-sm text-slate-400 mt-2">{expense.date ? new Date(expense.date).toLocaleDateString() : '-'}</p>
      <p className="mt-1 text-slate-300">{expense.category}</p>

      <div className="flex gap-3 mt-3">
        <button onClick={onEdit} className="px-3 py-1 rounded-md btn-outline">✏️ Edit</button>
        <button onClick={onDelete} className="px-3 py-1 rounded-md btn-danger">🗑️ Delete</button>
      </div>
    </Motion.article>
  );
}
