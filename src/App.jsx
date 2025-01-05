import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import ContactForm from "./components/contact/contact.jsx"
import CareersPage from "./components/careers/careers.jsx"
import Home from "./components/Home/home.jsx";
import Services from "./components/services/services.jsx";
import About from "./components/about/about.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
