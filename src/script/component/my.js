import React from 'react';
import { Router, Route, Link, IndexRoute,Redirect, IndexLink,browserHistory } from 'react-router';
var $=require("jquery");
import Register from './register';

class User extends React.Component {
	constructor(props){
		super(props);
		this.cancel = this.cancel.bind(this);
		this.state = {
			isLogin: "false",
			username:"",
			proList:[]
		}
	}
	cancel(){
		sessionStorage.removeItem("username");
		sessionStorage.removeItem("password");
		//window.location.href = "/#/my/login"
		window.location.reload();
	}
	componentWillMount(){
		 this.props.router.setRouteLeaveHook(
	        this.props.route,
	        this.routerWillLeave
	      )
		 var that = this;
		// $.getJSON("http://localhost:8000",function(data){
		// 	console.log(data)
		// 	var arr = [];
		// 	data.map(function(item,index){
		// 		//arr.push(<div key={index}>{item.title}</div>)---8000
		// 		arr.push(<div key={index}>{item.title}</div>)
		// 	})
		// 	that.setState({
		// 		proList:arr
		// 	})
		// })	
		// 
		// 	
		
		if(sessionStorage.getItem("username")){
			this.setState({
				isLogin:"true",
				username:localStorage.getItem("username")
			})
		}
	}
	routerWillLeave() {
//		return false;
		return true;
//    return '您真的要离开这个页面么?'
  }
	render(){		
		return (
			<div id="mm">				
				<div style={{display:this.state.isLogin == "false" ? 'block': 'none'}} >
					{this.props.children}
					
				</div>
				<div id="info" style={{display:this.state.isLogin == "true" ? 'block': 'none' }}>
					用户名:{this.state.username}
					<button onClick={this.cancel}>注销</button>
				</div>
			</div>
			
		)
	}
}
export default User

		