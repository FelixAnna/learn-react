import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class HomeLogoutComponent extends Component {
    constructor(props) {
        super(props);
		this.state = {
		    openLogon: true
		};
    }

    handleJoinTouchTap = () => {
        alert("Welcome join!");
    };

    handleLoginTouchTap = () => {
        alert("Welcome back!");
    };

    render() {
		const actions = [
		  
		];
        return <Dialog
          title="登陆/注册"
          actions={actions}
          modal={true}
          open={this.state.openLogon}
          onRequestClose={this.handleClose}
        >
			<div className="home_default_div">
				<div>
					<div>
						<img
							onTouchTap={this.props.onSiginClick}
							title="注册账号"
							src="images/signin.jpg"
							height="100"
						/>
					</div>
					<div>注册账号</div>
				</div>
				<div>
					<div>
						<div>用户名：</div>
						<div><input/></div>
					</div>
					<div>
						<div>密码：</div>
						<div><input/></div>
					</div>
					<div>
						<RaisedButton
							onTouchTap={this.props.onLogonClick}
							primary={true}
							label="登陆"
						/>
					</div>
				</div>
			</div>
		</Dialog>
    }
}

export default HomeLogoutComponent;