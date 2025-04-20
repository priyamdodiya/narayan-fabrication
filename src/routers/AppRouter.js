import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Blog from "../components/blog/Blog";
import Contactus from "../components/contactus.js/Contactus";
import ServiceDetail from "../navbar/servicesdata/Servicesdetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/service/:id" element={<ServiceDetail />} />
    </Routes>
  );
};

export default AppRouter;
