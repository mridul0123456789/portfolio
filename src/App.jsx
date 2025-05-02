// App.jsx
import React from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => (
  <div className="font-sans">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default App; 
