import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* logo */}
        <Link to="/" className="text-xl font-bold">
          F1 Race Hub
        </Link>

        {/* nav links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition hover:text-red-500 ${
                isActive ? "text-red-500" : "text-gray-600"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/drivers"
            className={({ isActive }) =>
              `font-medium transition hover:text-red-500 ${
                isActive ? "text-red-500" : "text-gray-600"
              }`
            }
          >
            Drivers
          </NavLink>

          <NavLink
            to="/circuits"
            className={({ isActive }) =>
              `font-medium transition hover:text-red-500 ${
                isActive ? "text-red-500" : "text-gray-600"
              }`
            }
          >
            Circuits
          </NavLink>

          <NavLink
            to="/standings"
            className={({ isActive }) =>
              `font-medium transition hover:text-red-500 ${
                isActive ? "text-red-500" : "text-gray-600"
              }`
            }
          >
            Standings
          </NavLink>

          <NavLink
            to="/races"
            className={({ isActive }) =>
              `font-medium transition hover:text-red-500 ${
                isActive ? "text-red-500" : "text-gray-600"
              }`
            }
          >
            Races
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
