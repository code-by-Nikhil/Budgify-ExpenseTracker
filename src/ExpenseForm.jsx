import React, { useContext, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import {
  useCreateExpensesMutation,
  useDeleteExpensesMutation,
  useUpdateExpensesMutation,
} from "./services/apiSlice";
import { ThemeContext } from "./context/ThemeContext";

export default function ExpenseForm({ expenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");

  const [display, setDisplay] = useState(true);

  // const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);

  const [createExpense] = useCreateExpensesMutation();
  const [updateExpense] = useUpdateExpensesMutation();
  const [deleteExpense] = useDeleteExpensesMutation();

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = { title, amount: Number(amount), date, category };

    try {
      if (editId) {
        await updateExpense({ id: editId, ...payload }).unwrap();

        // const updated = expenses.map((exp) => (exp._id === editId ? res.result : exp))
        // setExpenses(updated);
      } else {
          await createExpense(payload).unwrap();
        // setExpenses([res.result, ...expenses]);
      }

      // reset
      setTitle("");
      setAmount("");
      setDate("");
      setCategory("Food");

      setEditId(null);
      setDisplay(true);
      
    } catch (error) {
      console.error(error);
    }
  }

  function handleEdit(expense) {
    setTitle(expense.title);
    setAmount(expense.amount);
    setDate(expense.date?.slice(0, 10));
    setCategory(expense.category);

    setEditId(expense._id);
    setDisplay(false);
  }

  async function handleDelete(id) {
    try {
      await deleteExpense(id).unwrap();
      // setExpenses(expenses.filter((exp) => exp._id !== id));
    } catch (error) {}
  }


  const {theme,handleTheme} = useContext(ThemeContext);

  return (
    <div className="p-10 h-full flex flex-col ">
      <div className="w-full mb-10 flex justify-center">
        {display && (
          <button
            onClick={() => setDisplay(false)}
            className="bg-blue-600 rounded text-white p-2 cursor-pointer hover:bg-blue-500  duration-300"
          >
            +Add Expense
          </button>
        )}

        <div className="bg-white w-auto rounded-xl">
          {!display && (
            <form onSubmit={handleSubmit}>
              <div className="flex gap-5 p-5">
                <div className="flex flex-col text-start">
                  <label>Title</label>
                  <input
                    className="bg-gray-100 p-2 mt-2 font-semibold border border-gray-300 rounded-md"
                    type="text"
                    placeholder="Expense title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col text-start">
                  <label>Amount</label>
                  <input
                    className="bg-gray-100 p-2 mt-2 font-semibold border border-gray-300 rounded-md"
                    type="number"
                    placeholder="e.g. 120"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center gap-5 mt-5">
                <div className="flex flex-col text-start">
                  <label>Date</label>
                  <input
                    className="px-8 bg-gray-100 p-2 mt-2 font-semibold border border-gray-300 rounded-md"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col text-start">
                  <label>Category</label>
                  <select
                    className="px-18 bg-gray-100 p-2 mt-2 font-semibold border border-gray-300 rounded-md"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Food">Food</option>
                    <option value="Petrol">Petrol</option>
                  </select>
                </div>
              </div>

              <div className="m-6 flex justify-end gap-4 font-semibold">
                <button
                  className="bg-gray-200 rounded p-2 cursor-pointer hover:bg-gray-300 duration-200"
                  type="button"
                  onClick={() => setDisplay(true)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-600 rounded text-white p-2 cursor-pointer hover:bg-green-500 duration-200"
                  type="submit"
                >
                  {editId ? "Update" : "Add Expense"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <h2 className={`flex text-4xl ${theme === "light" ? "text-black" : "text-white"}`}>📊Tracked Expenses</h2>
      <div className="grid grid-cols-4 gap-3">
        {expenses?.map((expense) => {
          return (
            <ExpenseCard
              key={expense._id}
              expense={expense}
              onEdit={() => handleEdit(expense)}
              onDelete={() => handleDelete(expense._id)}
            />
          );
        })}
      </div>
    </div>
  );
}
