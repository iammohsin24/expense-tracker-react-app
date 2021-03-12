import React, { useState ,useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const { addTransactions } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*100000),
            text,
            amount: +amount
        }
        addTransactions(newTransaction);
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
             <div className='form-control'>
                 <label htmlFor='text'>Text</label>
                 <input type='text' value={text} onChange={({target})=>setText(target.value)} placeholder='Enter text...'></input>
             </div>
             <div className='form-control'>
                 <label htmlFor='amount'>
                    Amount<br/>
                    (negative - expense, positive - income)
                 </label>
                <input type='number' value={amount} onChange={({target})=>setAmount(target.value)} placeholder='Enter amount...'></input>
             </div>
            <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
