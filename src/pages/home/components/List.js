import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {actionCreaters} from '../store'

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div className='home-list'>
        {
          list.map((item, index) => {
            return (
              <div className='content' key={index}>
                <img 
                  src={item.get('imgUrl')} 
                  alt=""
                  className={item.get('imgUrl') ? 'pic' : null}
                />
                <article className='home-article'>
                  <Link to='detail' className='title'>{item.get('title')}</Link>
                  <p className='desc'>{item.get('desc')}</p>
                </article>
              </div>
            )
          })
        }
        <div onClick={() => getMoreList(page)} className='load-more'>加载更多</div>
      </div>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreaters.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List)