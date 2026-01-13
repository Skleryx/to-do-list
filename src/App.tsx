import TodoPage from "./pages/TodoPage";

export type Page = "landing" | "todo" | "profile";

export default function App() {
  return <TodoPage />;
}
