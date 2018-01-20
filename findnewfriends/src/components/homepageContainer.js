import React, { Component } from "react";
import AppBarExampleIcon from './AppBar';
import SubmitButton from './SubmitButton';
import Form from "./Form";

class HomepageContainer extends Component {
  state = {
    result: {},
    search: ""
  };

render() {
	return (
		<div>		
		<div>

			<AppBarExampleIcon/>
		</div>

	        <div className = "wrapper">

	        	<form className="form">
	        		<p>
	          			Login {this.state.firstName} {this.state.lastName}
	        		</p>
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
	          		<div>
	          			<SubmitButton />
	          		</div>
	        	</form>

	        	<div className = "quote">
	        	<h1> Quote about making new friends and information about our website </h1>
	        	</div>
      		</div>
      		</div>
	);
}
}


export default HomepageContainer;