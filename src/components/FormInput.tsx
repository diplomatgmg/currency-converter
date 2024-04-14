import React, { type ReactElement, useState } from 'react'

const FormInput = (): ReactElement => {
  const [input, setInput] = useState<string>('')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
  }

  return (
    <label className="converter__label">
      <span className="converter__label-text">Enter Amount</span>
      <input
        value={input}
        onChange={handleChangeInput}
        type="number"
        className="converter__input"
      />
    </label>
  )
}

export default FormInput
