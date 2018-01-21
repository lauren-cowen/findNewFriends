import React, { Component } from "react";
import AppBarNavigation from '../../components/AppBar';
import ProfileForm from "../../components/NewUser";

class NewUserContainer extends Component {
  state = {
    result: {},
    search: ""
  };

render() {
	return (
		<div>		
			<div>
				<AppBarNavigation/>
			</div>
			<div className = "wrapper">
				<ProfileForm/>
			</div>			
		</div>
	);
}
}


export default NewUserContainer;