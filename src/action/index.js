import {ACTION_LOGON, ACTION_LOGOUT, ACTION_SIGNIN, ACTION_GETDATA} from '../constant/ActionType.js';

const userData = {id:27,name:"YuXiangyong"};
const homeData = {
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
		  github: "https://github.com/FelixAnna",
          introduces: ['男，27周岁，已婚，现居深圳福田。',
				  '本科学历 - 2011年毕业于华东师范大学软件工程专业。',
				  '擅长.Net(C#)开发，同时精通Java8技术，熟悉React前端开发，同时还有丰富DB开发经验。',
				  '目前可接受工作类型为：Java开发 或 .Net(C#)开发。',
				  '目前可接受最低薪资为：Java在20k左右 或 .Net(C#)在25K以上。',
				  '办事效率高，责任心极强；为人低调，诚实守信。',
				  '能吃苦耐劳，能快速学习新知识。',
				  '熟悉常用设计模式，网站架构原理。',
				  '熟悉Linux系统和Windows 系统。'],
		skills: [
			{name: ".Net(C#)", level: "A+"},
			{name: "Java8", level: "A"},
			{name: "Sql Server", level: "A"},
			{name: "Netezza", level: "A"},
			{name: "React/Redux/NodeJS", level: "B+"},
			{name: "Css", level: "B+"},
			{name: "Git", level: "B+"},
			{name: "MongoDB", level: "B"},
			{name: "MySql", level: "B"},
			{name: "Bash", level: "B"},
			{name: "Linux", level: "B"},
			{name: "SVN/Perforce", level: "B"},
			{name: "C++", level: "C"},
			{name: "OpenGL", level: "C"},
			{name: "Oracle/DB2/SQLite", level: "C"},
			{name: "Lucene", level: "C"},
		]
};

const recceiveData = (response) => {
	if(!response.success)
	{
		console.log(response);
	}
	
	return {
		type: ACTION_GETDATA,
		data: response.data
	};
}
const recceiveLogonData = (response) => {
	if(!response.success)
	{
		console.log(response);
	}
	
	return {
		type: ACTION_LOGON,
		data: response.data
	};
}
const recceiveSiginData = (response) => {
	if(!response.success)
	{
		console.log(response);
	}
	
	return {
		type: ACTION_SIGNIN,
		data: response.data
	};
}
const recceiveLogoutData = (response) => {
	if(!response.success)
	{
		console.log(response);
	}
	
	return {
		type: ACTION_LOGOUT,
		data: response.data
	};
}

export const getData = () => {
	const response = {
		success: true,
		data: homeData
	};
	
	return recceiveData(response);
}
export const logon = () => {
	const response = {
		success: true,
		data: userData
	};

	return recceiveLogonData(response);
}

export const logout = () => {
	const response = {
		success: true,
		data: {}
	};
	
	return recceiveLogoutData(response);
}

export const sigin = () => {
	const response = {
		success: true,
		data: userData
	};
	
	return recceiveSiginData(response);
}

export const downloadResume = (type) => {
	alert(`Downloading ${type} resume ...`);
}