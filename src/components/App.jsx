import React, { Component, Fragment } from 'react';
import ChirpInput from './ChirpInput';
import Chirp from './Chirp';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            timeline: [
                { name: "Katrina", chirp: "Hello World!" },
                { name: "Norah", chirp: "Isn't it a nice day!?" },
                { name: "Mowgli", chirp: "Meow." }
            ]
        }

        let timeline = this.state.timeline;
        //maps over the timeline array to produce a list of Chirp Components
        this.updatedTimeline = timeline.map((val, index) => {
            return <Chirp key={index} userName={val.name} chirpMsg={val.chirp} />
        });
        
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

                <div id="timeline" className="bg-light p-4" >
                     {this.updatedTimeline}
                </div>

            </Fragment>
        );
    }
}

export default App;