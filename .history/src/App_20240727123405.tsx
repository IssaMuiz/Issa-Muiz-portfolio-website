import Home from "./component/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/pages/About";
import Services from "./component/pages/Services";
import Project from "./component/pages/Project";
import ContactMe from "./component/pages/contactMe";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-[#080808] h-[1100px] w-[800px] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="project" element={<Project />} />
          <Route path="contact-me" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
