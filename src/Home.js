import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
    Box,
    Container,
    Typography,
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Toolbar,
    IconButton,
    Avatar,
    Card,
    CardContent,
    CardActions,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Add as AddIcon,
    Search as SearchIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
    Check as CheckIcon,
    Menu as MenuIcon,
    ExitToApp as LogoutIcon,
    Assignment as TaskIcon
} from '@mui/icons-material';

function Home() {
    const [showFields, setShowFields] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [taskPriority, setTaskPriority] = useState('low');
    const [editingIndex, setEditingIndex] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [username, setUsername] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const loginUsername = searchParams.get('username');

    useEffect(() => {
        // Fetch user data from JSON server
        if (loginUsername) {
            axios.get(`http://localhost:3001/users?username=${loginUsername}`)
                .then(response => {
                    if (response.data.length > 0) {
                        setUsername(response.data[0].username);
                    } else {
                        console.error('User not found');
                        navigate('/');
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                    navigate('/');
                });
        } else {
            // If no username in URL, redirect to login
            navigate('/');
        }
    }, [loginUsername, navigate]);

    const handleLogout = () => {
        navigate('/');
    };

    // Rest of your existing code remains the same
    const handleAddTask = () => {
        setShowFields(true);
    };

    const handleSaveTask = () => {
        if (taskText && taskDate && taskTime && taskPriority) {
            const newTask = {
                text: taskText,
                date: taskDate,
                time: taskTime,
                priority: taskPriority,
                completed: false
            };

            if (editingIndex !== null) {
                const newTasks = [...tasks];
                newTasks[editingIndex] = newTask;
                setTasks(newTasks);
                setEditingIndex(null);
            } else {
                setTasks([...tasks, newTask]);
            }

            setTaskText('');
            setTaskDate('');
            setTaskTime('');
            setTaskPriority('low');
            setShowFields(false);
        }
    };

    const handleCompleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleEditTask = (index) => {
        const task = tasks[index];
        setTaskText(task.text);
        setTaskDate(task.date);
        setTaskTime(task.time);
        setTaskPriority(task.priority);
        setEditingIndex(index);
        setShowFields(true);
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return theme.palette.error.light;
            case 'medium':
                return theme.palette.warning.light;
            default:
                return theme.palette.success.light;
        }
    };

    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchText.toLowerCase())
    );

    const drawer = (
        <Box sx={{ width: 250 }}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Todo App
                </Typography>
                <Avatar
                    sx={{ 
                        width: 80, 
                        height: 80, 
                        mb: 2,
                        bgcolor: 'whitesmoke', 
                        mt: 5,
                        color: '#212121',
                    }}
                >
                    {username ? username.charAt(0).toUpperCase() : ''}
                </Avatar>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    {username}
                </Typography>
            </Box>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <TaskIcon sx={{ color: 'whitesmoke' }}/>
                    </ListItemIcon>
                    <ListItemText primary="Tasks" />
                </ListItem>
                <ListItem button onClick={handleLogout}>
                    <ListItemIcon>
                        <LogoutIcon sx={{ color: 'whitesmoke' }} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );

    // Rest of your component remains the same
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'grey.200' }}>
            {!isMobile && (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 250,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 250,
                            boxSizing: 'border-box',
                            bgcolor: '#212121',
                            color: 'whitesmoke',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            )}

            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { width: 250 },
                }}
            >
                {drawer}
            </Drawer>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: 'grey.200', boxShadow: 'none' }}>
                    <Toolbar>
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={() => setDrawerOpen(true)}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                        
                        <TextField
                            size="small"
                            placeholder="Search tasks..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            sx={{ 
                                mr: 2,
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 1,
                                }
                            }}
                            InputProps={{
                                endAdornment: <SearchIcon />,
                            }}
                        />
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={handleAddTask}
                            color="secondary"
                        >
                            Add Task
                        </Button>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {showFields && (
                        <Paper sx={{ p: 2, mb: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Task Description"
                                        value={taskText}
                                        onChange={(e) => setTaskText(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        type="date"
                                        label="Date"
                                        value={taskDate}
                                        onChange={(e) => setTaskDate(e.target.value)}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        type="time"
                                        label="Time"
                                        value={taskTime}
                                        onChange={(e) => setTaskTime(e.target.value)}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Priority</InputLabel>
                                        <Select
                                            value={taskPriority}
                                            label="Priority"
                                            onChange={(e) => setTaskPriority(e.target.value)}
                                        >
                                            <MenuItem value="low">Low</MenuItem>
                                            <MenuItem value="medium">Medium</MenuItem>
                                            <MenuItem value="high">High</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                                        <Button
                                            variant="contained"
                                            onClick={handleSaveTask}
                                            startIcon={<CheckIcon />}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={() => setShowFields(false)}
                                        >
                                            Cancel
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    )}

                    <Grid container spacing={3}>
                        {filteredTasks.map((task, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card 
                                    sx={{ 
                                        height: '100%',
                                        borderLeft: 6,
                                        borderColor: getPriorityColor(task.priority)
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                textDecoration: task.completed ? 'line-through' : 'none',
                                                color: task.completed ? 'text.secondary' : 'text.primary'
                                            }}
                                        >
                                            {task.text}
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ mt: 1 }}>
                                            {task.date} at {task.time}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: 'inline-block',
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: 1,
                                                bgcolor: getPriorityColor(task.priority),
                                                mt: 1
                                            }}
                                        >
                                            {task.priority.toUpperCase()}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            startIcon={<CheckIcon />}
                                            onClick={() => handleCompleteTask(index)}
                                        >
                                            {task.completed ? 'Undo' : 'Complete'}
                                        </Button>
                                        <Button
                                            size="small"
                                            startIcon={<EditIcon />}
                                            onClick={() => handleEditTask(index)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            size="small"
                                            color="error"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => handleDeleteTask(index)}
                                        >
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Home;