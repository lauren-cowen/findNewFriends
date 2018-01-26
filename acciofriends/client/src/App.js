import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomepageContainer from './pages/Homepage/HomepageContainer';
import NewUserContainer from './pages/NewUserPage/NewUserContainer';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';

const App = () => (
	<Router>
		<MuiThemeProvider>
  			<div>
    			<Switch>
    				<Route exact path="/" component={HomepageContainer} />
    				<Route exact path="/Newuser" component={NewUserContainer} />
            <Route exact path="/profile/:id" component={HomepageContainer} />
            <Route exact path = "/profile/:email" component = {UserProfilePage}/>
     			</Switch>
    		</div>
  		</MuiThemeProvider>
  </Router>
);

export default App;