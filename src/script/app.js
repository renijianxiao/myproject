require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Index from './component/index'
import Board from './component/board'
import Search from './component/search'
import Card from './component/card'
import Theatre from './component/theatre'
import My from './component/my'
import Now from './component/now'
import Come from './component/come'
import Register from './component/register'
import Login from './component/login'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRedirect to="/board"></IndexRedirect>
        <Route path="board" title="电影" component={Board}></Route>
        
        <Route path="theatre" title="全部影院" component={Theatre}>
            <IndexRedirect to="/theatre/now"/>
            <Route path="/theatre/now" component={Now}/>
            <Route path="/theatre/come" component={Come}/>
        </Route>

        <Route path="card" title="查询/绑定/激活卖座卡" component={Card}></Route>
        <Route path="search" title="搜索" component={Search}></Route>
        <Route path="my" title="登录" component={My}>  
            <IndexRedirect to="/my/login"/>  
            <Route path="/my/register" component={Register}/>
            <Route path="/my/login" component={Login}/>
        </Route>      
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
