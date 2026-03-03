import { NavLink } from "react-router";

export const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-cyan-600 font-bold border-b-2 border-cyan-600 px-2 py-1 transition-all"
          : "text-gray-600 hover:text-cyan-600 transition-all px-2 py-1"
      }
    >
      {children}
    </NavLink>
  );
};
