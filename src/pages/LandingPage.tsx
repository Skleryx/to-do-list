import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-blue-950 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-400">
          My Productivity App
        </h1>

        <p className="text-slate-400">
          Simple • Clean • Focused
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/todo")}
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Masuk Todo
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-900 transition"
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}
