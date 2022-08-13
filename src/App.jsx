import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CreativeDesign from "./components/CreativeDesign";
import Experience from "./components/Experience";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box>

      <Header />
      <Hero />
      <CreativeDesign />
      <Experience />
      <ContactUs />
      <Footer />

    </Box>
  );
};

export default App
