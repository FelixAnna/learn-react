import React, { Component } from 'react';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MainContainer from './MainTabs.js'
import CopyrightComponent from './Footer.js';
import './App.css';
// muiTheme={getMuiTheme(darkBaseTheme)}
class App extends Component {
  render() {
    return (
		<MuiThemeProvider>
		  <div className="App">
			<MainContainer />
			<CopyrightComponent />
		  </div>
		</MuiThemeProvider>
    );
  }
}

export default App;
