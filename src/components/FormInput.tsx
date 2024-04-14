import React, { type ReactElement } from 'react'

const FormInput = (): ReactElement => {
  return (
   <label className="converter__label">
     <span className="converter__label-text">Enter Amount</span>
     <input type="number" className="converter__input"/>
   </label>
  )
}

export default FormInput
