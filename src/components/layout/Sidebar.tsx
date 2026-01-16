import { useNavigate } from "react-router";


export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6 hidden md:flex flex-col shrink-0">
      <h2 className="text-xl font-bold text-blue-400 mb-6">
        Menu
      </h2>

      <button
        onClick={() => navigate("/todo")}
        className="text-left mb-3 hover:text-blue-400"
      >
        📝 Todo
      </button>

      <button
        onClick={() => navigate("/profile")}
        className="text-left mb-3 hover:text-blue-400"
      >
        👤 Profile
      </button>

      <button
        onClick={() => {
          console.log("Navigating to landing page");
          navigate("/");
        }}
        className="mt-auto text-slate-400 hover:text-white"
      >
        ← Kembali
      </button>
    </aside>
  );
}
