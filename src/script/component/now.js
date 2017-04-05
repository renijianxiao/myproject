import React from 'react'
import data from './search.json' 
class Now extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      swiperList1: [<div/>]
     
    }
  }
  render() {
    return (
      
		<div className="m-now">
	      {this.state.swiperList1}
	    </div>
    )
  }

   componentDidMount() {
		console.log(data.data.cinemas[0]);
			 console.log(data.data.cinemas[0].district.name);
			 console.log(data.data.cinemas[0].labels[0].name);
			let Lis1 = data.data.cinemas.map(val=>{     
	            return(<div className="item">
			            <li>{val.district.name}</li>		  
			           <div>
							<li>
								<span>{val.name}
								</span>	<i></i>	<i></i><span> > </span>							
									
							</li>
							<li>
												
							</li>
							<li>
								<span>{val.address}</span>
							</li>
			           </div>				         
		        </div>)
			})
			this.setState({
			    swiperList1: Lis1           
			})
				

   }
}

export default Now