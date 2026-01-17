import { useMemo } from 'react'
import type { Todo } from '../../types/todo'
import { TodoItem } from './TodoItem'

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}




export function TodoList({ todos, onToggle, onRemove }: Props) {
    function getDeadlineTime(deadline?: string) {
  if (!deadline) return Infinity;

  const date = deadline.includes("T")
    ? new Date(deadline)
    : new Date(deadline + "T23:59:59");

  const time = date.getTime();
  return isNaN(time) ? Infinity : time;
}

const sortedTodos = useMemo(() => {
  const now = Date.now();

  return [...todos].sort((a, b) => {
    const aTime = getDeadlineTime(a.deadline);
    const bTime = getDeadlineTime(b.deadline);

    const aOverdue = aTime < now;
    const bOverdue = bTime < now;

    // 🔴 overdue selalu di atas
    if (aOverdue !== bOverdue) {
      return aOverdue ? -1 : 1;
    }

    // sisanya urut deadline terdekat
    return aTime - bTime;
  });
}, [todos]);


    return (
        <ul className="space-y-2 sm:space-y-3 h-[32vh] mt-4 overflow-y-auto pr-1 relative todo-scroll">
            {sortedTodos.map(todo => (
                <TodoItem 
                key={todo.id} 
                todo={todo} 
                onToggle={onToggle}
                onRemove={onRemove} 
                />
            ))}
        </ul>
        
    )
}