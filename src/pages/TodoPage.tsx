import { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import TodoInput from "../components/Todo/TodoInput";
import TodoList from "../components/Todo/TodoList";

export default function TodoPage() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, done: false }]);
    setInput("");
  };

  return (
    <MainLayout>
      {/* CENTER */}
      <div className="flex h-full w-full items-center justify-center p-4">
        {/* CARD */}
        <div className="w-full max-w-md h-full sm:h-auto bg-slate-800 rounded-xl shadow-lg flex flex-col overflow-hidden">
          
          {/* HEADER */}
          <div className="p-4 border-b border-slate-700">
            <h1 className="text-xl font-semibold text-center text-white">
              To Do List
            </h1>
          </div>

          {/* INPUT */}
          <div className="p-4">
            <TodoInput
              value={input}
              onChange={setInput}
              onAdd={handleAdd}
            />
          </div>

          {/* LIST (SCROLL DI SINI) */}
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <TodoList todos={todos} setTodos={setTodos} />
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
