// import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Sign.css';

function Sign() {
  
  };

  return (
    <div className="container">
      <div className="lform">
        <h1>Sign up</h1>
        <form onSubmit={handleSignup}>
          <label htmlFor="uname"><b>Username</b></label><br />
          <input type="text" placeholder="Enter Username" name="uname" required /><br />
          <label htmlFor="psw"><b>Password</b></label><br />
          <input type="password" placeholder="Enter Password" name="psw" required /><br />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Sign;
