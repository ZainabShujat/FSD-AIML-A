const express = require('express');
const app = express();

//middleware to parse JSON bodies
app.use(express.json());

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.ck' }
];

//get = retrieveall users 
app.get('/users', (req, res) => {
    res.json(users);
});
