import React, { Component, Fragment } from 'react';
import ChirpInput from './ChirpInput';
import Chirp from './Chirp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {}
    }

    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid text-primary m-0">
                    <div className="container">
                        <h1 className="display-4">Chirper</h1>
                        <p className="lead">Welcome to Chirper. A site to post fun messages!</p>
                    </div>
                </div>

                <div id="userinput" className="bg-primary p-4">
                    <ChirpInput />
                </div>

                <div id="timeline">
                    <Chirp userName= 'Phillip' chirpMsg= 'Msg' />
                </div>

            </Fragment>
        );
    }
}

export default App;