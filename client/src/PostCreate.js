import React from "react";

export default () => {
    return <div>
        <h1>Post Create</h1>
        <form>
            <div className="form-group mb-2">
                <label>Title</label>
                <input type="text" className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div> 
};