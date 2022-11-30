import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const TransactionItem = (props) => {
  //add signs before amount
  const sign = props.transactionItem.amount < 0 ? '-' : '+';

  const { deleteTransaction } = useContext(GlobalContext)
  return (
    //classes on the bases of sign
    <div className='transaction-item d-flex mb-3 position-relative'>
      <div className={`d-flex justify-content-between py-3 px-4 shadow position-relative rounded-2 w-100 ${props.transactionItem.amount < 0 ? 'minus' : 'plus'}`}>
        <div>{props.transactionItem.text}</div>
        <div>{sign}Rs{Math.abs(props.transactionItem.amount)}</div>
      </div>
      <button 
        className='btn-remove-transaction btn btn-danger'
        onClick={
          () => deleteTransaction(props.transactionItem.id)
        }
      >x</button>
    </div>
  )
}
