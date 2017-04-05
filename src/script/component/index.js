import React from 'react'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Index extends React.Component {
  constructor (props) {
    super(props)
  }
  jump(){
    window.location.href = "/#/my/login"
  }

  render() {
    return (
      <div className="m-index">
        <header>
          <div className="yo-header yo-header-a">
            <h2 className="title">{this.props.value}</h2>
            <span onClick={this.jump} className="regret yo-ico">&#xe610;</span>
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
        <footer>
         <ul>
            <li className="active">
              <Link to="/board" activeClassName="active">
                <i className="yo-ico">&#xe637;</i>
                <b>电影</b>
              </Link>
            </li>
            <li>
              <Link to="/theatre" activeClassName="active">
                <i className="yo-ico">&#xe603;</i>
                <b>影院</b>
              </Link>
            </li>
            <li>
            <Link to="/card" activeClassName="active">
              <i className="yo-ico">&#xe603;</i>
              <b>卖座卡</b>
            </Link>
            </li>
            <li>
            <Link to="/search" activeClassName="active">
              <i className="yo-ico">&#xe601;</i>
              <b>发现</b>
            </Link>
            </li>
            <li>
            <Link to="/my" activeClassName="active">
              <i className="yo-ico">&#x3575;</i>
              <b>我的</b>
            </Link>
            </li>
          </ul>
        </footer>
      </div>
    )
  }

  componentDidMount() {
    // console.log(this.refs.board.props.title);
  }

  componentDidUpdate() {
    let title = this.props.routes[1].title
    this.props.onChange({
      type: 'SETTITLE',
      title: title
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
