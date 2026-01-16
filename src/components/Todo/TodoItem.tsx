import type { Todo } from '../../types/todo'


type Props = {
  todo: Todo
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onRemove }: Props) {
    return (
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
                  onChange={() => onToggle(todo.id)}
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
                  onClick={() => onRemove(todo.id)}
                  className="text-red-400 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
    )
}