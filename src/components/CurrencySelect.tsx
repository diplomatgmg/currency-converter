import React, { type ReactElement } from 'react'

const CurrencySelect = (): ReactElement => {
  return (
   <div className="converter__select-wrapper">
     <img src="https://flagcdn.com/48x36/us.png" alt="" className="converter__flag"/>
     <label className="converter__select-label">
       <select className="converter__select">
         <option value="RUB">RUB</option>
         <option value="USD">USD</option>
         <option value="RUB">EUR</option>
       </select>
     </label>
   </div>
  )
}

export default CurrencySelect
