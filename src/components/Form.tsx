import React, { type ReactElement } from 'react'
import SwapSvg from '../assets/svg/swap.svg'
import Table from './Table'
import FormInput from './FormInput'
import CurrencySelect from './CurrencySelect'
import { useAppSelector } from '../redux/hooks'
import { setFromCurrency, setToCurrency } from '../redux/currencySlice'

const Form = (): ReactElement => {
  const { fromCurrency, toCurrency } = useAppSelector(state => state.currency)

  return (
    <form className="converter__form">
      <FormInput/>

      <div className="converter__conversion">
        <div className="converter__from">
          <span className="converter__label-text">From</span>
          <CurrencySelect selectedCurrency={fromCurrency} setNewCurrency={setFromCurrency}/>
        </div>

        <div className="converter__reverse">
          <img src={SwapSvg} alt=""/>
        </div>

        <div className="converter__to">
          <span className="converter__label-text">To</span>
          <CurrencySelect selectedCurrency={toCurrency} setNewCurrency={setToCurrency}/>
        </div>
      </div>

      <Table/>

      <button type="submit" className="converter__submit">Get Exchange Rate</button>
    </form>
  )
}

export default Form
