import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import ConfirmModal from "./components/ui/ConfirmModal";
import {
  useCreateExpensesMutation,
  useDeleteExpensesMutation,
  useUpdateExpensesMutation,
} from "./services/apiSlice";

export default function ExpenseForm({ expenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");

  const [display, setDisplay] = useState(true);
  const [editId, setEditId] = useState(null);

  const [createExpense] = useCreateExpensesMutation();
  const [updateExpense] = useUpdateExpensesMutation();
  const [deleteExpense] = useDeleteExpensesMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = { title, amount: Number(amount), date, category };
    try {
      if (editId) await updateExpense({ id: editId, ...payload }).unwrap();
      else await createExpense(payload).unwrap();
      setTitle(""); setAmount(""); setDate(""); setCategory("Food"); setEditId(null); setDisplay(true);
    } catch (error) { console.error(error); }
  }

  function handleEdit(expense) {
    setTitle(expense.title); setAmount(expense.amount); setDate(expense.date?.slice(0, 10)); setCategory(expense.category); setEditId(expense._id); setDisplay(false);
  }

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);

  async function handleDelete(id) {
    try { await deleteExpense(id).unwrap(); } catch (err) { console.error(err); }
  }

  function askDelete(id){
    setSelectedDeleteId(id);
    setConfirmOpen(true);
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">📊 Tracked Expenses</h3>
        {display && <button className="px-4 py-2 rounded-xl bg-indigo-500 text-white" onClick={()=>setDisplay(false)}>+ Add Expense</button>}
      </div>

      {!display && (
        <div className="bg-slate-900 p-6 rounded-xl shadow mb-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input className="col-span-2 p-3 rounded-md bg-slate-800 text-white placeholder-slate-500" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
              <input className="p-3 rounded-md bg-slate-800 text-white placeholder-slate-500" placeholder="Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
              <input className="p-3 rounded-md bg-slate-800 text-white placeholder-slate-500" placeholder="Date" type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
              <select className="p-3 rounded-md bg-slate-800 text-white" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Petrol">Petrol</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button type="button" className="px-3 py-2 rounded-md border border-white/6 text-white" onClick={()=>setDisplay(true)}>Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-xl bg-green-600 text-white">{editId ? 'Update' : 'Add Expense'}</button>
            </div>
          </form>
        </div>
      )} 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {expenses?.map((expense) => (
          <ExpenseCard key={expense._id} expense={expense} onEdit={() => handleEdit(expense)} onDelete={() => askDelete(expense._id)} />
        ))}
      </div>

      <ConfirmModal isOpen={confirmOpen} onClose={()=>setConfirmOpen(false)} onConfirm={async ()=>{ await handleDelete(selectedDeleteId); setConfirmOpen(false); }} message="Delete this expense?" />
    </section>
  );
}
