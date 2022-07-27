import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Laout from "./routs/Laout";
import Home from "./routs/Home";
import About from "./routs/About";
import Info from "./routs/Info";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Laout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="info" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
