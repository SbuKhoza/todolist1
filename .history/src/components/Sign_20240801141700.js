import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css';
import axios from 'axios';

function Sign() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        console.log(username, password);

        try {
            const response = await axios.post('http://localhost:3000/user', { username, password });
            if (response.status === 200) {
                navigate('/home');
            } else {
                alert(response.data.error);
            }
        } catch (error) {
            console.error('Error during signup', error);
            if (error.response) {
                alert(error.response.data.error);
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="container">
            <div className="lform">
                <h1>Signup</h1>
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
