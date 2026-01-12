import { useEffect, useState } from "react";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}



export function TodoApp({ onBack }: { onBack: () => void }) {
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

  const [dark, setDark] = useState(() => {
  return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
  const root = document.documentElement
  if (dark) {
    root.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    root.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
  }, [dark])


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
    <div className="    min-h-[100dvh]
    w-full
    bg-gradient-to-br from-slate-950 to-blue-950
    px-4">
      <div className="
      flex min-h-[100dvh] items-center justify-center
      ">
        <div className="
                w-full
        max-w-md
        mx-auto
        bg-slate-900/80
        backdrop-blur
        rounded-2xl
        p-6
        shadow-xl
        border border-blue-900
        ">
         <h1 className="
            text-xl
            sm:text-2xl
            font-bold
            text-blue-400
            text-center
            mb-4
            dark:text-blue-300
          ">
            To Do List
          </h1>
          {/* input */}
         <form
            onSubmit={(e) => {
              e.preventDefault()
              addTodo()
            }}
            className="flex
            gap-2 sm:gap-3
            bg-slate-900
            p-3 sm:p-4
            rounded-xl
            shadow-lg
            dark:bg-slate-800"
          >
            <input
              className="flex-1
              bg-slate-800
              rounded-lg
              text-white
              px-3 sm:px-4
              py-2 sm:py-3
              text-sm sm:text-base
              outline-none
              focus:ring-2 focus:ring-blue-500
              dark:bg-slate-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tambah todo..."
            />
            <button
              type="submit"
              className="bg-blue-600
              hover:bg-blue-700
              text-white
              px-4 sm:px-5
              rounded-lg
              text-lg
              dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              +
            </button>
          </form>
          {/* list */}
          <ul className="space-y-2 sm:space-y-3 mt-4">
            {todos.map(todo => (
              <div
                key={todo.id}
                className="  flex
                items-center
                gap-3
                bg-slate-800
                p-3 sm:p-4
                rounded-lg
                dark:bg-slate-700"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 sm:w-6 sm:h-6 accent-blue-500"
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
            <p className="mt-16 text-center text-slate-500 text-sm">
              Belum ada tugas ✨
            </p>
          )}
          <button
            onClick={() => setDark(!dark)}
            className="
              absolute top-4 right-4
              bg-blue-600/20 dark:bg-blue-500/20
              text-blue-400
              px-3 py-1 rounded-lg
              backdrop-blur
              hover:bg-blue-500/30
              transition
            "
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={onBack}
            className="
              mt-6 w-80
              bg-slate-800 hover:bg-slate-700
              text-white
              py-3 rounded-xl
              transition
              dark:bg-slate-700 dark:hover:bg-slate-600
              absolute bottom-6 left-1/2 transform -translate-x-1/2
            "
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
