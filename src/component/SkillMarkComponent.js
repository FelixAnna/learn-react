import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  chip: {
    margin: 4,
  }
};
class SkillMarkComponent extends Component {
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
	buildSkillMark(){
		const actions = [
              <FlatButton
                  label="好的"
                  primary={true}
                  onTouchTap={this.handleClose}
              />
          ];
		let avatarForcolor = "";
		let avatarBackcolor = "";
		let levelText = "";
		switch(this.props.level)
		{
			case 'A+':
			case 'A':
				avatarForcolor = "#1565C0";
				avatarBackcolor = "#283593";
				levelText = "精通并精读过一本以上资料书或查阅过大量资料。";
				break;
			case 'B+':
			case 'B':
				avatarForcolor = "#2196F3";
				avatarBackcolor = "#3F51B5";
				levelText = "熟练使用，现有技能已经能胜任大部分工作。";
				break;
			case 'C+':
			case 'C':
				avatarForcolor = "#90CAF9";
				avatarBackcolor = "#9FA8DA";
				levelText = "曾经能熟练使用，但近期没有使用。";
				break;
			case 'D+':
			case 'D':
				avatarForcolor = "#E3F2FD";
				avatarBackcolor = "#E8EAF6";
				levelText = "曾经能熟练使用，但近期没有使用，且已经遗忘。";
				break;
			default:
				avatarForcolor = "#E8F5E9";
				avatarBackcolor = "#E0F2F1";
				levelText = "未定义。";
				break;
		}
		return <Chip onTouchTap={this.handleTouchTap}
          backgroundColor={avatarForcolor}
		  key={this.props.index}
          style={styles.chip}
        >
		  <Avatar size={32} color={avatarForcolor} backgroundColor={avatarBackcolor} title="A:目前精通，B:目前熟练，C:曾经熟练，D:曾用已忘">
							  {this.props.level}
						  </Avatar>
						{this.props.name}
					<Dialog
                          title="技能描述"
                          actions={actions}
                          modal={false}
                          open={this.state.openComponent}
                          onRequestClose={this.handleClose}
                      >
                          <div>技能：<b className='focusColor'>{this.props.name}</b></div>
						  <div>描述：<b className='focusColor'>{levelText}</b></div>
                      </Dialog>
        </Chip>
	}
		
	render() {
		return this.buildSkillMark();
	  }
}

export default SkillMarkComponent;