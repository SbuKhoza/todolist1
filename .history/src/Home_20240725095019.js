import './Home.css';
// import {GoogleFont} from 'react-google-fonts';

function Home() {
    return (
        
        <div className="maincont">

            <div className="dash">
                <div className='logo'>
                    <img src='todo-logo.png' alt='logo'></img>
                </div>
                <div className='profile'>

                </div>

                <div className='proname'>
                    
                </div>


            </div>

            <div className='content'>

                <h1> Add a task</h1>
                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='field'>
                    <input type='text' placeholder='Add a new task...'></input>
                </div>

                <div className='tag'>
                    <h2>Yesterday you said Today. Just do it!</h2>
                </div>
            </div>

        </div>
    );
}

export default Home;