import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import * as actionCreators from './store/actionCreators'
import './style.scss'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    const { focuse, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <header className='header'>
        <Link className='logo' to='/'>
          <img src='static/logo.png' alt='logo' />
        </Link>
        <nav className='header_nav'>
          <ul className='left'>
            <li className='header_nav_home'><a href='/'>首页</a></li>
            <li className='header_nav_download'><a href='/'>下载App</a></li>
            <div className='search'>
              <CSSTransition
                in={focuse}
                timeout={500}
                classNames='slide'
              >
                <input
                  type='text'
                  placeholder='搜索'
                  className={focuse ? 'focuse' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur.bind(this)}
                />
              </CSSTransition>
              <i className={focuse ? 'iconfont search' : 'iconfont'}>&#xe60a;</i>
              {this.getListArea()}
            </div>

          </ul>
          <ul className='right'>
            <li >
              <Link to='/'>
                <i className='iconfont' style={{fontWeight: 700}}>&#xe904;</i>
              </Link>
            </li>
            <li><Link to='/'>登录</Link></li>
            <button className='registered'>注册</button>
            <div className='write'>
              <i className='iconfont'>&#xe608;</i>
              <button className='write_article'>写文章</button>
            </div>
          </ul>
        </nav>
      </header>
    )
  }

  getListArea () {
    const { focuse, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangeOne } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <li key={newList[i]}><a href='/'>{newList[i]}</a></li>
        )
      }
    }
    if (focuse || mouseIn) {
      return (
        <div
          className='search_info'
          onMouseEnter={handleMouseEnter.bind(this)}
          onMouseLeave={handleMouseLeave.bind(this)}
        >
          <div className='search_info_title'>
            热门搜索
            <div className='search_info_switch' onClick={() => handleChangeOne(page, totalPage)}>
              <i className='iconfont change_one_icon'>&#xe613;</i>
              换一换
            </div>
          </div>
          <ul className='search_info_tag'>
            {pageList}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
}
const mapStateToProps = (state) => {
  return {
    focuse: state.getIn(['header', 'focuse']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 获得焦点时
    handleInputFocus (list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList()) 
      }
      dispatch(actionCreators.searchFocus())
    },
    // 失去焦点时
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    // 鼠标移入search_info时
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    // 鼠标移出search_info时
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    // 点击换一换
    handleChangeOne (page, totalPage, rotateIcon) {
      if (page < totalPage) {
        dispatch(actionCreators.changeOne(page + 1))
      } else {
        dispatch(actionCreators.changeOne(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
