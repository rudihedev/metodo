import { Tasks } from "./tasks";

export function App() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-lg space-y-2">
        <h1 className="mt-2 text-center text-3xl font-bold text-green-900">
          METODO
        </h1>
        <h2 className="text-center text-2xl font-bold text-green-700">
          📋 What to Do Today? 🔍
        </h2>

        <Tasks />
      </main>
    </div>
  );
}
