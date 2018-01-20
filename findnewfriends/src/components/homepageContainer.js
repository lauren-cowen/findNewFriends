import React, { Component } from "react";
import AppBarExampleIcon from './AppBar';

import LoginForm from "./Form";

import SubmitButton from './SubmitButton';

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

			<LoginForm/>

			<ProfileForm/>
			
      	</div>

      		</div>

	);
}
}


export default HomepageContainer;