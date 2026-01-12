import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import TodoPage from "./pages/TodoPage";
import ProfilePage from "./pages/ProfilePage";

export type Page = "landing" | "todo" | "profile";

export default function App() {
  const [page, setPage] = useState<Page>("landing");

  return (
    <>
      {page === "landing" && <LandingPage navigate={setPage} />}
      {page === "todo" && <TodoPage onNavigate={setPage} />}
      {page === "profile" && <ProfilePage navigate={setPage} />}
    </>
  );
}
