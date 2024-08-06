import Signup from './Signup';
import Home from './Home';
import './App.css';


function App() {
  return (
    <div className="App">
      <Home/>
      
    </div>
  );
}

export default App;


import Sign from './components/Sign';
import './Signup.css';

function Signup() {
    return (
      <div className="sign-container">
        <div className='left'>
          <img src='todoo.jpg' alt='login picture'></img>
        </div>

        <div className='right'>
          <Sign/>
        </div>

        
        
      </div>
    );
  }
  
  export default Signup;