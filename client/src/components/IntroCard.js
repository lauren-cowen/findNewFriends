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
      Accio Friends is committed helping you make magical friendships, that can survive soul sucking creatures, like dementors.  With your new friends, you can accomplish any tri-wizard task, and can even break into a Gringotts bank.  We are devoted to helping you make those connections, outside of a train and school. To begin finding friends who can lead you into trouble, with a Marauders Map of course, please create a profile or login.
    </CardText>
    <CardActions>
      <FlatButton label="Get Started" containerElement={<Link to="/Newuser" />}linkButton={true} />
    </CardActions>
  </Card>
);

export default IntoCard;
