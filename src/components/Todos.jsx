import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice';
const Todos = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  // console.log(todos)


  return (
    <div className='flex justify-center items-center'>
      <ul className="text-white flex flex-col space-y-2 justify-between items-center m-10 w-96">
        {todos.map((todo) => (
          <li key={todo.id} className=" flex justify-between items-center border-2 p-2 w-full  bg-gray-800 rounded-md text-white">
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))} type='submit' className='text-white bg-red-500 rounded-lg hover:bg-red-600 px-10 py-3 m-3'>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos