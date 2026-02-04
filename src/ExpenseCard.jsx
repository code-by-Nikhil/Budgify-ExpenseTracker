import React, { useState } from "react";

export default function ExpenseCard({ expense, onDelete, onEdit }) {
  return (
    <div className="mt-5 border border-gray-200 shadow-xl bg-white rounded-xl p-6 gap-5 hover:scale-105 duration-300">
      <div>
        <h4 className="text-xl text-start">
          Title: <span className="font-medium">{expense.title}</span>
        </h4>
        <h4 className="text-xl text-start">
          Amount: <span className="font-medium">{expense.amount}</span>
        </h4>
        <h4 className="text-xl text-start">
          Date:{" "}
          <span className="font-medium">{expense.date?.slice(0, 10)}</span>
        </h4>
        <h4 className="text-xl text-start">
          Category: <span className="font-medium">{expense.category}</span>
        </h4>
      </div>

      <div className="mt-3 flex gap-4">
        <button
          type="button"
          className="rounded text-white bg-green-500 px-2 py-1 cursor-pointer hover:bg-green-400 duration-200"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className="rounded text-white bg-red-500 px-2 py-1 cursor-pointer hover:bg-red-400 duration-200"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
