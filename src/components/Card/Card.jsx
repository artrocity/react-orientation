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

    const [ myNumber, setMyNumber] = useState('0');

    function changeName() {
        // Goal of function it to set name to new name
        setMyName('Ryan'); // Whatever is passed between the () is the new value for myName
    };

    function incrementNumber() {
        let newNumber = parseInt(myNumber) + 1;
        setMyNumber(newNumber);
    };

    return (
        <div className="card">
            {/* Change this 0 to  */}
            <button onClick={incrementNumber}>Count is : {myNumber}</button>
            <p>{props.globalName ? props.globalName : myName}</p>
            <button onClick={changeName}>Change Name</button>
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR. BAM
            </p>
        </div>
    );
}

export default Card;