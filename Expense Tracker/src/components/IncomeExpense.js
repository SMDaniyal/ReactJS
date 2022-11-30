import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(item => item.amount)

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc,n) => (acc+=n),0)
  .toFixed(2)

  const expense = (
    amounts
    .filter(item => item < 0)
    .reduce((acc, n) => (acc += n), 0)
    .toFixed(2)
  )

  return (
    <section className='income-expense-container mb-4'>
        <div className='d-flex justify-content-evenly shadow p-3'>
            <div className='income d-flex flex-column align-items-center'>
                <h6>INCOME</h6>
                <h4 className='text-success'>Rs. {income}</h4>
            </div>
            <div className='expense d-flex flex-column align-items-center'>
                <h6>EXPENSE</h6>
                <h4 className='text-danger'>Rs. {expense}</h4>
            </div>
        </div>
    </section>
  )
}
