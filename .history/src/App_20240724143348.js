import Login from './Login';
import Signup from './Signup';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/" element={<Signup />} />  
                    
                </Routes>
            </BrowserRouter>
      
    </div>
  );
}

export default App;