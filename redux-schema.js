const store = {
  users: {
    [uid]: {
      name: '',
      todoIds: [],
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
}
