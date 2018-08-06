import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

// 改变List
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

// 搜索聚焦
export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})
// 搜索失去焦点
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})
// 鼠标移入search_info时触发
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})
// 鼠标移出search_info时触发
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})
// 点击换一换事件
export const changeOne = (page) => ({
  type: actionTypes.CHANGE_ONE,
  page
})

/**
 * 主题 请求热门搜索内容
 * 注：在使用redux-thunk的时候，可以返回一个函数
 */
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}
