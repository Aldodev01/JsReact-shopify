import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, OurFav } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-fav/:favId" element={<OurFav />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
