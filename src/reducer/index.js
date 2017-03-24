import { combineReducers } from 'redux'
import userReducer from './user'
import dataReducer from './data'

const homeReducer = combineReducers({
  user: userReducer,
  data: dataReducer
})

export default homeReducer;