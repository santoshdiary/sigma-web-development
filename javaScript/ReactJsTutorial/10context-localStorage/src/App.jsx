import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './todoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }
  const updateTodo=(id, todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>
    (prevTodo.id===id ? todo: prevTodo)))
  }

  const deleteTodo= (id)=>{
    setTodos((prev)=>prev.filter((prevTdo)=>prevTdo.id!=id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id===id ? {...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo))
  }


  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos')) //key
    if(todos && todos.length>0){
      setTodos(todos)
    }
      // can use setTodos also here, but it unecessarly get item from local storage while setting item. that's why to use another useEffect is optimized way.
  },[])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos)) // key, value
  },[todos])

  return ( 

    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}

            <TodoForm/>

          </div>

          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                <div key={todo.id} className='w-full'>

                <TodoItem todo={todo}/>
                </div>
              ))


            }
          </div>
        </div>
      </div>
    </ TodoProvider>
  )
}

export default App
