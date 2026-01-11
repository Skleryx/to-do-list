import { useEffect, useState } from "react";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


export default function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem("todos")
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-blue-950 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur rounded-2xl p-6 shadow-xl border border-blue-900">
        <h1 className="text-2xl font-bold text-blue-400 text-center mb-4">
          To Do List
        </h1>

        {/* input */}
       <form
          onSubmit={(e) => {
            e.preventDefault()
            addTodo()
          }}
          className="flex gap-3 bg-slate-900 p-4 rounded-xl shadow-lg "
        >
          <input
            className="flex-1 bg-slate-800 rounded-lg text-white px-4 py-2  outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tambah todo..."
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg"
          >
            +
          </button>
        </form>



        {/* list */}
        <ul className="space-y-2">
          {todos.map(todo => (
            <div
              key={todo.id}
              className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 accent-blue-500"
              />

              <span
                className={`flex-1 ${
                  todo.completed
                    ? "line-through text-slate-400"
                    : "text-white"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="mt-4 text-center text-slate-500 text-sm">
            Belum ada tugas ✨
          </p>
        )}
      </div>
    </div>
  );
}
