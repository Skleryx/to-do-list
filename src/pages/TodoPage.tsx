import Sidebar from "../components/Sidebar";
import { TodoApp } from "../components/TodoApp";

export default function TodoPage({
  onNavigate,
}: {
  onNavigate: (page: "landing" | "todo" | "profile") => void;
}) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-950 to-blue-950">
      <Sidebar navigate={onNavigate} />

      <main className="flex-1 flex items-center justify-center p-6">
        <TodoApp onBack={() => onNavigate("landing")} />
      </main>
    </div>
  );
}
