import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Log from './components/Log';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={< />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Log />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
