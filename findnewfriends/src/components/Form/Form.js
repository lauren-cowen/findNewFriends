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
    firstName: "",
    lastName: "",
    password: "",
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

    if(name==="firstName"&&!value){
      formIsValid = false;
      var newErrors = Object.assign(this.state.errors, {firstName: "First Name is required"});
      this.setState({ errors: newErrors });
    }
    else if(name==="lastName"&&!value){
      formIsValid = false;
      var newErrors = Object.assign(this.state.errors, {lastName: "Last Name is required"});
      this.setState({ errors: newErrors });
    }
    else if(name==="password"&&value.length<6) {
      formIsValid = false;
      var newErrors = Object.assign(this.state.errors, {password: "Choose a more secure password"});
      this.setState({ errors: newErrors });
    }
    else if(name==="password"&&!value) {
      formIsValid = false;
       var newErrors = Object.assign(this.state.errors, {password: "Password is required"});
       this.setState({ errors: newErrors });
    }
    return formIsValid;
  }


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if(this.loginFormIsValid("firstName", this.state.firstName)&&
      this.loginFormIsValid("lastName", this.state.lastName)&&
      this.loginFormIsValid("password", this.state.password)) {
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
              errorText="This field is required."
              value={this.state.firstName}
              onChange={this.handleInputChange}
              id = "firstName"
              errorText = {this.state.errors.firstName}
            />
            <br />
            <TextField 
              hintText = "Last Name"
              fullWidth = {styles.fullWidth}
              value={this.state.lastName}
              onChange={this.handleInputChange}
              id = "lastName"
              errorText = {this.state.errors.lastName}
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
