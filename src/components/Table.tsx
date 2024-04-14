import React, { type FC, type ReactElement } from 'react'
import { type ConvertCurrencyResponse } from '../redux/api'
import { useAppSelector } from '../redux/hooks'
import { formatCurrency } from '../utils'

interface TableProps {
  isLoading: boolean
  data: ConvertCurrencyResponse
}

const Table: FC<TableProps> = ({ isLoading, data }): ReactElement => {
  const { amount, fromCurrency, toCurrency } = useAppSelector(state => state.currency)

  if (isLoading || data === undefined) {
    return <h1>Loading...</h1>
  }

  const conversionRate = data.conversion_rates[toCurrency.label]
  const convertedAmount = formatCurrency(Number(amount) * conversionRate, true)
  const formattedDate = new Date(data.time_last_update_utc).toLocaleString()

  return (
   <table className="converter__table">
     <tbody>
     <tr>
       <td>Date</td>
       <td>{formattedDate}</td>
     </tr>
     <tr>
       <td>Exchange</td>
       <td>{formatCurrency(amount)} {fromCurrency.label} = {convertedAmount} {toCurrency.label}</td>
     </tr>
     </tbody>
   </table>
  )
}

export default Table
