import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import './MenuBar.css';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const productIcon = <FontIcon className="material-icons">pages</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const contactIcon = <FontIcon className="material-icons">contacts</FontIcon>;

injectTapEventPlugin();
/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => {
	this.setState({selectedIndex: index})
  };

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onTouchTap={() => this.select(0)}
          />
		  <BottomNavigationItem
            label="Products"
            icon={productIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="About Us"
            icon={favoritesIcon}
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Contact"
            icon={contactIcon}
            onTouchTap={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;