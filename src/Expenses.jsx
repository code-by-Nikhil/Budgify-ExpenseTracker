import React, { useState, useEffect, useContext } from "react";
import ExpenseForm from "./ExpenseForm";
import api from "./api";
import { useGetExpensesQuery } from "./services/apiSlice";
import { ThemeContext } from "./context/ThemeContext";

export default function Expenses() {

  // const [expenses,setExpenses] = useState([]);

  // FETCH DATA USING RTK Query
  const { data } = useGetExpensesQuery();
  console.log(data);


  const {theme,handleTheme} = useContext(ThemeContext);

  return (
    <div className={`text-center font-bold p-20 min-h-screen flex flex-col gap-5
                      ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-black" }`}>
      <button onClick={handleTheme} className="fixed top-10 right-10 text-2xl cursor-pointer">☀️</button>
      <h1 className="text-blue-600 font-bold text-4xl">
        💸Budgify - Expense Tracker
      </h1>
      <p className="text-gray-500 font-semibold">
        Your smart path to find financial freedom 📈
      </p>
      {
        <ExpenseForm
          expenses={data?.result}
          // setExpenses={setExpenses}
        />
      }
    </div>
  );
}
