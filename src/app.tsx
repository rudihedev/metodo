import { Tasks } from "./tasks";

export function App() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-lg">
        <h1 className="text-green-900 text-center text-3xl font-bold mt-4">
          METODO
        </h1>
        <h2 className="text-green-700 text-center text-2xl font-bold mb-4">
          📋 What to do Today? 🔍
        </h2>
        <Tasks />
      </main>
    </div>
  );
}
