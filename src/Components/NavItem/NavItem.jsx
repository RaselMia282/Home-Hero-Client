import { NavLink } from "react-router";

export const NavItem = ({ to, children }) => {
  return (
    
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-bold border-b-2 border-primary rounded-none px-2 py-1"
            : "hover:text-primary transition-all px-2 py-1"
        }
      >
        {children}
      </NavLink>
    
  );
};

