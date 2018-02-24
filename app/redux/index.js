import { combineReducers } from 'redux'
import toDos from './modules/toDos'

const rootReducer = combineReducers({
  toDos,
})

export default rootReducer
