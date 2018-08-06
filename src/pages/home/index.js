import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreaters } from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import './style.scss'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { showScroll } = this.props
    return (
      <div className='home'>
        <div className='home-left'>
          <img
            src='//upload.jianshu.io/admin_banners/web_images/4360/e43e26feaaa603f1498b6ea48066d2d21e293237.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
            alt=''
            className='banner-img'
          />
          <Topic />
          <List />
        </div>
        <div className='home-right'>
          <Recommend />
          <Writer />
        </div>
        {
          showScroll ? <div className='back-top' onClick={this.handleScrollTop.bind(this)}>回到顶部</div> : null
        }

      </div>
    )
  }
  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeShowScroll)
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeShowScroll)
  }
  // 点击回到顶部
  handleScrollTop () {
    window.scrollTo(0, 0)
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData () {
    dispatch(actionCreaters.getHomeData())
  },
  changeShowScroll (e) {
    const distanceTop = document.documentElement.scrollTop
    if (distanceTop > 150) {
      dispatch(actionCreaters.toggleTopShow(true))
    } else {
      dispatch(actionCreaters.toggleTopShow(false))
    }
    console.log()
  }
})
export default connect(mapState, mapDispatch)(Home)
