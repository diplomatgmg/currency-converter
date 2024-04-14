import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './currencySlice'
import api from './api'
import loggingMiddleware from './middleware/loggingMiddleware'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    currency: currencyReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, loggingMiddleware)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
