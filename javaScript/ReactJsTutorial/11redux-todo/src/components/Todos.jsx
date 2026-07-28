import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

function Todos({ onEdit }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-dashed border-gray-600 bg-white/5 p-8 text-center text-gray-400">
        <p className="text-lg font-medium">📋 No todos yet</p>
        <p className="mt-2 text-sm">Add your first task to get started.</p>
      </div>
    );
  }
 
  return (
    <ul className="mt-6 space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/10"
        >
          {/* Todo Text */}
          <div className="flex-1 pr-4">
            <p
              className={`text-base font-medium break-words ${
                todo.isCompleted
                  ? "text-gray-500 line-through"
                  : "text-white"
              }`}
            >
              {todo.text}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Edit */}
            <button
              onClick={() => onEdit?.(todo)}
              disabled={todo.isCompleted}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 transition-all duration-200 hover:scale-110 hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              title="Edit"
            >
              ✏️
            </button>

            {/* Delete */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20 text-red-500 transition-all duration-200 hover:scale-110 hover:bg-red-9z00 hover:text-white"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;