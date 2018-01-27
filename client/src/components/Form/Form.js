import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import createHistory from "history/createBrowserHistory"

import "./Form.css";
const styles = {
  fullWidth: true
}
let createNewUser = <Link to={"/Newuser"}/>;

class LoginForm extends Component {
  // Setting the component's initial state
  constructor(props){
    super(props);
    this.state = {
      password: "",
      email: "",
      errors: "",
    }
  }


  DontUse = () => {
    API.getProfileByEmail(this.state.email) 
    .then(res => alert(res))
    .catch(err => console.log(err));
  }

  validateUser = email => {
   
    API.getProfileByEmail(email).then(res => {
      this.validatePassword(res.data);
    })
  }

  validatePassword = (id) => {
     let history = createHistory();
     API.getProfile(id).then(res =>{
      console.log(res.data);
      if(res.data.password===this.state.password){
        history.push('/profile/' + res.data);
        history.go(0);
      }
      else {
        this.setState({'errors': {'password': "Invalid Username or Password"}})
      }
     })

  }




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
  }

  loginFormIsValid = (name, value) => {
    var formIsValid = true;
    var newErrors;

    if(name==="email"&&!value){
      formIsValid = false;
      newErrors = Object.assign(this.state.errors, {email: "Email is required"});
      this.setState({ errors: newErrors });
    }
    if(name==="password"&&value.length<6) {
      formIsValid = false;
      newErrors = Object.assign(this.state.errors, {password: "Choose a more secure password"});
      this.setState({ errors: newErrors });
    }
    if(name==="password"&&!value) {
      formIsValid = false;
       newErrors = Object.assign(this.state.errors, {password: "Password is required"});
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
      this.validateUser(this.state.email);
    }
   
    this.setState({
      password: "",
      email: ""
    });
  };

render() {
  return (
    <div className = "signInForm">
          <form onSubmit = {this.handleFormSubmit} >
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
                <RaisedButton type="submit"  label="Sign In" primary={true} onClick={this.handleFormSubmit}/>
                <RaisedButton label="Create New User" secondary={true}   containerElement={<Link to="/Newuser" />}linkButton={true}/>
          </form>
    </div>
  );
}

}

export default LoginForm;
