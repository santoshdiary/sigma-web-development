import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todoSlice'

function AddTodo({ editingTodo, onUpdateComplete }) {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    setInput(editingTodo ? editingTodo.text : '')
  }, [editingTodo])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedInput = input.trim()

    if (!trimmedInput) return

    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, text: trimmedInput }))
      onUpdateComplete?.()
    } else {
      dispatch(addTodo(trimmedInput))
    }

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12 text-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  )
}

export default AddTodo