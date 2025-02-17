import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

function Home() {
    const [showFields, setShowFields] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [taskPriority, setTaskPriority] = useState('low');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [username, setUsername] = useState('');  
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleButtonClick = () => {
        setShowFields(true);
    };

    const handleSaveClick = () => {
        if (taskText && taskDate && taskTime && taskPriority) {
            const newTask = {
                text: taskText,
                date: taskDate,
                time: taskTime,
                priority: taskPriority,
                completed: false
            };

            setTasks([...tasks, newTask]);
            setTaskText('');
            setTaskDate('');
            setTaskTime('');
            setTaskPriority('low');
            setShowFields(false);
        }
    };

    const handleClearClick = () => {
        setTaskText('');
        setTaskDate('');
        setTaskTime('');
        setTaskPriority('low');
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

    const handlePriorityChange = (e) => {
        setTaskPriority(e.target.value);
    };

    const handleCompleteClick = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
        const newTasks = tasks.map((task, i) => i === index ? updatedTask : task);
        setTasks(newTasks);
    };

    const handleDeleteClick = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
        const task = tasks[index];
        setTaskText(task.text);
        setTaskDate(task.date);
        setTaskTime(task.time);
        setTaskPriority(task.priority);
        setShowFields(true);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('username'); 
        navigate('/'); 
    };

    const filteredTasks = tasks.filter(task => 
        task.text.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="maincont">
            <div className="dash">
                <div className='logo'>
                    <img src='todo-logo.png' alt='logo'></img>
                </div>
                <div className='profile'></div>
                <div className='proname'>
                    <h3>{username}</h3>
                </div>
                <div className='calen'></div>
                <div className='logout'>
                    <button className='logoutbtn' onClick={handleLogout}>Logout</button>
                </div>
                <button className="hamburger" onClick={toggleDropdown}>
                    ☰
                </button>
            </div>

            {dropdownVisible && (
                <div className='dropdown-menu'>
                    <div className='profile-dropdown'></div>
                </div>
            )}

            <div className='content'>
                <div className='top'>    
                    <h1>Your Tasks</h1>

                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 400,
                      }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Tasks"
                        inputProps={{ "aria-label": "search Tasks" }}
                        onChange={handleSearchTextChange}
                        value={searchText}
                      />
                      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                        <SearchIcon />
                      </IconButton>
                      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    </Paper>

                    <div className='task'>
                        <button type="button" className='btn-task' onClick={handleButtonClick}>ADD</button>
                    </div>
                </div>

                <div className='mainn'>
                    {showFields && (
                        <div className='field'>
                            <div className='field-row'>
                                <input type='text' placeholder='Add a new task...' value={taskText} onChange={handleTextChange}></input>
                            </div>
                            <div className='field-row'>
                                <input type='date' value={taskDate} onChange={handleDateChange}></input>
                                <input type='time' placeholder='HH:mm' value={taskTime} onChange={handleTimeChange}></input>
                                <select id='dropdown' name='priority' value={taskPriority} onChange={handlePriorityChange}>
                                    <option value='low'>Low</option>
                                    <option value='medium'>Medium</option>
                                    <option value='high'>High</option>
                                </select>
                            </div>
                            <div className='field-row'>
                                <button type='button' className='bbtn' onClick={handleSaveClick}>Save</button>
                                <button type='button' className='bbtn' onClick={handleClearClick}>Clear</button>
                            </div>
                        </div>
                    )}

                    {filteredTasks.map((task, index) => (
                        <div key={index} className='field'>
                            <div className='field-row'>
                                <input
                                    type='text'
                                    value={editingIndex === index ? taskText : task.text}
                                    readOnly={editingIndex !== index}
                                    className={task.completed ? 'complete' : ''}
                                    onChange={editingIndex === index ? handleTextChange : null}
                                />
                            </div>
                            <div className='field-row'>
                                <input
                                    type='date'
                                    value={editingIndex === index ? taskDate : task.date}
                                    readOnly={editingIndex !== index}
                                    onChange={editingIndex === index ? handleDateChange : null}
                                />
                                <input
                                    type='time'
                                    value={editingIndex === index ? taskTime : task.time}
                                    readOnly={editingIndex !== index}
                                    onChange={editingIndex === index ? handleTimeChange : null}
                                />
                                <select id='dropdown' name='priority' value={task.priority} readOnly={editingIndex !== index} onChange={editingIndex === index ? handlePriorityChange : null}>
                                    <option value='low'>Low</option>
                                    <option value='medium'>Medium</option>
                                    <option value='high'>High</option>
                                </select>
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
                                    className='bbtn'
                                    onClick={() => handleDeleteClick(index)}
                                >
                                    Delete
                                </button>
                                <button
                                    type='button'
                                    className='bbtn'
                                    onClick={() => handleEditClick(index)}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>      
        </div>
    );
}

export default Home;
