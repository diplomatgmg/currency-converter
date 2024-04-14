import React, { type ReactElement } from 'react'
import Form from './Form'

const Converter = (): ReactElement => {
  return (
    <div className="converter">
      <h1 className="converter__title">Currency Converter</h1>
      <Form />
    </div>
  )
}

export default Converter
