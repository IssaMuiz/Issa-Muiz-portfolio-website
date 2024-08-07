import Home from "./component/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/pages/About";
import Services from "./component/pages/Services";
import Project from "./component/pages/Project";
import Contact from "./component/pages/Contact";
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <div className="bg-[#080808] h-[1000px]">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </div>
      </Routes>
    </Router>
  );
};

export default App;
