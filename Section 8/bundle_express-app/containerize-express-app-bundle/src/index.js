const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Get registered users
app.get('/users', (req, res) => {
    return res.json({ users });
})

// Register a new user
app.post('/users', (req, res) => {
    const newUserId = req.body.userId;
    if (!newUserId) {
        return res.status(400).send('Missing userId.');
    }

    if (users.includes(newUserId)) {
        return res.status(400).send('userId already exists.');
    }

    users.push(newUserId);
    return res.status(201).send('User registered.');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});