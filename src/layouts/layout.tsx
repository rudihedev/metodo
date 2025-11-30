import { Link, Outlet } from "react-router";

export function Layout() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <nav className="flex items-center justify-between gap-4">
          <h1 className="mt-2 mb-4 text-center text-3xl font-bold text-green-900">
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
        <Outlet />
      </div>
    </div>
  );
}
