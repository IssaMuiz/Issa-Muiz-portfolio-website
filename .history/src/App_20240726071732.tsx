import Home from "./component/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <div className="bg-[#080808] h-[1000px]">
          <Route path="/" element={<Home />} />
        </div>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
