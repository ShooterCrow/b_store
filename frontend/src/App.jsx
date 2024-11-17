import React from "react";
import { Routes, Route } from "react-router-dom";
import CB from "./pages/CreateBook";
import DB from "./pages/DeleteBook";
import EB from "./pages/EditBook";
import Home from "./pages/Home";
import SB from "./pages/ShowBook";

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books/create" element={<CB />} />
    <Route path="/books/details/:id" element={<SB />} />
    <Route path="/books/edit/:id" element={<EB />} />
    <Route path="/books/delete/:id" element={<DB />} />
  </Routes>
);
};

export default App;
