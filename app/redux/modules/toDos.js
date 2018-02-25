import uuidv4 from 'uuid/v4'
import {resetStack} from "../../util/navigation";
import {updateCurrentUser} from "./currentUser";

const CREATE_USER = 'CREATE_USER'
const CREATE_TODO = 'CREATE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const CLEAR_TODO = 'CLEAR_TODO'
const CLEAR_ALL = 'CLEAR_ALL'

const createUser = username => ({
  type: CREATE_USER,
  username
})

const createTodo = ({ username, task, color, deadline }) =>  ({
  type: CREATE_TODO,
  username,
  task,
  color,
  deadline,
  todoId: uuidv4(),
  complete: false
})

export const completeTodo = (username, todoId) => ({
  type: COMPLETE_TODO,
  username,
  todoId
})

export const removeTodo = (username, todoId) => ({
  type: REMOVE_TODO,
  username,
  todoId
})

const clearTodo = username => ({
  type: CLEAR_TODO,
  username
})

export const clearAll = () => ({
  type: CLEAR_ALL
})

export const userLogin = (username, navigation) => (dispatch, getState) => {
  if (!Object.keys(getState().toDos).includes(username)) {
    dispatch(createUser(username))
  }
  dispatch(updateCurrentUser(username))
  resetStack('MyTab', navigation)
}

export const createTodoAndToFeed = (todo, navigation) => (dispatch, getState) => {
  const username = getState().currentUser.username
  dispatch(createTodo({ ...todo, username }))
  resetStack('MyTab', navigation)
}

export const clearTodoAndToLogin = (username, navigation) => dispatch => {
  dispatch(clearTodo(username))
  resetStack('Login', navigation)
}

const toDos = (state = {}, action) => {
  const { type, username, task, color, deadline, todoId, complete } = action

  switch (type) {
    case CREATE_USER :
      return {
        ...state,
        [username]: {
          username,
          userToDos: []
        }
      }
    case CREATE_TODO :
      return {
        ...state,
        [username]: {
          ...state[username],
          userToDos: [
            ...state[username].userToDos,
            { task, color, deadline, todoId, complete }
          ]
        }
      }
    case COMPLETE_TODO :
      return {
        ...state,
        [username]: {
          ...state[username],
          userToDos: state[username].userToDos.map(todo => {
            return todo.todoId === todoId
              ? {
                ...todo,
                complete: true
              }
              : todo
          })
        }
      }
    case REMOVE_TODO :
      return {
        ...state,
        [username]: {
          ...state[username],
          userToDos: state[username].userToDos.filter(todo => todo.todoId !== todoId)
        }
      }
    case CLEAR_TODO :
      return {
        ...state,
        [username]: {
          ...state[username],
          userToDos: []
        }
      }
    case CLEAR_ALL:
      return {}
    default :
      return state
  }
}

export default toDos
