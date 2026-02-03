import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Catalogue from "./pages/Catalogue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
