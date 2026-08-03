import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

function Todos({ onEdit }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-blue-200/50 bg-white/70 backdrop-blur-md p-10 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <span className="text-3xl">📝</span>
        </div>

        <h3 className="text-xl font-semibold text-slate-700">
          No Todos Yet
        </h3>

        <p className="mt-2 text-slate-500">
          Add your first task and start organizing your day.
        </p>
      </div>
    );
  }

  return (
    <ul className="mt-8 space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="
            group
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-blue-100
            bg-white/80
            backdrop-blur-md
            px-5
            py-4
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-400
            hover:shadow-xl
          "
        >
          {/* Todo Text */}
          <div className="flex-1 pr-4">
            <p
              className={`text-base font-medium break-words transition ${
                todo.isCompleted
                  ? "text-gray-400 line-through"
                  : "text-slate-700"
              }`}
            >
              {todo.text}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {/* Edit */}
            <button
              onClick={() => onEdit?.(todo)}
              disabled={todo.isCompleted}
              title="Edit Todo"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-blue-100
                text-blue-600
                transition-all
                duration-300
                hover:scale-110
                hover:bg-blue-600
                hover:text-white
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              ✏️
            </button>

            {/* Delete */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              title="Delete Todo"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-red-100
                text-red-500
                transition-all
                duration-300
                hover:scale-110
                hover:bg-red-500
                hover:text-white
                active:scale-95
              "
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673A2.25 2.25 0 0115.916 21.75H8.084A2.25 2.25 0 015.84 19.673L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
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