import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Sign.css';

function Log() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
     
        navigate('/home');
    };

    return (
        <div className="container">
            <div className="lform">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label htmlFor="uname"><b>Username</b></label><br />
                    <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="psw"><b>Password</b></label><br />
                    <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type="submit">Login</button>
                    <p className='logsign'>Don't have an account? <Link to="/signup">Signup</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Log;
