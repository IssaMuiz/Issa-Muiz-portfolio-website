import Home from "./component/pages/Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#080808] h-[1000px]">
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
