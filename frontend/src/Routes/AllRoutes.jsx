import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import PageNotFound from "../Pages/PageNotFound";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Policy from "../Pages/Policy";
import Register from "../Pages/Auth/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
