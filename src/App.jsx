import React from 'react'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'
const App = () => {
  return (
    <div className='bg-black h-screen'>
      <AddTodos />
      <Todos />
    </div>
  )
}

export default App