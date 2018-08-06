import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'

// 路由组件
import Home from './pages/home'
import Detail from './pages/detail'
import Scroll from './pages/scroll'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/detail' exact component={Detail} />
            <Route path='/scroll' exact component={Scroll} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
