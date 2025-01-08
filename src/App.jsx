import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import ContactForm from "./components/contact/contact.jsx"
import CareersPage from "./components/careers/careers.jsx"
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import D_Services from "./components/services/DesignServices/D_Services.jsx";
import W_Services from "./components/services/WebServices/W_Services.jsx";
<<<<<<< HEAD
import Footer from "./components/footer/Footer.jsx";
=======

>>>>>>> 9b13ee20f2befaef376343076f56dcfd49f9b4a9
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/web-services" element={<W_Services />} />
          <Route path="/design-services" element={<D_Services />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
