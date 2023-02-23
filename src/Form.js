import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: '',
        }
        this.state = this.initialState;
    }

    handleChange = (event) => {
        
        //destructure name and value from event.target
        const { name, value } = event.target;
        //set state using name and value
        this.setState({
            [name]: value,
        })
    }

    onFormSubmit = (event) => {
        //standard practice to prevent default behavior of form
        event.preventDefault();
        //call addCharacter function from App.js
        this.props.addCharacter(this.state);
        //reset state to initial state
        this.setState(this.initialState);
    }


    render() {
        return <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name</label> <br />

            <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange} />

            <br />

            <label htmlFor="job">Job</label>

            <br />

            <input
                type="text"
                name="job"
                id="job"
                value={this.state.job}
                onChange={this.handleChange} />

            <br />

            <input
                type="submit"
                value="Submit" />

        </form>
    }
}



export default Form;
