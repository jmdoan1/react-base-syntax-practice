import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const style = {
        margin: '10px',
      };

    return (
        <div className="UserInput">
            <h4>{props.children}</h4>
            <div style={style}>
                <text>Username: </text>
                <input
                    type="text"
                    onChange={props.changed}
                    value={props.username}
                    name='username'
                />
            </div>
            <div style={style}>
                <text>Message: </text>
                <input
                    type="text"
                    onChange={props.changed}
                    value={props.message}
                    name='message'
                />
            </div>
            <div style={style}>
                <button onClick={props.submitFunction}>Submit!</button>
                <button onClick={props.clearFunction}>Clear!</button>
            </div>
        </div>
    )
};

export default userInput;