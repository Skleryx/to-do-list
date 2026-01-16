import type { Todo } from '../../types/todo'
import { TodoItem } from './TodoItem'

type Props = {
  todos: Todo[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TodoList({ todos, onToggle, onRemove }: Props) {
    return (
        <ul className="space-y-2 sm:space-y-3 mt-4 h-[55vh] overflow-y-auto pr-1 relative todo-scroll">
            {todos.map(todo => (
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