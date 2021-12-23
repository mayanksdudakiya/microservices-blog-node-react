const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Create comment object
const commentsPostById = {};

// Get comments by post id
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsPostById[req.params.id] || []);
});

// Post a comment to the particular post using ID 
app.post('/posts/:id/comments', (req, res) => {

    // Generate random ID for comment
    let commentId = randomBytes(4).toString('hex');
    
    // Grab content from the request body
    let { content } = req.body;

    /**
     * If comment already exists then fetch that array to push new comments
     * or define blank array
     */
    let comments = commentsPostById[req.params.id] || [];

    // Push new comment in the comments object to attach in particular post
    comments.push({
        id: commentId,
        content
    });

    commentsPostById[req.params.id] = comments;

    res.status(201).send(comments);
});

// Listen service on port
app.listen('4001', () => {
    console.log('Comment service listening on port 4001');
});