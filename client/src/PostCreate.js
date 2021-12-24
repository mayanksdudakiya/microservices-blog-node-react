import React, {useState} from "react";
import axios from 'axios';
import PostsList from "./PostsList";

export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };

    return <div>
        <h1>Post Create</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group mb-2">
                <label>Title</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
        <hr/>
        <h2>Posts</h2>
        <PostsList/>
    </div> 
};