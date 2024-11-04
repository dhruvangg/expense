import { ExpenseData } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getCategory: builder.query<ExpenseData, void>({
            query: () => 'category',
        }),
    })
})

export const { useGetCategoryQuery } = categoryApi