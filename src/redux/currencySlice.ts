import { type Currency, defaultFromCurrency, defaultToCurrency } from '../constants/currencies'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CurrencyState {
  amount: string
  fromCurrency: Currency
  toCurrency: Currency
}

const initialCurrencyState: CurrencyState = {
  amount: '',
  fromCurrency: defaultFromCurrency,
  toCurrency: defaultToCurrency
}

const currencySlice = createSlice({
  name: 'currency',
  initialState: initialCurrencyState,
  reducers: {
    setAmount (state, action: PayloadAction<string>) {
      state.amount = action.payload
    },
    setFromCurrency (state, action: PayloadAction<Currency>) {
      state.fromCurrency = action.payload
    },
    setToCurrency (state, action: PayloadAction<Currency>) {
      state.toCurrency = action.payload
    }
  }
})

export const {
  setAmount,
  setFromCurrency,
  setToCurrency
} = currencySlice.actions

export default currencySlice.reducer
export { type CurrencyState }
