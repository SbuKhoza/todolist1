Todo List Application

This is a React-based Todo List Application with Material-UI for styling. It includes features like task management, search functionality, and user authentication (basic example).

Developer Information

Name: Sibusiso Khoza

GitHub Username: sbukhoza

Email: sibusisok59@gmail.com

Prerequisites

Ensure you have the following installed on your machine before running the application:

Node.js (v14 or later) - Download Node.js

npm (comes with Node.js) or yarn for package management

JSON Server (globally installed) - Install it using the following command:

npm install -g json-server

Installation and Setup

Clone the Repository:

git clone https://github.com/sbukhoza/todolist.git
cd todolist

Install Dependencies:

npm install

Start the JSON Server:
JSON Server is used to simulate a backend server for data storage. Run the following command:

json-server --watch db.json --port 3001

Start the React Application:
In another terminal window, start the client application:

npm run client

Alternatively, you can run both the server and client concurrently:

npm start

Project Structure

src folder: Contains all the React components and application logic.

db.json: Mock database file for JSON Server.

package.json: Project dependencies and scripts.

Features

Add, Edit, Delete, and Complete Tasks: Manage tasks with priority levels (low, medium, high).

Search Tasks: Find tasks easily using the search bar.

Responsive Design: Adjusts seamlessly to different screen sizes using Material-UI.

Dependencies

The application uses the following major libraries:

React: Frontend framework

Material-UI: UI components and styling

React Router: Navigation

Axios: HTTP requests

JSON Server: Simulated backend server

Scripts

Start the application:

npm start

Build for production:

npm run build

Run tests:

npm test

Contact

For any questions or feedback, please contact:

Email: sibusisok59@gmail.com

GitHub: sbukhoza

Thank you for using the Todo List Application!