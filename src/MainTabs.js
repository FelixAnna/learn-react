import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HomeComponent from './component/Home.js'; 
import AboutComponent from './component/About.js';
import { connect } from 'react-redux'
import { downloadResume, sigin, logon, logout, getData } from './action/index.js'
import './MainTabs.css';

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const productIcon = <FontIcon className="material-icons">pages</FontIcon>;
const product2Icon = <FontIcon className="material-icons">pages</FontIcon>;
const aboutIcon = <FontIcon className="material-icons">contacts</FontIcon>;

injectTapEventPlugin();
/**
 * A simple example of `Tabs`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class MainTabsComponent extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const props = this.props;
		let about = null;
		//if (this.props.tabIndex ===3 ) {
			about = <AboutComponent {...props}/>
		//}
		return (
			  <Paper zDepth={1} >
				<Tabs initialSelectedIndex={this.props.tabIndex?this.props.tabIndex:0} >
				  <Tab label="主页" icon={homeIcon}>
					<HomeComponent {...props}/>
				  </Tab>
				  
				  <Tab label="产品"	icon={productIcon}>
					产品
				  </Tab>
				  <Tab label="产品2" icon={product2Icon}>
					产品2
				  </Tab>
				  <Tab label="关于" icon={aboutIcon}>
					  {about}
				  </Tab>
				</Tabs>
			  </Paper>
		);
  }
}


const mapStateToProps = (state) => {
	if(state && (state.data || state.user)){
	  return {
			user : state.user.user,
			data : state.data.data
		  }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDownloadResumeClick: (type) => {
      dispatch(downloadResume(type));
    },
	onLogonClick: () => {
      dispatch(logon());
	  dispatch(getData());
    },
	onLogoutClick: () => {
      dispatch(logout());
    },
	onSiginClick: () => {
      dispatch(sigin());
    }
  }
}
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTabsComponent);
export default MainContainer;