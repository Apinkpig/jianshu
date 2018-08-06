import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// 改变首页数据
const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})
const addMoreList = (list, nexPage) => ({
  type: actionTypes.ADD_MORE_LIST,
  list: fromJS(list),
  nexPage
})
export const getHomeData = () => {
  return (dispatch) => {
    axios.get('api/homeData.json').then((res) => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`api/homeMoreList.json?page=${page}`).then((res) => {
      const list = res.data.data
      const nexPage = page + 1
      dispatch(addMoreList(list, nexPage))
    })
  }
}

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
})
