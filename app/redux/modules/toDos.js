import uuidv4 from 'uuid/v4'

const CREATE_USER = 'CREATE_USER'
const STORE_TODO = 'STORE_TODO'
const CREATE_TODO = 'CREATE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const CLEAR_TODO = 'CLEAR_TODO'

export const createUser = ({ username }) => dispatch => (
  dispatch(
    {
      type: CREATE_USER,
      username
    }
  )
)

const storeTodo = (username, userToDos) => (
  {
    type: STORE_TODO,
    username,
    userToDos
  }
)

export const createTodo = ({ task, color, deadline }) => dispatch =>  (
  dispatch(
    {
      type: CREATE_TODO,
      task,
      color,
      deadline,
      todoId: uuidv4(),
      complete: false
    }
  )
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

// const store = { // FIX ME
//   toDos: {
//     [username]: {
//       username: '',
//       userToDos: [
//         {
//           task: '',
//           color: '',
//           deadline: 0,
//           complete: false,
//           todoId: 0
//         }
//       ],
//     }
//   },
// }

const dummyData = { // FIX ME
  username: 'Martian',
  userToDos: [
    {
      task: 'Build a React Native app',
      color: 'blue',
      deadline: 'tomorrow',
      complete: false,
      todoId: 1,
    },
    {
      task: 'Write tests',
      color: 'blue',
      deadline: 'tomorrow',
      complete: false,
      todoId: 2,
    },
    {
      task: 'Design app',
      color: 'blue',
      deadline: 'yesterday',
      complete: true,
      todoId: 3,
    },
  ]
}

const toDos = (state = dummyData, action) => {
  const { type, username, userToDos,
    task, color, deadline, todoId, complete } = action

  switch (type) {
    case CREATE_USER :
    case CLEAR_TODO :
      return {
        ...state,
        username,
        userToDos: []
      }
    case STORE_TODO :
      return {
        ...state,
        username,
        userToDos
      }
    case CREATE_TODO :
      return {
        ...state,
        userToDos: [
          ...state.userToDos,
          { task, color, deadline, todoId, complete }
        ]
      }
    case REMOVE_TODO :
      return {
        ...state,
        userToDos: userToDos.filter(toDo => toDo.todoId !== todoId)
      }
    default :
      return state
  }
}

export default toDos
