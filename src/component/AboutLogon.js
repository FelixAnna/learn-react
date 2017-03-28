import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Download from 'material-ui/svg-icons/file/file-download';
import ContactComponent from './ContactComponent.js';
import SkillMarkComponent from './SkillMarkComponent.js';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

class AboutLogonComponent extends Component {
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
		this.props.onDownloadResumeClick(type);
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

	
	
    buildIntroduce = () => {
		const skills =  this.props.data.skills.map((skill, index)=> {
							const skillMarkProps = {
								name: skill.name,
								level: skill.level, 
							index};
							return <SkillMarkComponent  key={index} {...skillMarkProps} />;
						});
		return <div className="info_introduce">
				  <div className="info_introduce_title">
					  <h2>{this.props.data.realName}</h2>
				  </div>
				  <div className="info_introduce_subtitle">
					  <h3>简介</h3>
				  </div>
				  <div className="info_introduce_details" >
				  <ul>
				  {this.props.data.introduces.map((introduce, index) => {
					  return <li key={index}>{introduce}</li>;
				  })}
				  </ul>
				  </div>
				  <div style={styles.wrapper} className="info_introduce_skills">
				  {skills}
				  </div>
			  </div>;
	}
	buildDownloadLink() {
		  return <div className="info_download">
					  <div className="info_download_more">
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
					</div>;
	}
	buildContactIcons(){
		const wechatProps = {
			type: "popover",
			title: "扫码加我",
			src: "images/weixin.png",
			text: this.props.data.wechat
		};
		const emailProps = {
			type: "email",
			title: "邮件沟通",
			src: "images/email.png",
			text: this.props.data.email
		};
		const phoneProps = {
			type: "dialog",
			title: "手机号码",
			src: "images/phone.png",
			text: this.props.data.phone
		};
		const githubProps = {
			type: "link",
			title: "github",
			src: "images/github.png",
			text: this.props.data.github
		};
		return <div className="info_contact_button_list">
			<ContactComponent {...wechatProps}/>
			<ContactComponent {...emailProps}/>
			<ContactComponent {...phoneProps}/>
			<ContactComponent {...githubProps}/>
		</div>
	}
	
	buildPhotos(){
		  return <div className="info_photos">
		   <div className="info_introduce_subtitle">
					  <h3>照片资料</h3>
				  </div>
			  <div>
                  {
                      this.props.data.photos.map((photo, index)=>{
                          return <img key={index} className="info_photos_img" src={photo} alt=""/>
                      })
                  }
			  </div>
		  </div>
	  };
	render() {
		return (
			<div className="info_all">
                {this.buildIntroduce()}
				{this.buildPhotos()}
				{this.buildContactIcons()}
				{this.buildDownloadLink()}
			</div>
		);
	  }
}

export default AboutLogonComponent;
