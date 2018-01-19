import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomepageContainer from './components/HomepageContainer';

const App = () => (
  <MuiThemeProvider>
    <HomepageContainer />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;