import React, { Component, Fragment } from 'react';
import ChirpInput from './ChirpInput';

function Chirp(props) {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">"User's Name"</h5>
                <p className="card-text">"props"</p>
            </div>
        </div>
    );
}

export default Chirp;