import { combineReducers } from 'redux'
import toDos from './modules/toDos'
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  toDos,
  form
})

export default rootReducer
