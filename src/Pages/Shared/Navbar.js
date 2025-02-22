import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, Logout } = UseAuth();
  const handleLogout = () => {
    Logout(navigate);
  };
  const menuItems = (
    <>
      <li>
        {user.email ? (
          <>
            <Link to="/dashboard">Dashboard</Link>

            <button className="menu menu-horizontal" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        ) : (
          ""
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            LU Transport
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
