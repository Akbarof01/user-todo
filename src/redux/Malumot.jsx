import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className='use'>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h3>User:{todo.title}</h3>
          <h3>DATA:{todo.description}</h3>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
