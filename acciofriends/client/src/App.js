import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomepageContainer from './pages/Homepage/HomepageContainer';
import NewUserContainer from './pages/NewUserPage/NewUserContainer';

const App = () => (
	<Router>
		<MuiThemeProvider>
  			<div>
    			<Switch>
    				<Route exact path="/" component={HomepageContainer} />
    				<Route exact path="/Newuser" component={NewUserContainer} />
    			</Switch>
    		</div>
  		</MuiThemeProvider>
  </Router>
);

export default App;