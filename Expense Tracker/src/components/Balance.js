import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  // Total Amount 
  const amounts = transactions.map(item => item.amount)
  const total = amounts.reduce( (acc, n) => 
    (acc+=n)
  ,0)
  .toFixed(2)

  return (
    <section className='balance-container text-center mb-4'>
        <h5>Balance</h5>
        <h2 className='fw-bold'>Rs. {total}</h2>
    </section>
  )
}
