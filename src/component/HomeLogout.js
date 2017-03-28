import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class HomeLogoutComponent extends Component {
    constructor(props) {
        super(props);
		this.state = {
		    openLogon: true,
			userName: '',
			password: ''
		};
		this.changeUserName = this.changeUserName.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.handleLogonTouchTap = this.handleLogonTouchTap.bind(this)
    }
	changeUserName(e){
        this.setState({userName: e.target.value});
    }
	changePassword(e){
        this.setState({password: e.target.value});
    }
	
    handleJoinTouchTap = () => {
        alert("Welcome join!");
    };

    handleLogonTouchTap = () => {
		this.props.onLogonClick();
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
							alt="注册账号"
							src="images/signin.jpg"
							height="100"
						/>
					</div>
					<div>注册账号</div>
				</div>
				<div>
					<div>
						<div>用户名：</div>
						<div><input type="text" onChange={this.changeUserName} value={this.state.userName}/></div>
					</div>
					<div>
						<div>密码：</div>
						<div><input type="password" onChange={this.changePassword} value={this.state.password}/></div>
					</div>
					<div>
						<RaisedButton
							onTouchTap={this.handleLogonTouchTap}
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