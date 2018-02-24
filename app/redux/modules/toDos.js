import uuidv4 from 'uuid/v4'

const CREATE_USER = 'CREATE_USER'
const STORE_TODO = 'STORE_TODO'
const CREATE_TODO = 'CREATE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const CLEAR_TODO = 'CLEAR_TODO'

const createUser = username => (
  {
    type: CREATE_USER,
    username
  }
)

const storeTodo = (username, userToDos) => (
  {
    type: STORE_TODO,
    username,
    userToDos
  }
)

const createTodo = ({ task, color, deadline, todoId }) => (
  {
    type: CREATE_TODO,
    task,
    color,
    deadline,
    todoId
  }
)

const removeTodo = (username, todoId) => (
  {
    type: REMOVE_TODO,
    username,
    todoId
  }
)

const clearTodo = username => (
  {
    type: CLEAR_TODO,
    username
  }
)

export const fetchOrCreateUser = username => dispatch => {
  // fetchUser(username)
  //   .then(userToDos => {
  //     userToDos.length === 0
  //       ? dispatch(createUser(username))
  //       : dispatch(storeTodo(username, userToDos))
  //   })
  //   .catch(err => {
  //     console.warn('Error in fetchUser', err)
  //   })
}

// todoInfo = { task, color, deadline }
export const createAndSaveTodo = (todoInfo) => dispatch => {
  const todoId = uuidv4()
  // saveTodo({ ...todoInfo, todoId })
  //   .then(() => dispatch(createTodo({ ...todoInfo, todoId })))
  //   .catch(err => {
  //     console.warn('Error in saveTodo', err)
  //   })
}

export const removeAndDeleteTodo = (username, todoId) => dispatch => {
  // deleteTodo(username, todoId)
  //   .then(() => dispatch(removeTodo(username, todoId)))
  //   .catch(err => {
  //     console.warn('Error in deleteTodo', err)
  //   })
}

export const logoutAndFlushTodo = username => dispatch => {
  // flushTodo(username)
  //   .then(() => dispatch(clearTodo(username)))
  //   .catch(err => {
  //     console.warn('Error in clearTodo', err)
  //   })
}

// const store = {
//   toDos: {
//     [username]: {
//       username: '',
//       userToDos: [
//         {
//           task: '',
//           color: '',
//           deadline: 0,
//           todoId: 0
//         }
//       ],
//     }
//   },
// }

const toDos = (state = {}, action) => {
  const { type, username, userToDos,
    task, color, deadline, todoId } = action

  switch (type) {
    case CREATE_USER :
    case CLEAR_TODO :
      return {
        ...state,
        [username]: {
          username,
          userToDos: []
        }
      }
    case STORE_TODO :
      return {
        ...state,
        [username]: {
          username,
          userToDos
        }
      }
    case CREATE_TODO :
      return {
        ...state,
        [username]: {
          ...state.username,
          userToDos: [
            ...state.username.userToDos,
            { task, color, deadline, todoId }
          ]
        }
      }
    case REMOVE_TODO :
      return {
        ...state,
        [username]: {
          ...state.username,
          userToDos: userToDos.filter(toDo => toDo.todoId !== todoId)
        }
      }
    default :
      return state
  }
}

export default toDos
