import React, { type ReactElement } from 'react'
import SwapSvg from '../assets/svg/swap.svg'
import Table from './Table'
import FormInput from './FormInput'
import CurrencySelect from './CurrencySelect'

const Form = (): ReactElement => {
  return (
    <form className="converter__form">
      <FormInput/>

      <div className="converter__conversion">
        <div className="converter__from">
          <span className="converter__label-text">From</span>
          <CurrencySelect />
        </div>

        <div className="converter__reverse">
          <img src={SwapSvg} alt=""/>
        </div>

        <div className="converter__to">
          <span className="converter__label-text">To</span>
          <CurrencySelect />
        </div>
      </div>

      <Table/>

      <button type="submit" className="converter__submit">Get Exchange Rate</button>
    </form>
  )
}

export default Form
