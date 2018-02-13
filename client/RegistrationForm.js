import React, { Component } from 'react';

import './RegistrationForm.css';


export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('form is submitted');
    }

    handleEmailChange(e) {
        console.log('email was changed');
        this.setState({ email: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input 
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange.bind(this)}
                    className="emailField"
                />
                <button className="submitBtn">Save</button>
            </form>
        )    
    }
}