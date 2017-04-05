import React from 'react';
class Login extends React.Component {
	constructor(props){
		super(props);
		this.login = this.login.bind(this);		
	}
	login(){
		var username = this.refs.username.value;
		var pwd = this.refs.pwd.value;
		if(username == "" ||pwd == "" ){
			alert("请完善您的信息")
		}else{
			if(username==localStorage.getItem("username")&&pwd==localStorage.getItem("password")){
				sessionStorage.setItem("username",username)
				sessionStorage.setItem("password",pwd)
				alert("登录成功");
				window.location.reload();
			}else{
				window.location.href = "/#/my/Register"
			}
		}
	}
	render(){		
		return (
			<div id="lg">
				<div><input type="text" ref="username"/></div><br/>
				<div><input type="password" ref="pwd"/></div><br/>
				<input id="login" type="button" value="登录" onClick={this.login}/><br/>
				<a href="#/my/register">注册</a>
			</div>			
		)
	}
}
export default Login;