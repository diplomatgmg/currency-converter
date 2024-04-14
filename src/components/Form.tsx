import React, { type FormEvent, type ReactElement, useEffect, useState } from 'react'
import SwapSvg from '../assets/svg/swap.svg'
import Table from './Table'
import FormInput from './FormInput'
import CurrencySelect from './CurrencySelect'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setFromCurrency, setToCurrency } from '../redux/currencySlice'
import { useConvertCurrencyQuery } from '../redux/api'

const Form = (): ReactElement => {
  const [isShouldFetch, setIsShouldFetch] = useState<boolean>(false)

  const { amount, fromCurrency, toCurrency } = useAppSelector(state => state.currency)

  const dispatch = useAppDispatch()

  const {
    data,
    isLoading
  } = useConvertCurrencyQuery(fromCurrency.label, { skip: !isShouldFetch })

  useEffect(() => {
    setIsShouldFetch(false)
  }, [fromCurrency, toCurrency])

  const handleSwapCurrency = (): void => {
    dispatch(setFromCurrency(toCurrency))
    dispatch(setToCurrency(fromCurrency))
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsShouldFetch(true)
  }

  return (
    <form className="converter__form" onSubmit={handleSubmitForm}>
      <FormInput/>

      <div className="converter__conversion">
        <div className="converter__from">
          <span className="converter__label-text">From</span>
          <CurrencySelect selectedCurrency={fromCurrency} setNewCurrency={setFromCurrency}/>
        </div>

        <div className="converter__reverse" onClick={handleSwapCurrency}>
          <img src={SwapSvg} alt=""/>
        </div>

        <div className="converter__to">
          <span className="converter__label-text">To</span>
          <CurrencySelect selectedCurrency={toCurrency} setNewCurrency={setToCurrency}/>
        </div>
      </div>

      {data !== undefined && isShouldFetch && <Table data={data} isLoading={isLoading}/>}

      <button type="submit" className="converter__submit" disabled={amount === ''}>Get Exchange Rate</button>
    </form>
  )
}

export default Form
