import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Login from './Login';
import './App.css';
// import { Login } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
