import React, { type ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setAmount } from '../redux/currencySlice'

const FormInput = (): ReactElement => {
  const { amount } = useAppSelector(state => state.currency)

  const dispatch = useAppDispatch()

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setAmount(e.target.value))
  }

  return (
    <label className="converter__label">
      <span className="converter__label-text">Enter Amount</span>
      <input
        value={amount}
        onChange={handleChangeInput}
        type="number"
        className="converter__input"
      />
    </label>
  )
}

export default FormInput
