import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";

import "./Form.css";
const styles = {
  fullWidth: true
}
let createNewUser = <Link to={"/Newuser"}/>;

class LoginForm extends Component {
  // Setting the component's initial state
  state = {
    password: "",
    email: "",
    errors: "",
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.id;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    }, ()=>{this.loginFormIsValid(name, value)});
  };

  loginFormIsValid = (name, value) => {
    var formIsValid = true;

    if(name==="email"&&!value){
      formIsValid = false;
      var newErrors = Object.assign(this.state.errors, {email: "Email is required"});
      this.setState({ errors: newErrors });
    }
    if(name==="password"&&value.length<6) {
      formIsValid = false;
      var newErrors = Object.assign(this.state.errors, {password: "Choose a more secure password"});
      this.setState({ errors: newErrors });
    }
    if(name==="password"&&!value) {
      formIsValid = false;
       var newErrors = Object.assign(this.state.errors, {password: "Password is required"});
       this.setState({ errors: newErrors });
    }
    return formIsValid;
  }


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    const validEmail = this.loginFormIsValid("email", this.state.email);
    const validPassword = this.loginFormIsValid("password", this.state.password);
    if(validEmail&&validPassword) {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }
   
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
      email: ""
    });
  };
render() {
  return (
    <div className = "signInForm">
          <form className="form">
            <TextField 
              hintText = "Email"
              fullWidth = {styles.fullWidth}
              value={this.state.email}
              onChange={this.handleInputChange}
              id = "email"
              errorText = {this.state.errors.email}
            />
            <br />
           <TextField 
              hintText = "Password"
              fullWidth = {styles.fullWidth}
              value={this.state.password}
              type="password"
              onChange={this.handleInputChange}
              id = "password"
              errorText = {this.state.errors.password}
            />
            <br />
                <RaisedButton label="Sign In" primary={true} onClick={this.handleFormSubmit}/>
                <RaisedButton label="Create New User" secondary={true}   containerElement={<Link to="/Newuser" />}linkButton={true}/>
          </form>
    </div>
  );
}

}

export default LoginForm;
