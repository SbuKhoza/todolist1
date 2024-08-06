import Sign from './components/Sign';
import Signup from './Sign'

function Signup() {
    return (
      <div className="container">

        <div className="image-cont">
          <img src='loginpic.png' alt='loginpic'></img>
            
        </div>

        <div className="form-cont">
          <Sign/>
        </div>
        
        
      </div>
    );
  }
  
  export default Signup;