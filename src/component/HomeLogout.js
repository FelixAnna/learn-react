import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class HomeLogoutComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleJoinTouchTap = () => {
        alert("Welcome join!");
    };

    handleLoginTouchTap = () => {
        alert("Welcome back!");
    };

    render() {
        return <div>
            <div>
                <div>
                    <img
                        onTouchTap={this.props.onSiginClick}
                        title="注册账号"
                        src="images/signin.jpg"
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
        </div>;
    }
}

export default HomeLogoutComponent;