import React, { Component } from 'react';
import AboutLogonComponent from './AboutLogon.js';
import HomeLogoutComponent from './HomeLogout.js';
import './Home.css';

class AboutComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let homePart = null;
        const props = this.props;
        if(this.props.user) {
            homePart = <AboutLogonComponent {...props}/>
        }
        else
        {
            homePart = <HomeLogoutComponent {...props}/>
        }
        return homePart;
    }
}

export default AboutComponent;

