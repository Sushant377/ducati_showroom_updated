import Navbar from "./navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import "../user_layout/layout.css";
function Home_layout() {
  return (
    <>
      <Navbar />
      <div className="outlet-style">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Home_layout;
