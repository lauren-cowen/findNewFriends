import React, { Component } from "react";
import AppBarExampleIcon from './AppBar';

import NewUserForm from "./Form";

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


			<NewUserForm/>
			
      	</div>

      		</div>

	);
}
}


export default HomepageContainer;