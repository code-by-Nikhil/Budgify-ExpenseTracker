import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useGetExpensesQuery } from "./services/apiSlice";

export default function Expenses() {

  // FETCH DATA USING RTK Query
  const { data } = useGetExpensesQuery();

  return (
    <section className="py-6">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Expenses</h2>
      <p className="text-slate-500 mb-6">Your smart path to financial freedom 📈</p>

      <ExpenseForm expenses={data?.result} />
    </section>
  );
}
