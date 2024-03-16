export const ADD_TODO = 'ADD_TODO';

export const addTodo = (title, description) => ({
  type: ADD_TODO,
  payload: { title, description },
});
