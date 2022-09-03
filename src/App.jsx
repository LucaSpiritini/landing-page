import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "../src/components/pages/HomePage"
import ServicesPage from "../src/components/pages/ServicesPage"
import ContactPage from "../src/components/pages/ContactPage"
import BlogPage from "../src/components/pages/BlogPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/services" element= {<ServicesPage />} />
        <Route path="/contact" element= {<ContactPage />} />
        <Route path="/blog" element= {<BlogPage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App
