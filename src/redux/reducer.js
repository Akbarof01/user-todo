const initialState = {
    todos: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), ...action.payload }],
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  