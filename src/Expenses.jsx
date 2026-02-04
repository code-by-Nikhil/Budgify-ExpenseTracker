import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useGetExpensesQuery } from "./services/apiSlice";
import { Heading, Text, Box } from '@chakra-ui/react'

export default function Expenses() {

  // FETCH DATA USING RTK Query
  const { data } = useGetExpensesQuery();

  return (
    <Box>
      <Heading color="teal.500" mb={2}>Expenses</Heading>
      <Text color="gray.500" mb={6}>Your smart path to financial freedom 📈</Text>

      <ExpenseForm expenses={data?.result} />
    </Box>
  );
}
