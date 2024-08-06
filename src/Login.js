import './Signup.css';
import Log from './components/Log';
import React from 'react';


function Login() {
  return (
    <div className="sign-container">
      <div className='left'>
        <img src='doit.png' alt='login'></img>
      </div>
      <div className='right'>
        <div className='logopic'>
          <img src='logo.png' alt='logo'></img>
        </div>
        <Log />
      </div>
    </div>
  );
}

export default Login;