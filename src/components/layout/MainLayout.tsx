import Sidebar from "./Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 to-blue-950">
      <Sidebar navigate={function (): void {
              throw new Error("Function not implemented.");
          } } />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
