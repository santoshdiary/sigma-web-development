import { useState } from 'react'
import './index.css'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [editingTodo, setEditingTodo] = useState(null)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[70%] flex flex-col items-stretch">
        <AddTodo editingTodo={editingTodo} onUpdateComplete={() => setEditingTodo(null)} />
        <Todos onEdit={(todo) => setEditingTodo(todo)} />
      </div>
    </div>
  )
}

export default App
