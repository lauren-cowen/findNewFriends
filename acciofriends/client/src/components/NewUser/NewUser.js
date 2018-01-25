import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Link } from "react-router-dom";
import API from "../../utils/API";

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const fieldStyles = {
  fullWidth: true
};

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      imageURL: '',
      quizQuestion1: false,
      quizQuestion2: false,
      quizQuestion3: false,
      errors: '',
    }
  };

  notusingthisfunction = () => {

  }

  getNewProfileInformation = email=> {
   API.getProfileByEmail(email).then(res => {
     this.props.history.replace({pathname: '/profile/' + res._id})

   })
 }

 postNewProfile = () =>{
   API.saveProfile(this.state).then(res => {
     this.getNewProfileInformation(this.state.email)
 })
}

  handleSubmit = (e) => {
     e.preventDefault();
    //deleting the errors key from the state object
    delete this.state.errors;
    //creating Profile in DB
    this.postNewProfile();

    console.log(JSON.stringify(this.state, null, 2));
  }

  handleInputChange= event => {
  // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.id;
    this.setState({
      [name]: value
    });  

  }

  updateCheck1= (event, checked) => {
    this.setState({quizQuestion1: checked})
  }

  updateCheck2 = (event, checked) => {
    this.setState({quizQuestion2: checked})
  }

  updateCheck3 =(event, checked) => {
    this.setState({
      quizQuestion3: checked
    })
  }

  validate = (name, value) => {
    var formIsValid = true;
    if(name==="firstName"&&!value){
      formIsValid = false;
      var newErrors = Object.assign(this.state.errors, {firstName: "First Name is required"});
      this.setState({ errors: newErrors });
    }
    if(name==="lastName"&&!value){
      formIsValid = false;
      var newErrors = Object.assign(this.state.errors, {lastName: "Last Name is required"});
      this.setState({ errors: newErrors });
    }
    if(name==="imageURL"&&!value){
      formIsValid = false;
      var newErrors = Object.assign(this.state.errors, {imageURL: "Link to profile picture is required"});
      this.setState({ errors: newErrors });
    }
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

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <TextField 
        hintText = "First Name"
        fullWidth = {styles.fullWidth}
        value={this.state.firstName}
        onChange={this.handleInputChange}
        id = "firstName"
        errorText = {this.state.errors.firstName}
      />
      <TextField 
         hintText = "Last Name"
         fullWidth = {styles.fullWidth}
         value={this.state.lastName}
         onChange={this.handleInputChange}
         id = "lastName"
         errorText = {this.state.errors.lastName}
       />
       <TextField 
          hintText = "Email"
          fullWidth = {styles.fullWidth}
          value={this.state.email}
          onChange={this.handleInputChange}
          id = "email"
          errorText = {this.state.errors.email}
        />
        <TextField 
           hintText = "Password"
           fullWidth = {styles.fullWidth}
           value={this.state.password}
           type="password"
           onChange={this.handleInputChange}
           id = "password"
           errorText = {this.state.errors.password}
         />
        <TextField 
           hintText = "Link to your profile image"
           fullWidth = {fieldStyles.fullWidth}
           value={this.state.imageURL}
           onChange={this.handleInputChange}
           id = "imageURL"
           errorText = {this.state.errors.imageURL}
         />
         <Checkbox
           label="You are a cat person."
           checked={this.state.quizQuestion1}
           onCheck={this.updateCheck1.bind(this)}
           style={styles.checkbox}
         />
         <Checkbox
           label="You love to try all of the newest restaurants."
           checked={this.state.quizQuestion2}
           onCheck={this.updateCheck2.bind(this)}
           style={styles.checkbox}
         />
         <Checkbox
           label="You are a millennial."
           checked={this.state.quizQuestion3}
           onCheck={this.updateCheck3.bind(this)}
           style={styles.checkbox}
         />
         <RaisedButton type="submit" label="Create Profile" primary={true} />

    </form>
  );


  }


}

export default ProfileForm;