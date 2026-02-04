import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import {
  useCreateExpensesMutation,
  useDeleteExpensesMutation,
  useUpdateExpensesMutation,
} from "./services/apiSlice";
import { Box, Grid, Button, Stack, Input, Select, Heading } from '@chakra-ui/react'

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
      } else {
        await createExpense(payload).unwrap();
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
    } catch (error) {}
  }

  return (
    <Box>
      <Stack direction={{base: 'column', md: 'row'}} justify="space-between" align="center" mb={6}>
        <Heading size="md">📊Tracked Expenses</Heading>
        {display && <Button colorScheme="teal" onClick={()=>setDisplay(false)}>+ Add Expense</Button>}
      </Stack>

      {!display && (
        <Box bg="white" p={6} rounded="md" boxShadow="sm" mb={6}>
          <form onSubmit={handleSubmit}>
            <Grid templateColumns={{base: '1fr', md: '2fr 1fr'}} gap={4}>
              <Input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
              <Input placeholder="Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
              <Input placeholder="Date" type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
              <Select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Petrol">Petrol</option>
              </Select>
            </Grid>

            <Stack direction="row" justify="flex-end" mt={4}>
              <Button variant="ghost" onClick={()=>setDisplay(true)}>Cancel</Button>
              <Button colorScheme="green" type="submit">{editId ? 'Update' : 'Add Expense'}</Button>
            </Stack>
          </form>
        </Box>
      )}

      <Grid templateColumns={{base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={4}>
        {expenses?.map((expense) => (
          <ExpenseCard key={expense._id} expense={expense} onEdit={() => handleEdit(expense)} onDelete={() => handleDelete(expense._id)} />
        ))}
      </Grid>
    </Box>
  );
}
