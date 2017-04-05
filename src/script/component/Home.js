var React = require("react");

//var Banner = require("./Banner.jsx");
//var HomeContent = React.createClass({
	getInitialState:function(){
		return null
	},
	render:function(){
		return (
			<div>
				<Banner />
				<HomeProList reqUrl="http://datainfo.duapp.com/shopdata/getGoods.php"/>
			</div>
		);
	}
});

module.exports = HomeContent;


