import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link } from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';

let createNewUser = <Link to={"/Newuser"}/>;

const IntoCard = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Find Your New Best Friend Today"/>}
    >
      <img src="assets/mainFriendsPicture.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Accio Friends" subtitle="Making Magical Friendships Worldwide" />
    <CardText>
      Accio Friends is committed to connect people with similar interests. Simply swipe through potential friends that have similar interests. When you find your new magical friend, swipe left and they will be added to your profile. You can then choose to send them a message.
    </CardText>
    <CardActions>
      <FlatButton label="Get Started" containerElement={<Link to="/Newuser" />}linkButton={true} />
    </CardActions>
  </Card>
);

export default IntoCard;
