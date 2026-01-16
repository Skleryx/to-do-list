import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TodoPage from "./pages/TodoPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
