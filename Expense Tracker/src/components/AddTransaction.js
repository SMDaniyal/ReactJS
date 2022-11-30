import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext';


export const AddTransaction = () => {
    
  const [text, setText] = useState('')  
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  return (
    <section className='add-transaction-contianer mb-4'>
        <h5 className='mb-4'>Add Transaction</h5>
        <form onSubmit={onSubmit}>
          <div className="form-floating mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter Text ...."
              value={text} 
              onChange={(e) => setText(e.target.value)} 
            />
            <label htmlFor="floatingInput">Enter Text ....</label>
          </div>
          <div className='mb-3'>
            <label htmlFor='amount' className='fw-bold'>
              Enter you amount in "-" for expense <br/>
              Enter you amount in "+" for income
            </label>
          </div>
          <div className="form-floating">
            <input type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                className="form-control" 
                placeholder="Enter you amount.." 
            />
            <label htmlFor="floatingPassword">Enter you amount..</label>
          </div>
          <div className='button-wrapper mt-4'>
            <button className='btn btn-primary buttom'>Add Transaction</button>
          </div> 
        </form>
    </section>
  )
}
