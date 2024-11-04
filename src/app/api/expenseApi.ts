import { ExpenseData } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const expenseApi = createApi({
    reducerPath: 'expenseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getExpenses: builder.query<ExpenseData, void>({
            query: () => 'expense',
        }),
    })
})

export const { useGetExpensesQuery } = expenseApi