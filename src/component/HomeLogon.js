import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Download from 'material-ui/svg-icons/file/file-download';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class HomeLogonComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    openWechat: false,
            openDownload:false,
            openPhone:false
		};
	  }

	handleWechatTouchTap = (event) => {
		// This prevents ghost click.
		event.preventDefault();

		this.setState({
            openWechat: true,
		    anchorEl: event.currentTarget,
		});
	  };

	handleWechatClose = () => {
		this.setState({
		  openWechat: false,
		});
	  };

    handleDownloadTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            openDownload: true,
            anchorEl: event.currentTarget,
        });
    };

    handleDownloadClick = (type) => {
        this.setState({
            openDownload: false
        });
    }

    handleCloseDownload = (value) => {
        this.setState({
            openDownload: false,
        });
    };

    handlePhoneTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            openPhone: true,
            anchorEl: event.currentTarget,
        });
    };

    handlePhoneClose = () => {
        this.setState({openPhone: false});
    };

    buildTop() {
          return <div className="info_top">
			  <div>
				  <h2>{this.props.data.realName}</h2>
			  </div>
		  </div>
	  }
	buildCenter(){
          const actions = [
              <FlatButton
                  label="好的"
                  primary={true}
                  onTouchTap={this.handlePhoneClose}
              />
          ];

          const emialText = `mailTo: ${this.props.data.email}`;
		  return <div className="info_center">
			  <div>
                  {
                      this.props.data.photos.map((photo, index)=>{
                          return <img key={index} className="img_photo" src={photo} />
                      })
                  }
			  </div>
			  <div className="info_center_button_list">
				  <div className="info_center_button">
					  <img
						  onTouchTap={this.handleWechatTouchTap}
						  title="扫码加我"
						  src="images/weixin.jpg"
					  />
					  <Popover
						  open={this.state.openWechat}
						  anchorEl={this.state.anchorEl}
						  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
						  targetOrigin={{horizontal: 'left', vertical: 'top'}}
						  onRequestClose={this.handleWechatClose}
					  >
						  <img src={this.props.data.wechat}/>
					  </Popover>
				  </div>
				  <div className="info_center_button">
					  <a href={emialText} title="发送邮件">
					  <img
						  label="邮箱" src="images/email.png"
					  /></a>
				  </div>
				  <div className="info_center_button">
					  <img onTouchTap={this.handlePhoneTouchTap}
						  label="电话"
						  src="images/phone.jpg"
					  />
                      <Dialog
                          title="联系方式"
                          actions={actions}
                          modal={false}
                          open={this.state.openPhone}
                          onRequestClose={this.handlePhoneClose}
                      >
                          电话：<b>{this.props.data.phone}</b>, 工作时间请尽量勿扰，优先邮件，微信沟通，谢谢！
                      </Dialog>
				  </div>
			  </div>
		  </div>
	  }
    buildBottom = ()=>{
		  return <div className="info_bottom">
			  <div className="info_bottom_title"><h3>简介</h3></div>
			  <div className="info_bottom_details" dangerouslySetInnerHTML={{__html: this.props.data.description}}>
			  </div>
			  <div className="info_bottom_more">
                  <RaisedButton
                      onTouchTap={this.handleDownloadTouchTap}
                      primary={true}
                      label="下载完整简历"
                  />
                  <Popover
                      open={this.state.openDownload}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                      onRequestClose={this.handleCloseDownload}
                  >
                      <MenuItem onTouchTap={()=>{this.handleDownloadClick("word")}} primaryText="下载Word版本" leftIcon={<Download />} />
                      <MenuItem onTouchTap={()=>{this.handleDownloadClick("pdf")}} primaryText="下载Pdf版本" leftIcon={<Download />}/>
                  </Popover>
              </div>
		  </div>
	  };
	render() {
		return (
			<div className = "info_all">
                {this.buildTop()}
				{this.buildCenter()}
				{this.buildBottom()}
			</div>
		);
	  }
}

export default HomeLogonComponent;
