import MainLayout from "../components/layout/MainLayout";
import TodoApp from "../components/Todo/TodoApp";

export default function TodoPage() {
  return (
    <MainLayout>
      <div className="flex justify-center items-center h-full">
        <TodoApp />
      </div>
    </MainLayout>
  );
}
