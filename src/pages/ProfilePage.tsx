import { useNavigate } from "react-router";

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <button
          onClick={() => navigate("/")}
          className="text-blue-400 hover:underline"
        >
          ← Kembali
        </button>
      </div>
    </div>
  );
}
