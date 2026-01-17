import { useEffect, useState } from 'react';
import type { Todo } from '../../types/todo'


type Props = {
  todo: Todo
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

type BadgeColor = "red" | "yellow" | "blue" | "green";

interface Badge {
  color: BadgeColor;
  text: string;
}

export function getDeadlineBadge(deadline?: string): Badge | null {
  if (!deadline) return null;

  // Langsung masukkan deadline tanpa tambahan string "T23:59:59"
  const deadlineTime = new Date(deadline).getTime(); 
  if (isNaN(deadlineTime)) return null;

  const now = Date.now();
  const diff = deadlineTime - now;
  const day = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil(diff / day);
  const hoursLeft = Math.ceil(diff / (1000 * 60 * 60));

  if (daysLeft < 0) {
    return { color: "red", text: "Overdue" };
  }

  if (hoursLeft <= 24 && hoursLeft > 0) {
    return { color: "yellow", text: "Today" };
  }

  if (daysLeft <= 1) {
    return { color: "blue", text: "Tomorrow" };
  }

  return { color: "green", text: `${daysLeft} days left` };
}
export function TodoItem({ todo, onToggle, onRemove }: Props) {
  const [timeLeft, setTimeLeft] = useState<string>(""); 
  const badge = getDeadlineBadge(todo.deadline ?? "");


  useEffect(() => {
    if (!todo.deadline) return

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(todo.deadline!).getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft("⛔ Overdue")
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeLeft(`${hours}h ${minutes}m`)

      if (hours === 0) {
        setTimeLeft(`${minutes}m ${seconds}s`)
      }

    }, 1000)

    return () => clearInterval(interval)
  }, [todo.deadline])

  return (
    <div
      key={todo.id}
      className="flex items-center gap-3 bg-slate-800 p-3 sm:p-4 rounded-lg dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 transition h-16"
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 sm:w-6 sm:h-6 accent-blue-500"
      />
      <div className="flex-1 flex flex-col">
        <span
          className={`flex-1 ${
            todo.completed
              ? "line-through text-slate-400"
              : "text-white"
          }`}
        >
          {todo.text}
        </span>
        {badge && (
          <span
            className={`inline-block mt-1 text-xs px-2 py-1 rounded-full
              ${
                badge.color === "red" && "bg-red-500/20 text-red-400"
              }
              ${
                badge.color === "yellow" && "bg-yellow-500/20 text-yellow-400"
              }
              ${
                badge.color === "blue" && "bg-blue-500/20 text-blue-400"
              }
              ${
                badge.color === "green" && "bg-green-500/20 text-green-400"
              }
            `}
          >
            {badge.text}
          </span>
        )}
      </div>
      {todo.deadline && (
        <span className="text-sm text-blue-400">
          ⏳ {timeLeft}
        </span>
      )}
      <button
        onClick={() => onRemove(todo.id)}
        className="text-red-400 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  )
}
    