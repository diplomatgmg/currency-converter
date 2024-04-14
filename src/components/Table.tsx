import React, { type ReactElement } from 'react'

const Table = (): ReactElement => {
  return (
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
  )
}

export default Table
