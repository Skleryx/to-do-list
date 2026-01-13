interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex
                items-center
                gap-3
                bg-slate-800
                p-3 sm:p-4
                rounded-lg
                dark:bg-slate-700">
      <input type="checkbox" checked={todo.completed} onChange={onToggle} className="w-5 h-5 sm:w-6 sm:h-6 accent-blue-500" />
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-slate-400" : "text-white"
        }`}
      >
        {todo.text}
      </span>
      <button onClick={onRemove} className="text-red-400 hover:text-red-500">
        ✕
      </button>
    </div>
  );
}
