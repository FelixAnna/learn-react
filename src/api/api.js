import axios from 'axios';

axios.default.baseURL = 'https://some-domain.com/api/'

export const logon =(para) => {
	
	// `data` is the response that was provided by the server
	data: {},

	// `status` is the HTTP status code from the server response
	status: 200,

	// `statusText` is the HTTP status message from the server response
	statusText: 'OK',

	// `headers` the headers that the server responded with
	headers: {},

	// `config` is the config that was provided to `axios` for the request
	config: {}
  
	axios.post('/user/logon', {
		params: {
		  userId: para.userId,
		  password: para.password
		}
	  })
	  .then(function (response) {
		if(response.status != 200)
		{
			console.log(response);
		}
		
		const response = {
			success: true,
			data: response.data
		};

		return recceiveLogonData(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
}


export const logout =(para) => {
  
	axios.post('/user/logon', {
		params: {
		  jwt: para.jwt,
		  password: para.password
		}
	  })
	  .then(function (response) {
		if(response.status != 200)
		{
			console.log(response);
		}
		
		const response = {
			success: true,
			data: response.data
		};

		return recceiveLogonData(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
}