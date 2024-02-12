import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Home_layout from "./components/user_layout/layout";
import Errorpage from "./components/errorpage/Errorpage";
import Nav1 from "./pages/about/components/Nav1";
import Nav2 from "./pages/about/components/Nav2";
import Nav3 from "./pages/about/components/Nav3";
import Gallery from "./pages/gallery/Gallery";
import Testride from "./pages/testride/Testride";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="nav1" element={<Nav1 />} />
            <Route path="nav2" element={<Nav2 />} />
            <Route path="nav3" element={<Nav3 />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testride" element={<Testride />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
