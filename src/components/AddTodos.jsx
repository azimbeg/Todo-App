import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
const AddTodos = () => {

  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(inputValue))
    setInputValue("")


  }
  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex justify-between items-center m-10 w-96'>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Enter Text' className='px-5 py-3 bg-gray-800 rounded-md text-white' />
        <button type='submit' className='text-white bg-blue-500 rounded-lg hover:bg-blue-600 px-10 py-3 m-3'>Add</button>
      </form>
    </div>
  )
}

export default AddTodos