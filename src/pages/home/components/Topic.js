import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Topic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { list } = this.props
    return (
      <div className='topic'>
        {
          list.map((item) => {
            return (
              <Link
                to="/" className='topic-list'
                key={item.get('id')}
              >
                <img 
                  className='topic-list-pic'
                  src={item.get('imgUrl')} alt=""/>
                {item.get('title')}
              </Link>
            )
          })
        }
        
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}
export default connect(mapState, null)(Topic)