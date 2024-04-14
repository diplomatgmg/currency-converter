import React, { type ChangeEvent, type ReactElement, useState } from 'react'
import currencies, { type Currency, defaultCurrency } from '../constants/currencies'

const CurrencySelect = (): ReactElement => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency >(defaultCurrency)

  const handleSelectCurrency = (e: ChangeEvent<HTMLSelectElement>): void => {
    const newCurrency = e.target.value
    setSelectedCurrency(currencies.find(item => item.label === newCurrency) ?? defaultCurrency)
  }

  return (
   <div className="converter__select-wrapper">
     <img src={`https://flagcdn.com/48x36/${selectedCurrency.value.toLowerCase()}.png`} alt="" className="converter__flag"/>
     <label className="converter__select-label">
       <select className="converter__select" value={selectedCurrency?.label ?? 'USD'} onChange={handleSelectCurrency}>
         {currencies.map(({ label }) => <option key={label} value={label}>{label}</option>)}
         <option value="RUB">RUB</option>
         <option value="USD">USD</option>
         <option value="RUB">EUR</option>
       </select>
     </label>
   </div>
  )
}

export default CurrencySelect
