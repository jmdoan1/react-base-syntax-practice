import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h4>{props.children}</h4>
            <p>Username: {props.username}</p>
            <p>Message: {props.message}</p>
        </div>
    )
};

export default userOutput;