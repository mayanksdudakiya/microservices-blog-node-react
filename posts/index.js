const express = require('express');
const {randomBytes} = require('crypto')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Create posts object
const posts = {};

// Get all the posts
app.get('/posts', (req, res) => {
    res.send(posts);
});

// Submit post data to the posts object
app.post('/posts', (req, res) => {
    // Generate random ID using randomBytes method of crypto package
    let id = randomBytes(4).toString('hex');

    // Extract title parameter from request body
    let { title } = req.body;    
    
    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

// Serve the application with port
app.listen(4000, () => {
    console.log('Posts service listening on port 4000');
});