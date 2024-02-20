import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./home_components/Footer";
import Action from "./home_components/Action";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
const App = () => {
  return (
    <div>
      <Router>
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
