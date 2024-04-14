import React from 'react'
import './assets/style/style.scss'
import SwapSvg from './assets/svg/swap.svg'

const App = (): React.ReactElement => {
  return (
    <div className="converter">
      <h1 className="converter__title">Currency Converter</h1>
      <form className="converter__form">
        <label className="converter__label">
          <span className="converter__label-text">Enter Amount</span>
          <input type="number" className="converter__input"/>
        </label>

        <div className="converter__conversion">
          <div className="converter__from">
            <span className="converter__label-text">From</span>
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
          </div>

          <div className="converter__reverse">
            <img src={SwapSvg} alt=""/>
          </div>

          <div className="converter__to">
            <span className="converter__label-text">To</span>
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
          </div>
        </div>

        <table className="converter__table">
          <tbody>
          <tr>
            <td>Date</td>
            <td>14.04.2024, 19:25:10</td>
          </tr>
          <tr>
            <td>Rate</td>
            <td>1 $RUB = 0.053575 USD</td>
          </tr>
          <tr>
            <td>Exchange</td>
            <td>5 $RUB = 0.053575 USD</td>
          </tr>
          </tbody>
        </table>

        <button type="submit" className="converter__submit">Get Exchange Rate</button>
      </form>
    </div>

  )
}

export default App
