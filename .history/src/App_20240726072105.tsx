import Home from "./component/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#080808] h-[1000px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="Project" element={<Project />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
