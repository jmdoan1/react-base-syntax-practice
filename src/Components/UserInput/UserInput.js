import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const style = {
        margin: '10px',
      };

    return (
        <div className="UserInput">
            <h4>Add a message</h4>
            <div style={style}>
                <text>Username: </text>
                <input
                    type="text"
                    onChange={props.changed}
                    value={props.text}
                    name='username'
                />
            </div>
            <div style={style}>
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