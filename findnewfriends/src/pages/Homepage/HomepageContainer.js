import React, { Component } from "react";
import AppBarNavigation from '../../components/AppBar';
import LoginForm from "../../components/Form";
import Form from "../../components/Form";
import IntroCard from "../../components/IntroCard"
import MainFooter from "../../components/Footer"

class HomepageContainer extends Component {
  state = {
    result: {},
    search: ""
  };

render() {
	return (
		<div className = "mainWrapper">		
			<div className = "mainHeader">
				<AppBarNavigation/>
			</div>
			<div className = "smallWrapper">
					<LoginForm/>
				<div className = "introCard">
					<IntroCard/>
				</div>
			</div>
			<div className = "MainFooter">
				<MainFooter/>
			</div>			
	    </div>
	);
}
}


export default HomepageContainer;