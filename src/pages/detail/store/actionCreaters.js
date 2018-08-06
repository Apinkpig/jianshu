import axios from 'axios'
// import * as actionTypes from './actionTypes'
// import { formJS } from 'immutable'

export const getArticleData = () => {
  return (dispatch) => {
    axios.get('api/detailData.json').then((res) => {
      const result = res.data.data
    })
  }
}
