import React from 'react'
import List from '../../component_dev/list/src/'
import fetchData from '../util/util.fetch.js'

class Search extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      DDD:[<div/>],
	      diqu:["asd"],
	      cinemas:["asaa"],
	      d1:[<div/>],
	      d2:[<div/>],
	      d3:[],
	      d4:[],
	      d5:[],
	      d6:[],
	      d7:[],
	      d8:[],
	      d9:[],
	      d10:[],
	      d11:[],
	      d12:[],
	      d13:[],
	      d14:[],
	      d15:[],
	      main:[],
	      num:""
	    };
	    this.load = this.load.bind(this)
  	}

  	load(e){
  		var list = this.refs.div.getElementsByClassName("one")
  		var k ;
  		var flag=0;var that=this;	
  		for(var i = 0;i < list.length; i++){
  			if(list[i] == e.target){
  				k = i;  				
  				that.setState({num:k});
  				flag=1;
  			console.log(this.refs.div.getElementsByClassName("one")[k]);	  				
	  		}
  		}		
		console.log(this.state.num);

 		let ccc=this.state.main[1][k].map(val =>{
    		return (   
    			<div>    
	    			<li className="item">{val.name}</li>
					<li className="hd">
						<li className="item">{val.labels[0] ? val.labels[0].name:''}</li>
						<li className="item">{val.labels[1] ? val.labels[1].name:''}</li>
					</li>					
					<li className="dz">{val.address}</li>
				</div>
    		)
    	})
        console.log("hhhh"+this.state.num);
		this.setState({d7:ccc}); 


    	let ddd=this.state.diqu.map((val, index) =>{        		
    		return (
    			<div>
        			<li className="one">{val}</li>
        			<li className={that.state.num== index ? 'show' : 'hidden'}>{that.state.d7}</li>
    			</div>
    		)				
    	})
    	console.log("fdfsfsdf"+that.state.num);
  		this.setState({DDD:ddd}); 
  	}
	render() {
	    return (
	 	    <div className="main" ref="div" onClick={this.load}>
		      	<List scrollX={false} scrollY={true}  bounce={false}
				    dataSource={this.state.DDD}
				    renderItem={(item,i)=>{
				        return (
				            <p>
				                {item}
				            </p>
				        );
				    }}
				/>
	      	</div>
	    )
	}
	componentDidMount(){
		let url1 = '/api/cinema?__t=1390939232293'
		fetchData(url1, function (res) {
			console.log(res);
			var diqu = []
			var main=[]
			var d1 = [],d2 = [],d3 = [],d4 = [],d5 = [],d6 = [],d7 = [],d8 = [],
			d9 = [],d10 = [],d11 = [],d12 = [],d13 = [],d14 = [],d15=[]
			var list = res.data.cinemas
			for(var i = 0;i<list.length;i++){
				
                for(var k = i+1;k<list.length;k++){ 
                	if(list[i].district.name == list[k].district.name &&diqu.indexOf(list[i].district.name)<0){ 
                		diqu.push(list[i].district.name)
                	}
                }             
            } 
           // console.log(diqu)
            main.push(diqu);
          	//  console.log(main[0]);
            this.setState({diqu:diqu});

            for(var i = 0;i <list.length; i++){
            	if(list[i].district.name == diqu[0]){
            		d1.push(list[i])
            	}else if(list[i].district.name == diqu[1]){
            		d2.push(list[i])
            	}else if(list[i].district.name == diqu[2]){
            		d3.push(list[i])
            	}else if(list[i].district.name == diqu[3]){
            		d4.push(list[i])
            	}else if(list[i].district.name == diqu[4]){
            		d5.push(list[i])
            	}else if(list[i].district.name == diqu[5]){
            		d6.push(list[i])
            	}else if(list[i].district.name == diqu[6]){
            		d7.push(list[i])
            	}else if(list[i].district.name == diqu[7]){
            		d8.push(list[i])
            	}else if(list[i].district.name == diqu[8]){
            		d9.push(list[i])
            	}else if(list[i].district.name == diqu[9]){
            		d10.push(list[i])
            	}else if(list[i].district.name == diqu[10]){
            		d11.push(list[i])
            	}else if(list[i].district.name == diqu[11]){
            		d12.push(list[i])
            	}else if(list[i].district.name == diqu[12]){
            		d13.push(list[i])
            	}else if(list[i].district.name == diqu[13]){
            		d14.push(list[i])
            	}else if(list[i].district.name == diqu[14]){
            		d15.push(list[i])
            	}      
            }

  			main.push([d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14]);
  			console.log(main[0]);
  			this.setState({main:main}) 

			var that=this;			
        	let ddd=diqu.map((val, index) =>{        		
        		return (
        			<div>
	        			<li className="one">{val}</li>
	        			<li className={that.state.num== index ? 'show' : 'hidden'}>{that.state.d7}</li>
        			</div>
        			)				
        	})
        	console.log("fdfsfsdf"+that.state.num);
       	this.setState({DDD:ddd});      
			
		}.bind(this))		
	}
}

export default Search
