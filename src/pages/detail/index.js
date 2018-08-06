import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreaters } from './store'
import './style.scss'

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    this.props.handleGetData()
  }
  render () {
    const { title } = this.props
    return (
      <div className='detail'>
        <div className='detail-header'>{title}</div>
        <div className='detail-content'>
          <img src='//upload-images.jianshu.io/upload_images/1239680-b55a9eed8424db33.jpeg' alt='' />
          {/* {
            actilce.map((item, index) => {

            })
          } */}
          <p className='detail-desc' />
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title'])
})
const mapDispatch = (dispatch) => ({
  handleGetData () {
    dispatch(actionCreaters.getArticleData())
  }
})
export default connect(mapState, mapDispatch)(Detail)
