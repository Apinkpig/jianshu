import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '2018中国大学毕业生薪酬排行TOP200，读书无用论都是骗人的',
  desc: []
})

export default (state = defaultState, action) => {
  return state
}
