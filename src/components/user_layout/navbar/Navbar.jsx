import { NavLink } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  return (
    <div className="header">
      <ul className="navdesign" style={{ height: "100%" }}>
        <li>
          <NavLink to="/" className="logo"></NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testride"
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            Test Ride
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
