import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import type { Todo } from "../../types/todo";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export function TodoApp() {
  const navigate = useNavigate();
 
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


const addTodo = (text: string) => {
  if (!text.trim()) return;
  setTodos([
    ...todos,
    { 
      id: Date.now().toString(), // Pastikan string agar tidak error
      text: text, 
      completed: false 
    },
  ]);
};

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

type FilterType = "all" | "active" | "completed";
const [filter, setFilter] = useState<FilterType>("all");

const filteredTodos = todos.filter((todo) => {
  if (filter === "active") return !todo.completed; // Perbandingan sekarang valid
  if (filter === "completed") return todo.completed;
  return true;
});



  return (
    <div className="    min-h-[100dvh]
    w-full
    bg-gradient-to-br from-slate-950 to-blue-950
    px-4">
      <div className="
      flex min-h-[100dvh] items-center justify-center md:min-h-lg
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
        h-[80vh]
        overflow-hidden
        relative
        dark:bg-slate-800/80
        dark:border-slate-700
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
          <TodoInput onAdd={addTodo} />
          {/* filter */}
          <div className="flex gap-2 my-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter("active")}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === "active"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              Active
            </button>

            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === "completed"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              Completed
            </button>
          </div>

          {/* list */}
          <TodoList 
          todos={filteredTodos} 
          onToggle={toggleTodo} 
          onRemove={removeTodo} />

          {todos.length === 0 && (
            <p className="absolute bottom-48 left-0 right-0 text-center text-slate-500 text-sm">
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
            onClick={() => navigate("/")}
            className="
              absolute top-4 left-4
              bg-blue-600/20 dark:bg-blue-500/20
              text-blue-400
              px-3 py-1 rounded-lg
              backdrop-blur
              hover:bg-blue-500/30
              transition
            "
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;