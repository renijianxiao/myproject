import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Now from './now'
import Come from './come'

class Theatre extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div className="m-theatre">
          <div>
              <ul>
                <li className="active">
                  <Link to="/theatre/now" activeClassName="active">           
                    <b>正在热映</b>
                  </Link>
                </li>
                <li>
                  <Link to="/theatre/come" activeClassName="active">
                    <b>即将上映</b>
                  </Link>
                </li>
              </ul>
          </div>
          <div>
             {this.props.children}
          </div>
        
      </div>
    )
  }
}

export default Theatre
