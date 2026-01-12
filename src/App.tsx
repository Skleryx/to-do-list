import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import TodoPage from "./pages/TodoPage";
import ProfilePage from "./pages/ProfilePage";


export type Page = "landing" | "todo" | "profile";

export default function App() {
  const [page, setPage] = useState<Page>("landing");

  return (
    <div className="      min-h-[100dvh]
      w-full overflow-x-hidden
      bg-gradient-to-br
      from-slate-950
      to-blue-950
      transition-colors
      duration-500">
      {page === "landing" && <LandingPage navigate={setPage} />}
      {page === "todo" && <TodoPage onNavigate={setPage} />}
      {page === "profile" && <ProfilePage navigate={setPage} />}
    </div>
  );
}
