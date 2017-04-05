import React from 'react'
import List from '../../component_dev/list/src/'
import fetchData from '../util/util.fetch.js'

class Search extends React.Component {
	again(){
		console.log(1);
	}
	constructor(props) {
	    super(props)
	    this.state = {
	      swiperList1: [<div/>]
	    };
  	}
	render() {
	    return (
	    	
	      	<div className="m-search">	
		      	<div onClick={this.again}>		 				 				
				    {this.state.swiperList1}	
				</div>			
	      	</div>
	    )
	}
	componentDidMount(){
		let url1 = '/api/cinema?__t=1490949262294'
		fetchData(url1, function (res) {
			console.log(res);
			console.log(res.data.cinemas[0].district.name);
			console.log(res.data.cinemas[0].labels[0].name);

			let Lis1 = res.data.cinemas.map(val=>{     
	            return(<div className="item">
			            <li>{val.district.name}</li>	         
		        </div>)
			})
			this.setState({
			    swiperList1: Lis1           
			})
		}.bind(this))		
	}
}

export default Search
