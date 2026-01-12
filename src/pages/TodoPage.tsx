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

      <main className="f  flex-1
  flex
  justify-center
  items-start
  sm:items-center
  px-4
  py-6">
        <TodoApp onBack={() => onNavigate("landing")} />
      </main>
    </div>
  );
}
