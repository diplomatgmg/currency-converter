import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Currency } from '../constants/currencies'

type ConversionRates = Record<Currency['label'], number>
interface ConvertCurrencyResponse {
  time_last_update_utc: string
  conversion_rates: ConversionRates
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://v6.exchangerate-api.com/v6/cc4157b38f44743313a49105/latest/'
  }),
  endpoints: (build) => ({
    convertCurrency: build.query<ConvertCurrencyResponse, Currency['label']>({
      query: currency => `/${currency}`
    })
  })
})

export const {
  useConvertCurrencyQuery
} = api

export default api
export { type ConvertCurrencyResponse }
