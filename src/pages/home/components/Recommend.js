import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { list } = this.props
    return (
      <div className='home-recommend'>
        {
          list.map((item) => {
            return (
              <Link to="/" className='recommend-item' key={item.get('id')}>
                <img 
                  src={item.get('imgUrl')} 
                  alt=""
                  className='bgpic'
                />
              </Link>
            )
          })
        }
        {/* 下载二维码 */}
        <a className='download'>
          <img 
            src="static/image/download-qr-code.png" 
            alt=""
            className='qr-code'
          />
          <div className='info'>
            <div className="title">下载简书App</div>
            <div className="desc">随时随地发现和创作内容</div>
          </div>
          <img 
            src="static/image/download-qr-code.png" 
            alt=""
            className='fadeIn'
          />
        </a>
        
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}
export default connect(mapState,null)(Recommend)