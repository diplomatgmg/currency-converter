import React, { type FC, type ReactElement } from 'react'
import { type ConvertCurrencyResponse } from '../redux/api'
import { useAppSelector } from '../redux/hooks'

interface TableProps {
  isLoading: boolean
  data: ConvertCurrencyResponse
}

const Table: FC<TableProps> = ({ isLoading, data }): ReactElement => {
  const { amount, fromCurrency, toCurrency } = useAppSelector(state => state.currency)

  if (isLoading || data === undefined) {
    return <h1>Loading...</h1>
  }

  const conversionRate = Number(amount) * data.conversion_rates[toCurrency.label]

  return (
   <table className="converter__table">
     <tbody>
     <tr>
       <td>Date</td>
       <td>{new Date(data.time_last_update_utc).toLocaleString()}</td>
     </tr>
     <tr>
       <td>Exchange</td>
       <td>{amount} {fromCurrency.label} = {conversionRate} {toCurrency.label}</td>
     </tr>
     </tbody>
   </table>
  )
}

export default Table
