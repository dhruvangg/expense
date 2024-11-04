import { configureStore } from '@reduxjs/toolkit'
import { expenseApi, categoryApi } from '@/app/api'

export const store = configureStore({
    reducer: {
        [expenseApi.reducerPath]: expenseApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(...[expenseApi.middleware, categoryApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 