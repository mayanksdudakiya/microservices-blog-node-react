const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Create comment object
const commentsPostById = {};

// Get comments by post id
app.get('/posts/:id/comments', (req, res) => {

});

// Post a comment to the particular post using ID 
app.post('/posts/:id/comments', (req, res) => {

});

// Listen service on port
app.listen('4001', () => {
    console.log('Comment service listening on port 4001');
});