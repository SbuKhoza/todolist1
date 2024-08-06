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
                <div className='ctime'>
                    {/* <iframe src="https://free.timeanddate.com/clock/i9h344ho/n111/tlza/fn14/fs12/ftb/tt0/tw1/tm1/ts1" frameborder="0" width="156" height="16"></iframe> */}
                </div>
                <h1>Your Task(s)</h1>
                <div className='task'>
                    <button type="button" className='btn-task' onClick={handleButtonClick}>ADD</button>
                </div>

                {showFields && (
                    <>
                        <div className='field'>
                            <input type='text' placeholder='Add a new task...'></input>
                            <div className='calfield'>
                                <input type='text' placeholder='dd/mm/yyyy'></input>
                            </div>
                            <div className='btnn'>
                                <button type='button'>Save</button>
                            </div>
                            <div className='btnn1'>
                                <button type='button'>Edit</button>
                            </div>
                            <div className='btnn2'>
                                <button type='button' className='bb'>Delete</button>
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
