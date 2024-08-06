import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [showFields, setShowFields] = useState(false);

    const handleButtonClick = () => {
        setShowFields(true);
    };

    return (
        <div className="maincont">
            <div className="dash">
                <div className='logo'>
                    <img src='todo-logo.png' alt='logo'></img>
                </div>
                <div className='profile'></div>
                <div className='proname'></div>
                <input type="text" className='searchnow' placeholder='Search...'></input>
                <div className='calen'></div>
            </div>

            <div className='content'>
                
                <h1>Your Task(s)</h1>
                <div className='task'>
                    <button type="button" className='btn-task' onClick={handleButtonClick}>ADD</button>
                </div>

                {showFields && (
                    <>
                        <div className='field'>
                            <div className='chek'><input type='checkbox'></input>
                            
                            </div>              
                            <input type='text' cla placeholder='Add a new task...'></input>
                            {/* <div className='calfield'> */}
                                <input type='text' placeholder='dd/mm/yyyy'></input>
                            {/* </div> */}
                            <div className='btnn'>
                                <button type='button' className='bbtn'>Save</button>
                            </div>
                            <div className='btnn1'>
                                <button type='button' className='bbtn2'>Edit</button>
                            </div>
                            <div className='btnn2'>
                                <button type='button' className='bbtn3'>Delete</button>
                            </div>
                        </div>
                        {/* Repeat the above block for as many fields as you need */}
                        
                    </>

                    
                )}

                
                
                <div className='symbol'>
                    <div className='impo'></div>
                    <div className='impo'></div>
                    <div className='impo'></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
