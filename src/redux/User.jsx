import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

const TodoInput = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(title, description));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='form-control mt-5'
        type="text"
        placeholder="Username"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input className='form-control'
        type="date"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
       <button className="mt-3 btn btn-outline-primary fs-4 w-100" type="submit">Save<svg className='install' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048">
                <path fill="#0091ff" d="M1664 1664h128v384H128v-384h128v256h1408zm-147-531l-557 557l-557-557l90-90l403 402V128h128v1317l403-402z" />
            </svg></button>
    </form>
  );
};

export default TodoInput;
