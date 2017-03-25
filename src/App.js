import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BottomNavigationExampleSimple from './MenuBar.js'
import CopyrightComponent from './Footer.js';
import HomeContainer from './component/Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		  <div className="App">
			<BottomNavigationExampleSimple />
			<HomeContainer />
			<CopyrightComponent />
		  </div>
		</MuiThemeProvider>
    );
  }
}

export default App;
