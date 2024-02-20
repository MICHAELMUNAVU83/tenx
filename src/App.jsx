import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./common_components/Footer";
import Action from "./common_components/Action";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import NavBar from "./common_components/Navbar";
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Action />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
