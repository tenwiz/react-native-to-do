const store = {
  users: {
    [uid]: {
      info: {
        name: '',
      }
    }
  },
  todos: {
    [todoId]: {
      todoId: '',
      text: '',
      color: '',
      timestamp: 0,
      uid: '',
    }
  },
  usersTodos: {
    [uid]: {
      todoIds: [],
    }
  },
}
