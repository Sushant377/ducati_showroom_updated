import { NavLink } from "react-router-dom";

function Sidenav() {
  return (
    <div>
      <div className="sidenav">
        <ul>
          <li>
            <NavLink
              to="nav1"
              className={({ isActive }) => (isActive ? "active-side" : "")}
            >
              Bikes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="nav2"
              className={({ isActive }) => (isActive ? "active-side" : "")}
            >
              Riders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="nav3"
              className={({ isActive }) => (isActive ? "active-side" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidenav;
