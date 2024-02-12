import { Outlet } from "react-router-dom";
import "./About.css";
import Sidenav from "./components/Sidenav";
function About() {
  return (
    <>
      <div className="contain">
        <div>
          <Sidenav />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default About;
