import type { Page } from "../App";

export default function ProfilePage({
  navigate,
}: {
  navigate: (page: Page) => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <button
          onClick={() => navigate("landing")}
          className="text-blue-400 hover:underline"
        >
          ← Kembali
        </button>
      </div>
    </div>
  );
}
