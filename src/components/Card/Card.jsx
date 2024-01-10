//  To use states, you need hooks
//  To identify a hook inside of react
//  {} represent all of react - react is a big object
// Which is the same as
// import React from 'react'
// const variable = React.useState();
import { useState } from 'react';

function Card(props) {
    // Use state function gives us back an array with 2 properties - kittykat names
    // React has determined they should be as followed
    const [ myName, setMyName] = useState('Initial Value - Default');

    function changeName() {
        // Goal of function it to set name to new name
        setMyName('Ryan'); // Whatever is passed between the () is the new value for myName
    }

    return (
        <div className="card">
            <button>count is 0</button>
            <p>{props.globalName ? props.globalName : myName}</p>
            <button onClick={changeName}>Change Name</button>
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR. BAM
            </p>
        </div>
    );
}

export default Card;