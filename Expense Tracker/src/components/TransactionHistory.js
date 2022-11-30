import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {TransactionItem} from './TransactionItem'

export const TransactionHistory = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <section className='transaction-history-container mb-4'>
        <h5 className='mb-4'>Transaction History</h5>
        {transactions.map(transactionItem => (
          <TransactionItem key={transactionItem.id} transactionItem={transactionItem}/>
        ))}
    </section>
  )
}
