import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [showFields, setShowFields] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
  

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
                    <input type="text" className='searchnow-dropdown' placeholder='Search...'></input>
                    <div className='profile-dropdown'></div>
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
                            

                            <Button variant="outlined" startIcon={<DeleteIcon />}>
                                Delete
      </Button>
                                
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
