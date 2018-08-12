import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <h4>Add a message</h4>
            <div className="InputLine">
                <text>Username: </text>
                <input
                    type="text"
                    onChange={props.changed}
                    value={props.text}
                    name='username'
                />
            </div>
            <div className="InputLine">
                <text>Message: </text>
                <input
                    type="text"
                    onChange={props.changed}
                    value={props.text}
                    name='message'
                />
            </div>
        </div>
    )
};

export default userInput;