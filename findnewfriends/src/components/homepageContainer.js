import React, { Component } from "react";
import AppBarExampleIcon from './AppBar';

import LoginForm from "./Form";

import Form from "./Form";

import ProfileForm from "./NewUser";



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

			<div className = "wrapper">
			<NewUserForm/>
			</div>			
			<LoginForm/>

			<ProfileForm/>
			
      	</div>

      		</div>

	);
}
}


export default HomepageContainer;