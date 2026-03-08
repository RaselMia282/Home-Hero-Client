import React, { use } from "react";
import { NavItem } from "../NavItem/NavItem";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const links = (
    <>
      <li>
        <NavItem to="/">HOME</NavItem>
      </li>
      <li>
        <NavItem to="/services">SERVICES</NavItem>
      </li>

      
      {user && (
        <>
          <li>
            <NavItem to="/add-service">ADD SERVICE</NavItem>
          </li>
          <li>
            <NavItem to="/my-bookings">MY BOOKINGS</NavItem>
          </li>
          <li>
            <NavItem to="/my-services">MY SERVICES</NavItem>
          </li>
          <li>
            <NavItem to="/profile">PROFILE</NavItem>
          </li>
        </>
      )}

     
      {!user && (
        <>
          <li>
            <NavItem to="/login">LOGIN</NavItem>
          </li>
          <li>
            <NavItem to="/register">REGISTER</NavItem>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* links here */}
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          Home <span className="text-cyan-600">Hero</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* links here */}
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || "UserName"}
            >
              <div className="avatar cursor-pointer">
                <div className="w-12 rounded-full ring ring-cyan-500 ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="Profile" />
                </div>
              </div>
            </div>
            <div
              onClick={handleSignOut}
              className="px-5 py-2 bg-cyan-400 text-white cursor-pointer rounded-2xl "
            >
              Signout
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-5 py-2 bg-cyan-400 text-white cursor-pointer rounded-2xl "
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
