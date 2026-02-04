import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api", credentials: "include", }),
  endpoints: (build) => ({
    getExpenses: build.query({
      query: () => `/getExpense`,
      providesTags: ["Expenses"],
    }),

    createExpenses: build.mutation({
      query: (data) => ({
        url: "/createExpense",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Expenses"],
    }),

    updateExpenses: build.mutation({
      query: ({id, ...data}) => ({
        url: `/updateExpense/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Expenses"],
    }),

    deleteExpenses: build.mutation({
      query: (id) => ({
        url:`/deleteExpense/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Expenses"],
    }),

    login: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    
    register: build.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const {
  useGetExpensesQuery,
  useCreateExpensesMutation,
  useUpdateExpensesMutation,
  useDeleteExpensesMutation,
  
  useLoginMutation,
  useRegisterMutation
} = apiSlice;
