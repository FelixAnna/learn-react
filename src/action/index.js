import {ACTION_LOGON, ACTION_LOGOUT, ACTION_SIGNIN, ACTION_GETDATA} from '../constant/ActionType.js';

const homeData = {
          user: {id:27,name:"YuXiangyong"},
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
		data: {id:27,name:"YuXiangyong"}
	};

	return getData();//recceiveLogonData(response);
	//dispatch(getData);
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
		data: {id:27,name:"YuXiangyong"}
	};
	
	return recceiveSiginData(response);
}

export const downloadResume = (type) => {
	alert(`Downloading ${type} resume ...`);
}