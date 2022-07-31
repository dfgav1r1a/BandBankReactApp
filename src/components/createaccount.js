import {React, useContext, useState} from 'react';
import {UserContext, Card} from './context';


function CreateAccount() {
    const ctx = useContext(UserContext);
    const [show, setShow] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handleSubmit = (e) => {
        console.log(`Account created, name: ${name}, email: ${email}, password: ${pass}`)
        e.preventDefault();
        ctx.users.push({name, email, pass, balance: 100});
        setShow(false);
    }

    const clearForm = () => {
        setShow(true);
        setName('');
        setEmail('');
        setPass('');
    }

    return (
        <Card 
            header='Create Account'
            title='Bad Bank'
            text='Please complete the form below to create your account.'
            body={show ? (
                <form onSubmit={handleSubmit}>
                        <label className="form-label lead" htmlFor="name">Name: </label>
                        <input type="text" id="name" className="form-control mb-3" value={name} onChange={e => setName(e.currentTarget.value)} required></input>
                        <label className="form-label lead" htmlFor="email">Email: </label>
                        <input type="email" id="email" className="form-control mb-3" value={email} onChange={e => setEmail(e.currentTarget.value)} required></input>
                        <label className="form-label lead" htmlFor="userPassword">Password: </label>
                        <input type="password" id="userPassword" className="form-control" value={pass} onChange={e => setPass(e.currentTarget.value)} required minLength={8}></input>
                        <div id="passinstructions" className="form-text mb-4">Password should be at least 8 characters long</div>
                    <button type="submit" className="btn btn-warning">Create Account</button>
                </form>) : (
                <>
                    <h5 className="lead text-center mb-4">Your account was created!</h5>
                    <button type="submit" className="btn btn-warning" onClick={clearForm}>Create another account</button>
                </>                 
            )}
            />
    );
}

export default CreateAccount;