import {React, useContext, useState} from 'react';
import {UserContext, Card} from './context';


function Deposit() {
    const ctx = useContext(UserContext);
    let accountBalance = ctx.users[0].balance;
    let deposit = 0;
    const [balance, setBalance] = useState(accountBalance);
    const [valid, setValid] = useState(true);
    const [success, setSuccess] = useState(false);

    const handleChange = e => {
        deposit = Number(e.currentTarget.value);
        setSuccess(false);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Amount to deposit: ${deposit}`);
        if (deposit > 0) {
            setBalance(balance + deposit);
            setValid(true);
            setSuccess(true);
        } else {
            console.error('This deposit cannot be done, try again');
            setValid(false);
            setSuccess(false);            
        }
    }

    return (
        <Card 
            header='Deposit'
            title='Bad Bank'
            text='Deposit money into your account using the form below.'
            body= {
                (   <>
                        <div className="row bg-dark bg-gradient rounded-3 ms-3 me-3 mb-2 text-white">
                            <h4 className='lead fs-3 fw-bold col-md-6'>Balance:</h4>
                            <h4 className='lead fs-3 fw-bold col-md-6 text-end'>{`$${balance}`}</h4>
                        </div>
                                    
                        {valid ?
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='amount-to-deposit' className='form-label lead'>Input amount to deposit</label>
                            <input  type="number" id="amount-to-deposit" className='form-control mb-3' onChange={handleChange}/>
                            <button type="submit" className="btn btn-warning">Deposit</button>
                        </form> :
                        <div className='mt-3'>
                            <h4 className='lead mb-3'>We are sorry, this transaction is not possible please try again.</h4>
                            <button className='btn btn-warning' onClick={e => setValid(true)}>Try Again</button>
                        </div>}
                        { success &&
                            <div className='mt-3 text-success'>
                                <h4 className='lead text-center'>Your deposit was successful!</h4>
                            </div>
                        }
                    </>       
                )}
        /> 
    );
}

export default Deposit;