import React, { Component } from "react";
import AppBarExampleIcon from './AppBar';

import NewUserForm from "./Form";


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

			<div className = "wrapper">
			<NewUserForm/>
			</div>			
      	</div>

      		</div>

	);
}
}


export default HomepageContainer;