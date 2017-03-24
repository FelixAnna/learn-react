import React, { Component } from 'react';
import HomeLogonComponent from './HomeLogon.js';
import HomeLogoutComponent from './HomeLogout.js';
import { connect } from 'react-redux'
import { downloadResume, sigin, logon, logout } from '../action/index.js'
import './Home.css';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let homePart = null;
        const props = this.props;
        if(this.props.user) {
            homePart = <HomeLogonComponent {...props}/>
        }
        else
        {
            homePart = <HomeLogoutComponent {...props}/>
        }
        return homePart;
    }
}

const mapStateToProps = (state) => {
	if(state && state.data && state.data.data){
	  return {
			user : state.user,
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
    },
	onLogoutClick: () => {
      dispatch(logout());
    },
	onSiginClick: () => {
      dispatch(sigin());
    }
  }
}
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
export default HomeContainer;
