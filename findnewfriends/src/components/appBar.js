import React, {Component} from 'react';
import NavDrawer from './NavDrawer';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class AppBarNavigation extends Component {
	constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

	render() {
		return (
			<div>
				<AppBar
					title="Accio Friends"
					onLeftIconButtonClick={this.handleToggle}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
			      <div>
			        <Drawer
			          docked={false}
			          width={200}
			          open={this.state.open}
			          onRequestChange={(open) => this.setState({open})}
			        >
			          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
			          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
			        </Drawer>
			      </div>
		      </div>	
		);
	}
};


