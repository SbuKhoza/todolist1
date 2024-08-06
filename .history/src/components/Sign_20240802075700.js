import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css';

function Sign() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        console.log(username, password);

        
        navigate('/home');
    };

    return (
        <div className="container">
            <h1>Signup</h1>
            <div className="lform">
                <form onSubmit={handleSignup}>
                    <label htmlFor="uname"><b>Username</b></label><br />
                    <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="psw"><b>Password</b></label><br />
                    <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type="submit">Signup</button>
                    <p>Already have an account? <a href="/">Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Sign;
