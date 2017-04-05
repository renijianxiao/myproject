import React from 'react'
import List from '../../component_dev/list/src/'
import fetchData from '../util/util.fetch.js'

class Come extends React.Component {
	// constructor(props) {
 //    super(props)
 //    this.state = {
 //      swiperList1: [<div/>]
     
 //    }
  // }
  render() {
    return (
      <div className="m-come">
       come
      </div>
    )
  }

  // componentDidMount() {
	 //    let url = '/api/film/now-playing'
	 //    fetchData(url, function (res) {
	 //      console.log("轮播"+res.data.films.length);
	 //      let Lis = res.data.films.map(val=>{
	 //        return val
	 //      })
	 //      this.setState({
	 //        swiperList1: Lis
	 //      })
	 //    }.bind(this))
  //  }
}

export default Come