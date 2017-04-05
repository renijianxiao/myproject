import React from 'react'
import Carousel from '../../component_dev/carousel/src/'
import List from '../../component_dev/list/src/'
import fetchData from '../util/util.fetch.js'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperList1: [<div/>],
      swiperList2:[{}]
    }
  }
  render() {
    return (
      <div className="m-board">
        <div className="swiper">
          <Carousel>
            {this.state.swiperList1}
          </Carousel>
        </div>
        <div>
            <List
               
                dataSource={this.state.swiperList2}
                renderItem={(item,i)=>{
                  if (item.cover) {
                    return (
                      <p>
                        <List.LazyImage height="300" src={item.cover.origin} />
                      </p>
                    );
                  }
                }}
             
            />
        </div>
        
         
      </div>
    )
  }

  componentDidMount() {
    let url1 = '/api/billboard/home?__t=1490838700798'
    fetchData(url1, function (res) {
      console.log("轮播"+res.data.billboards);
      let Lis = res.data.billboards.map(val=>{
        return (<li className="item"><img className="img" src={val.imageUrl} /></li>)
      })
      this.setState({
        swiperList1: Lis
      })
    }.bind(this))

    
    let url2 = 'api/film/now-playing?__t=1490839380418&page=1&count=5'
    fetchData(url2, function (res) {
          console.log(res.data);
          let Lis2 = res.data.films.map(val=>{       
            return val
          })
        //  console.log(Lis2);
          this.setState({
            swiperList2: Lis2
          })
        }.bind(this))  

    
  }
}
export default Board
