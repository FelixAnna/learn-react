import React, { Component } from 'react';

class HomeLogonComponent extends Component {
	constructor(props) {
		super(props);
	  }
	  
	render() {
		return (
			<div className = "info_all">
                <div className="home_default_div">欢迎您, {this.props.data.realName}!</div>
				<div>click here to <a href="#" onTouchTap={this.props.onLogoutClick}>logout</a>.</div>
			</div>
		);
	  }
}

export default HomeLogonComponent;
