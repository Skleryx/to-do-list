import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onRemove }: any) {
  return (
    <div className="space-y-2 sm:space-y-3 mt-4 h-[55vh] overflow-y-auto pr-1 relative todo-scroll">
      {todos.map((todo: any) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}
        />
      ))}
        {todos.length === 0 && (
        <p className="absolute bottom-48 left-0 right-0 text-center text-slate-500 text-sm">
        Belum ada tugas ✨
        </p>
        )}
    </div>
  );
}
