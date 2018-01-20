import React, { Component } from "react";
import AppBarExampleIcon from './AppBar';
import NewUserForm from "./Form";

class HomepageContainer extends Component {
  state = {
    result: {},
    search: ""
  };

render() {
	return (

		<div>

			<AppBarExampleIcon/>

			<NewUserForm/>
			
      	</div>
	);
}
}


export default HomepageContainer;