import React, {Component} from 'react';

class ChirpInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //method to handle the text input and change state
    handleChange(e) {
        this.setState({ msg: e.target.value })
        console.log(this.state.msg)
    };

    //method to handle the submission of the text input
    handleSubmit(e) {
        e.preventDefault();
        this.props.getMsg(this.state.msg);
        this.setState({ msg: '' });
    };

    render() {
        return(
                <form className="form-group" onSubmit={this.handleSubmit} >
                    <label for="chirpinput" className="text-white" >Post Your Message Here</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="chirpinput"
                        value={this.state.msg}
                        onChange={this.handleChange}
                        placeholder="How are you feeling today?"
                    />
                    <button type="sumbit" className="btn btn-secondary" >Post</button>
                </form>
        );
    }
}

export default ChirpInput;