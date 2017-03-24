import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavigationExampleSimple from './MenuBar.js'
import CopyrightComponent from './Footer.js';
import HomeContainer from './component/Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
		<MuiThemeProvider>
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
