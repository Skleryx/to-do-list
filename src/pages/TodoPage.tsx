import Sidebar from "../components/Sidebar";
import { TodoApp } from "../components/TodoApp";

export default function TodoPage({
  onNavigate,
}: {
  onNavigate: (page: "landing" | "todo" | "profile") => void;
}) {
  return (
    <div className="min-h-[100dvh] w-full md:flex bg-gradient-to-br from-slate-950 to-blue-950 h-screen overflow-hidden">
      <Sidebar navigate={onNavigate} />

      <main className="flex-1
  flex
  justify-center
  items-start
  sm:items-center
  px-4
  py-6
  pb-24
  h-screen">
        <TodoApp onBack={() => onNavigate("landing")} />
      </main>
    </div>
  );
}
