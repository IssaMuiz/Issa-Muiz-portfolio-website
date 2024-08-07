import Home from "./component/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/pages/About";
import Services from "./component/pages/Services";
import Project from "./component/pages/Project";
import Contact from "./component/pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="bg-[#080808] h-[1000px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/src/component/pages/About.tsx/about"
            element={<About />}
          />
          <Route path="services" element={<Services />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
