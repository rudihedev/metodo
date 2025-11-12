import { Tasks } from "./tasks";

export function App() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-lg">
        <h1 className="text-green-900 text-center text-2xl font-bold my-4">
          METODO
        </h1>

        <Tasks />
      </main>
    </div>
  );
}
