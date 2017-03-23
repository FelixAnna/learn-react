import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavigationExampleSimple from './MenuBar.js'
import CopyrightComponent from './Footer.js';
import HomeComponent from './Home/Home.js';
import './App.css';

class App extends Component {
  render() {
      const homeProps = {
          user: null,
              //{id:27,name:"YuXiangyong"},
          realName: "余祥永",
          photos: [
              "images/jiahang.jpg",
              "images/jiahang.jpg",
              "images/xuexin.png",
              "images/jiahang.jpg"
          ],
          wechat:"images/ewm_yuxiangyong.jpg",
          email: "yuecnu@hotmail.com",
          phone: 17603056679,
          description: `限深圳个人精通技能为主（或接受转型的java，20k左右，不接受外派）：
          <br />* 精通.Net(c#)开发，SQL Server 和 IBM Netezza DW 开发。
				  <br />* 熟练使用Web前端技术和常用关系数据库（如SQL Server，Oracle，MySql 等）。
				  <br />* 了解Java8（在学），C++，Bash，React，NodeJS，OpenGL等技术。
				  <br />* 熟练使用Git，SVN, Perforce, TFS, IBM Udeploy，Jenkins等工具。
				  <br />* 熟悉常用设计模式。
				  <br />* 熟悉网站架构原理。
				  <br />* 熟悉Linux，Windows 系统：包括常用命令，权限设定，文件系统，任务计划，进程管理，服务等。`
      };
    return (
	<MuiThemeProvider>
      <div className="App">
		<BottomNavigationExampleSimple />
        <HomeComponent {...homeProps} />
		<CopyrightComponent />
      </div>
	</MuiThemeProvider>
	
    );
  }
}

export default App;
