import React from 'react';
import { useHistory } from 'react-router-dom';
import Sign from './components/Sign';
import './Signup.css';

function Signup() {
  const history = useHistory();

  const handleSignup = () => {
    // Perform signup logic here (e.g., form validation, API call, etc.)

    // After successful signup, navigate to Home page
    history.push('/home');
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
