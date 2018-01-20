import React from 'react';
import NavDrawer from './NavDrawer';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Accio Friends"
    onTitleClick={NavDrawer.handleToggle}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default AppBarExampleIcon;
