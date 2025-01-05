import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sign.css';

function Sign() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();

        // Check if the user already exists
        axios.get(`http://localhost:3001/users?username=${username}`)
            .then(response => {
                if (response.data.length > 0) {
                    alert('Username already exists. Please choose another.');
                } else {
                    // Add user to JSON database
                    axios.post('http://localhost:3001/users', { username, password })
                        .then(() => {
                            alert('Signup successful! Redirecting to home.');
                            navigate('/home');
                        })
                        .catch(error => {
                            console.error('Error registering user:', error);
                            alert('Failed to register user. Please try again.');
                        });
                }
            })
            .catch(error => {
                console.error('Error checking username availability:', error);
                alert('An error occurred. Please try again.');
            });
    };

    return (
        <div className="container">
            <h1>Signup</h1>
            <div className="lform">
                <form onSubmit={handleSignup}>
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
                    <button type="submit">Signup</button>
                    <p>Already have an account? <a href="/">Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Sign;
