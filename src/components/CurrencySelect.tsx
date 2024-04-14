import React, { type ChangeEvent, type FC, type ReactElement } from 'react'
import currencies, { type Currency, defaultFromCurrency } from '../constants/currencies'
import { useAppDispatch } from '../redux/hooks'
import { type PayloadAction } from '@reduxjs/toolkit'

interface CurrencySelectProps {
  selectedCurrency: Currency
  setNewCurrency: (currency: Currency) => PayloadAction<Currency>
}
const CurrencySelect: FC<CurrencySelectProps> = ({ selectedCurrency, setNewCurrency }): ReactElement => {
  const dispatch = useAppDispatch()

  const handleSelectCurrency = (e: ChangeEvent<HTMLSelectElement>): void => {
    const newCurrency = e.target.value
    const selectedCurrency = currencies.find(({ label }) => label === newCurrency) ?? defaultFromCurrency

    dispatch(setNewCurrency(selectedCurrency))
  }

  return (
   <div className="converter__select-wrapper">
     <img src={`https://flagcdn.com/48x36/${selectedCurrency.value.toLowerCase()}.png`} alt="" className="converter__flag"/>
     <label className="converter__select-label">
       <select className="converter__select" value={selectedCurrency?.label ?? 'USD'} onChange={handleSelectCurrency}>
         {currencies.map(({ label }) => <option key={label} value={label}>{label}</option>)}
       </select>
     </label>
   </div>
  )
}

export default CurrencySelect
