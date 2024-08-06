import React from 'react';
import Sign from './components/Sign';
import './Signup.css';

function Signup() {
  return (
    <div className="sign-container">
      <div className='left'>
        <img src='todoo.jpg' alt='login'></img>
      </div>
      <div className='right'>
        <Sign />
      </div>
    </div>
  );
}

export default Signup;
