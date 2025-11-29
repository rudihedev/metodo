import { Tasks } from "@/modules/task/tasks";
import { Link } from "react-router";

export function App() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-lg space-y-2">
        <nav className="flex items-center justify-between gap-4">
          <h1 className="mt-2 text-center text-3xl font-bold text-green-900">
            <Link to="/">METODO</Link>
          </h1>

          <ul className="inline-flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Tasks />
      </main>
    </div>
  );
}
