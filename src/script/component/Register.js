import React from 'react';
class Register extends React.Component {
	constructor(props){
		super(props);
		this.register = this.register.bind(this);		
	}
	register(){
		var username = this.refs.username.value;
		var pwd = this.refs.pwd.value;
		if(username == "" ||pwd == "" ){
			alert("请完善您的信息")
		}else{			
			localStorage.setItem("username",username);
			localStorage.setItem("password",pwd);
			window.location.href = "/#/my/Login"
		}
	}
	render(){		
		return (
			<div id="lg">
				<div><input type="text" ref="username"/></div><br/>
				<div><input type="password" ref="pwd"/></div><br/>
				<input id="login" type="button" onClick={this.register} value="注册"/><br/>
			</div>			
		)
	}
}
export default Register;