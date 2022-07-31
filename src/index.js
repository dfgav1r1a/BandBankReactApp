import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes} from 'react-router'; 
import {BrowserRouter} from 'react-router-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle';

import NavBar from './components/navbar.js';
import Home from './components/home.js';
import CreateAccount from './components/createaccount.js';
import Deposit from './components/deposit.js';
import Withdraw from './components/withdraw.js';
import AllData from './components/alldata.js';
import {UserContext} from './components/context';

function BadBank() {
  return (
      <BrowserRouter>
         <NavBar /> 
         <UserContext.Provider value={{users:[{name: 'First User', email: 'first@user.com', pass: '12345678', balance: 100}]}}>
         <Routes>
          <Route path='/' exact        element={<Home/>}></Route>
          <Route path='/createaccount' element={<CreateAccount/>}></Route>
          <Route path='/deposit'       element={<Deposit/>}></Route>
          <Route path='/withdrawal'    element={<Withdraw/>}></Route>
          <Route path='/alldata'       element={<AllData/>}></Route>
         </Routes>
         </UserContext.Provider>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadBank/>);

