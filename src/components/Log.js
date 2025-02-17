import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './Sign.css';

function Log() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
    event.preventDefault();

    axios.get(`http://localhost:3001/users?username=${username}&password=${password}`)
        .then((response) => {
            if (response.data.length > 0) {
                alert('Login successful! Redirecting to home.');
                // Pass username as URL parameter
                navigate(`/home?username=${encodeURIComponent(username)}`);
            } else {
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Error during login:', error);
            alert('An error occurred while logging in. Please try again.');
        });

        setUsername('');
        setPassword('');
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <div className="lform">
                <form onSubmit={handleLogin}>
                    <label htmlFor="uname"><b>Username</b></label><br />
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        name="uname" 
                        required 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    /><br />
                    <label htmlFor="psw"><b>Password</b></label><br />
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        name="psw" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    /><br />
                    <button type="submit">Login</button>
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </form>
            </div>
        </div>
    );
}

export default Log;
