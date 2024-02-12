import { NavLink } from "react-router-dom";
import "./Errorpage.css";
function Errorpage() {
  return (
    <div>
      <div className="errorpage">
        <h2>404</h2>
        <h3>Oops, nothing here...</h3>
        <p>Please Check the URL</p>
        <p>
          Otherwise, <NavLink to="/">Click here</NavLink> to redirect to
          homepage.
        </p>
      </div>
    </div>
  );
}

export default Errorpage;
