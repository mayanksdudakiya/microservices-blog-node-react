import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

export default () => {
    const [posts, setPosts] = useState({});

    // Get & set posts data from posts api
    const fetchPosts = async () => {
        let res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    };

    // Call the fetchPosts function only when componenet created for only once
    useEffect(() => {
        fetchPosts();
    }, []);

    // Render posts with array map
    const renderedPosts = Object.values(posts).map( (post) => {
        return <div className="card" key={post.id} style={{width: '33.33%', marginBottom: '20px'}}>
            <div className="card-body">
                <h3>{post.title}</h3>
            </div>
            <hr/>
            <CommentsList postId={post.id}/>
            <CommentCreate postId={post.id}/>
        </div>
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>;
};