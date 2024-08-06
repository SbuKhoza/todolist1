import React, { useState } from 'react';
import './Home.css';
import { Box,Search, SearchIcon, SearchIconWrapper, StyledInputBase } from '@mui/material';

function Home() {
    const [showFields, setShowFields] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleButtonClick = () => {
        setShowFields(true);
    };

    const handleSaveClick = () => {
        if (taskText && taskDate && taskTime) {
            setTasks([...tasks, { text: taskText, date: taskDate, time: taskTime, completed: false }]);
            setTaskText('');
            setTaskDate('');
            setTaskTime('');
            setShowFields(false);
        }
    };

    const handleClearClick = () => {
        setTaskText('');
        setTaskDate('');
        setTaskTime('');
    };

    const handleTextChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleDateChange = (e) => {
        setTaskDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTaskTime(e.target.value);
    };

    const handleCompleteClick = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const handleDeleteClick = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="maincont">
            {/* <div className="dash">
                <div className='logo'>
                    <img src='todo-logo.png' alt='logo'></img>
                </div>
               

            
          
                {/* <input type="text" className='searchnow' placeholder='Search...'></input> */}
                <div className='profile'></div>
                <div className='proname'></div>
                <div className='calen'></div>
                <button className="hamburger" onClick={toggleDropdown}>
                    ☰
                </button>
            </div>

            {dropdownVisible && (
                <div className='dropdown-menu'>
                    <input type="text" className='searchnow-dropdown' placeholder='Search...'></input>
                    <div className='profile-dropdown'>
                        
                    </div>
                </div>
            )}

            <div className='content'>
                <h1>Your Task(s)</h1>
                <div className='task'>
                    <button type="button" className='btn-task' onClick={handleButtonClick}>ADD</button>
                </div>

                {showFields && (
                    <div className='field'>
                        <div className='field-row'>
                            <input type='text' placeholder='Add a new task...' value={taskText} onChange={handleTextChange}></input>
                        </div>
                        <div className='field-row'>
                            <input type='date' placeholder='dd/mm/yyyy' value={taskDate} onChange={handleDateChange}></input>
                            <input type='time' placeholder='HH:mm' value={taskTime} onChange={handleTimeChange}></input>
                        </div>
                        <div className='field-row'>
                            <button type='button' className='bbtn' onClick={handleSaveClick}>Save</button>
                            <button type='button' className='bbtn' onClick={handleClearClick}>Clear</button>
                        </div>
                    </div>
                )}

                {tasks.map((task, index) => (
                    <div key={index} className='field'>
                        <div className='field-row'>
                            <input 
                                type='text' 
                                value={task.text} 
                                readOnly 
                                className={task.completed ? 'complete' : ''}
                            />
                        </div>
                        <div className='field-row'>
                            <input type='date' value={task.date} readOnly></input>
                            <input type='time' value={task.time} readOnly></input>
                        </div>
                        <div className='field-row'>
                            <button 
                                type='button' 
                                className='bbtn2' 
                                onClick={() => handleCompleteClick(index)}
                            >
                                Complete
                            </button>
                            <button 
                                type='button' 
                                className='bbtn3' 
                                onClick={() => handleDeleteClick(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Home;
