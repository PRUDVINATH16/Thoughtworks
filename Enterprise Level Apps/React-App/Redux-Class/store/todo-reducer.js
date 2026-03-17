const init_state = { todos: [] };

const reducer = (state = init_state, action) => {
  switch(action.type) {
    case 'ADD': return {
      todos: [...state.todos, action.payload]
    }
    case 'DELETETODO': return {
      todos: state.todos.filter( (todo, index) => index != action.payload)
    }
    default:
      return state;
  }
}

export default reducer;