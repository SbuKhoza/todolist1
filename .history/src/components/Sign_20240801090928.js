import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Sign.css';

function Sign() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        
        axios.get('http://localhost:3001/Signup')
            .then(response => {
                setS(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleSignup = (event) => {
        event.preventDefault();
       
        navigate('/home');
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
                    <p className='logsign'>Already have an account? <Link to="/">Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Sign;
