import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artworks from "./pages/Artworks";
import About from "./pages/About";
import ArtworkDetails from "./pages/ArtworkDetails";
import Contact from "./pages/Contact";
import Contribute from "./pages/Contribute";
import Rights from "./pages/Rights";
import BugPage from "./pages/BugPage";
import Shop from "./pages/Shop";
import ScrollToTop from "./components/ScrollToTop";

const AppRoutes = () => {
  return (
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/about" element={<About />} />
          <Route path="/ArtworkDetails/:id" element={<ArtworkDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Contribute" element={<Contribute />} />
          <Route path="/Mentionslégales" element={<Rights />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<BugPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default AppRoutes;
