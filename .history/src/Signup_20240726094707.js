import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sign from './components/Sign';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Perform signup logic here (e.g., form validation, API call, etc.)

    // After successful signup, navigate to Home page
    navigate('/home');
  };

  return (
    <div className="sign-container">
      <div className='left'>
        <img src='todoo.jpg' alt='login picture'></img>
      </div>

      <div className='right'>
        <Sign />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
