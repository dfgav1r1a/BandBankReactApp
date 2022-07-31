import {React, createContext} from 'react';

const UserContext= createContext(null);

function Card(props) {
    return (
        <div className='container mt-4'>
            <div className='card mx-auto w-75'>
                <h5 className='card-header text-center bg-warning'>
                    {props.header}
                </h5>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src='/img/withdraw.jpg' alt="atm" className="img-fluid rounded-3"></img>
                    </div>
                    <div className="col-md-8">
                        <div className='card-body'>
                            {props.title && (<h5 className='card-title display-6 text-center'>{props.title}</h5>)}
                            {props.text && (<p className='card-text lead'>{props.text}</p>)}
                            {props.body}
                            {props.status && (<div id='createStatus'>{props.status}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {UserContext, Card};