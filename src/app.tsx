import { Tasks } from "@/modules/task/tasks";

export function App() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-lg space-y-2">
        <Tasks />
      </main>
    </div>
  );
}
