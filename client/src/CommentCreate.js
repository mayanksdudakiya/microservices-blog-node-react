import React, {useState} from "react";
import axios from "axios";

export default ({postId}) => {
    const [comment, setComment] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            'content': comment
        });

        setComment('');
    };

    return <div className="container">
        <h3>Create Comment</h3>
        <form onSubmit={onSubmit}>  
            <div className="form-group">
                <label>Comment</label>
                <input className="input-group" value={comment} onChange={e => setComment(e.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2 mb-2">Submit</button>
        </form>
    </div>
};