import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Sign from './components/Sign';
import './Signup.css';

function Signup() {
  
  return (
    <div className="sign-container">
      <div className='left'>
        <img src='check.jpg' alt='logo image'></img>
      </div>

      <div className='right'>
        <Sign />
        
      </div>
    </div>
  );
}

export default Signup;
