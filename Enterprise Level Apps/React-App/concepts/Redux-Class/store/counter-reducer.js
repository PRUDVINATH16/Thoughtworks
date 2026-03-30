const init_state = { count: 0 };

const reducer = (state = init_state, action) => {
  switch( action.type ) {
    case 'INC': return {
      count: state.count + 1
    }
    case 'DEC': return {
      count: state.count - 1
    }
    default:
      return state;
  }
}

export default reducer;