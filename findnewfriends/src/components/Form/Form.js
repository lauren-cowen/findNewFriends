import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import "./Form.css";
const styles = {
  fullWidth: true
}

class LoginForm extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };
render() {
  return (
    <div className = "signInForm">
          <form className="form">
            <TextField
            fullWidth = {styles.fullWidth}
            hintText = "First Name"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            />
            <br />
            <TextField 
            hintText = "Last Name"
             fullWidth = {styles.fullWidth}
            value={this.state.lastName}
            onChange={this.handleInputChange}
            />
            <br />
           <TextField 
            hintText = "Password"
             fullWidth = {styles.fullWidth}
            value={this.state.password}
            type="password"
            onChange={this.handleInputChange}
            />
            <br />
                <RaisedButton label="Sign In" primary={true} onClick={this.handleFormSubmit}/>
                <RaisedButton label="Create New User" secondary={true}/>
          </form>
    </div>
  );
}

}

export default LoginForm;
