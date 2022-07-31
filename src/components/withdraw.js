import {React, useContext, useState} from 'react';
import {UserContext, Card} from './context';


function Withdraw() {
    const ctx = useContext(UserContext);
    const accountBalance = ctx.users[0].balance;
    let withdraw = 0;
    const[balance, setBalance] = useState(accountBalance);
    const [valid, setValid] = useState(true);
    const [success, setSuccess] = useState(false);

    const handleChange = e => {
        withdraw  = Number(e.currentTarget.value);
        setSuccess(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (balance <= 0 || withdraw <= 0) {
            setValid(false);
            setSuccess(false);
        } else {
            setBalance(balance - withdraw);
            setSuccess(true);
        }
    }

    return (
        <Card 
            header='Withdraw'
            title='Bad Bank'
            text='Withdraw money using the form below'
            body={(
            <>
                <div className='row bg-dark bg-gradient ms-3 me-3 mb-2 rounded-3 text-white'>
                    <h4 className='col-md-6 fw-bold fs-3'>Balance:</h4>
                    <h4 className='col-md-6 fw-bold fs-3 text-end'>{`$${balance}`}</h4>
                </div>
                { valid ?
                <form onSubmit={handleSubmit}>
                    <label htmlFor="amount-to-withdraw" className='form-label lead'>Input amount to withdraw</label>
                    <input type="number" id="amount-to-withdraw" className='form-control mb-3' onChange={handleChange}/>
                    <button type="submit" className='btn btn-warning'>Withdraw</button>
                </form> :
                <div className='mt-3'>
                    <h4 className='lead mb-3'>We are sorry, You do not have available funds to make this transaction.</h4>
                    <button className='btn btn-warning' onClick={e => setValid(true)}>Try Again</button>
                </div>}
                { success &&
                    <div className='mt-3 text-success'>
                        <h4 className='lead text-center'>Your withdrawal was successful!</h4>
                    </div>
                }
            </> 
            )}
        /> 
    );
}

export default Withdraw;