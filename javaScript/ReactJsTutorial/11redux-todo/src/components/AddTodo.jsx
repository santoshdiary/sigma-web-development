import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todoSlice";

function AddTodo({ editingTodo, onUpdateComplete }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setInput(editingTodo ? editingTodo.text : "");
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, text: trimmedInput }));
      onUpdateComplete?.();
    } else {
      dispatch(addTodo(trimmedInput));
    }

    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-10 flex flex-col sm:flex-row gap-4"
    >
      <input
        type="text"
        placeholder="✍️ Enter your task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="
          flex-1
          rounded-xl
          border border-blue-200/60
          bg-white/80
          backdrop-blur-md
          px-5
          py-3
          text-gray-700
          placeholder:text-gray-400
          shadow-lg
          focus:outline-none
          focus:ring-4
          focus:ring-blue-300/40
          focus:border-blue-500
          transition-all
          duration-300
        "
      />

      <button
        type="submit"
        className="
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-sky-500
          px-7
          py-3
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-blue-400/40
          hover:from-blue-700
          hover:to-sky-600
          active:scale-95
        "
      >
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;