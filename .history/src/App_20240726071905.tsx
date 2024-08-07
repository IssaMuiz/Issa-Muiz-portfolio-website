import Home from "./component/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#080808] h-[1000px]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
