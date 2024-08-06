import React, { useState } from 'react';
import './Home.css';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import Button from '@mui/material/Button';

function Home() {
    const [showFields, setShowFields] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [searchText, setSearchText] = useState('');

    const handleButtonClick = () => {
        setShowFields(true);
    };

    const handleSaveClick = () => {
        if (taskText && taskDate && taskTime) {
            if (editingIndex !== null) {
                const updatedTasks = tasks.map((task, index) =>
                    index === editingIndex ? { text: taskText, date: taskDate, time: taskTime, completed: task.completed } : task
                );
                setTasks(updatedTasks);
                setEditingIndex(null);
            } else {
                setTasks([...tasks, { text: taskText, date: taskDate, time: taskTime, completed: false }]);
            }
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

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setTaskText(tasks[index].text);
        setTaskDate(tasks[index].date);
        setTaskTime(tasks[index].time);
        setShowFields(true);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
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
                <div className='proname'></div>
                <div className='calen'></div>
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
                <h1>Your Task(s)</h1>

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              {/* <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton> */}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Tasks"
                inputProps={{ "aria-label": "search Tasks" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                {/*Need to add a search function*/}
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              {/* <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              ></IconButton> */}
            </Paper>

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
    );
}

export default Home;
