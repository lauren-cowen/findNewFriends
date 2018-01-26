import React, { Component } from "react";
import AppBarNavigation from '../../components/AppBar';
import ProfileForm from "../../components/NewUser";
import API from "../../utils/API";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MainFooter from '../../components/Footer';
import ArrowKeysReact from 'arrow-keys-react';
import {withRouter} from "react-router-dom";

class UserProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			catPerson: '',
			likesRestaurants: '',
			imageURL: '',
			millennial: '',
			matches: [],
			currentFriend: 0,
			friends: ''
		}
	

		ArrowKeysReact.config({
			left: () => {
				this.setState({currentFriend: this.state.currentFriend++});

			},
			right: () => {
				this.setState({friends: this.state.currentFriend, currentFriend: this.state.currentFriend++});
			}
		})
}

componentWillMount() {
	API.getProfile(this.props.match.params._id).then(res => {
		this.setState({
			'firstName': res.firstName,
			'lastName': res.lastName,
			'catPerson': res.quizQuestion1,
			'likesRestaurants': res.quizQuestion2,
			'imageURL': res.imageURL,
			'millennial': res.quizQuestion3
		})
	})
	//add functionality to get all of the profiles that match with this user and store them to this.state.matches[]

}

	render(){
		return(
			<div>
				<div className = "mainHeader">
					<AppBarNavigation/>
				</div>
				<div>
					<Card>

					    <CardMedia
					      overlay={<CardTitle title ={this.state.matches[this.state.currentFriend].firstName} />}
					    >
					      <img src={this.state.matches[this.state.currentFriend].imageURL} alt="Possible new friend" />
					    </CardMedia>
					    <CardActions>
					      <FlatButton label="Friend" />
					      <FlatButton label="No Thanks" />
					    </CardActions>
					  </Card>

				</div>
				<div className = "MainFooter">
					<MainFooter/>
				</div>



			</div>
			)
	}
}

export default UserProfilePage;