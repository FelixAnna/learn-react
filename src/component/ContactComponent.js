import React, { Component } from 'react';
import Popover from 'material-ui/Popover';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ContactComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    openComponent: false
		};
	  }
	
	handleTouchTap = (event) => {
		// This prevents ghost click.
		event.preventDefault();

		this.setState({
            openComponent: true,
		    anchorEl: event.currentTarget,
		});
	  };
	
	handleClose = () => {
		this.setState({
		  openComponent: false,
		});
	  };

	buildComponentPopver() {
		return <div className="info_contact_button">
					  <img onTouchTap={this.handleTouchTap}
						  title={this.props.title}
						  src={this.props.src}
					  />
                      <Popover
						  open={this.state.openComponent}
						  anchorEl={this.state.anchorEl}
						  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
						  targetOrigin={{horizontal: 'left', vertical: 'top'}}
						  onRequestClose={this.handleClose}
					  >
						  <img src={this.props.text}/>
					  </Popover>
				  </div>
	}
	
	buildComponentDialog() {
		const actions = [
              <FlatButton
                  label="好的"
                  primary={true}
                  onTouchTap={this.handleClose}
              />
          ];
		return <div className="info_contact_button">
					  <img onTouchTap={this.handleTouchTap}
						  title={this.props.title}
						  src={this.props.src}
					  />
                      <Dialog
                          title={this.props.title}
                          actions={actions}
                          modal={false}
                          open={this.state.openComponent}
                          onRequestClose={this.handleClose}
                      >
                          <div><b className='focusColor'>{this.props.text}</b></div>
						  <br />
						  <div className = 'remarkText'>* 工作时间请<span className='focusColor'>优先使用微信或邮件沟通</span>，谢谢理解！</div>
                      </Dialog>
				  </div>
	}
	buildComponentEmail()
	{
		const emialText = `mailTo: ${this.props.text}`;
		return <div className="info_contact_button">
					  <a href={emialText} title={this.props.title}>
					  <img
						  title={this.props.title} src={this.props.src}
					  />
					  </a>
				  </div>
	}
	
	buildComponentLink()
	{
		return <div className="info_contact_button">
					  <a href={this.props.text} title={this.props.title}>
					  <img
						  title={this.props.title} src={this.props.src}
					  />
					  </a>
				  </div>
	}
	
	buildComponet()
	{
		switch(this.props.type.toLowerCase())
		{
			case "dialog":
				return this.buildComponentDialog();
				break;
			case "popover":
				return this.buildComponentPopver();
				break;
			case "link":
				return this.buildComponentLink();
				break;
			case "email":
				return this.buildComponentEmail();
				break;
			default:
				return;
		}
	}
	
	render() {
		return this.buildComponet();
	  }
}

export default ContactComponent;
