import React, { Component } from "react";
import AppBarExampleIcon from './AppBar';
import Form from "./Form";

class HomepageContainer extends Component {
  state = {
    result: {},
    search: ""
  };

render() {
	return (

		<div>

			<AppBarExampleIcon/>
			
	        <p>
	          Login {this.state.firstName} {this.state.lastName}
	        </p>
	        <form className="form">
	          <input
	            value={this.state.firstName}
	            name="firstName"
	            onChange={this.handleInputChange}
	            type="text"
	            placeholder="First Name"
	          />
	          <input
	            value={this.state.lastName}
	            name="lastName"
	            onChange={this.handleInputChange}
	            type="text"
	            placeholder="Last Name"
	          />
	          <input
	            value={this.state.password}
	            name="password"
	            onChange={this.handleInputChange}
	            type="password"
	            placeholder="Password"
	          />
	          <button onClick={this.handleFormSubmit}>Submit</button>
	          <button>Create New User</button>
	        </form>
      	</div>
	);
}
}


export default HomepageContainer;