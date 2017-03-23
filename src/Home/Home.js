import React, { Component } from 'react';
import HomeLoginComponent from './HomeLogin.js';
import HomeNoLoginComponent from './HomeNoLogin.js';
import './Home.css';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let homePart = null;
        const props = this.props;
        if(this.props.user) {
            homePart = <HomeLoginComponent {...props}/>
        }
        else
        {
            homePart = <HomeNoLoginComponent {...props}/>
        }
        return homePart;
    }
}

export default HomeComponent;
