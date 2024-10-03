import { useState } from "react";
import { NavLink } from "react-router-dom";
import UDLogo from "../assets/UDImages/UtopiaDreams.png";
import Closeicon from "../assets/UDImages/cross.png";
import Menuicon from "../assets/UDImages/menu.png";

function PhoneBanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Nouvel état pour la rotation

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Active l'animation de rotation avant de fermer le menu
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false); // Réinitialise l'animation après la fermeture
      }, 500); // Durée avant de fermer le menu
    } else {
      setIsMenuOpen(true);
    }
  };
  return (
    <div className="phone-banner">
      <div className="logo-ud">
        <img src={UDLogo} alt="UtopiaDreamsLogo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={Menuicon} alt="Open Menu" />
      </button>

      <div className={`nav-pannel ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && (
          <button className="close-btn" onClick={toggleMenu}>
            <img
              src={Closeicon}
              alt="Close Menu"
              className={isClosing ? "rotated" : ""}
            />
          </button>
        )}

        <div className="nav-section">
          <NavLink to="/">
            <h3>Home</h3>
          </NavLink>
          <NavLink to="/#expectation">What is it about?</NavLink>
          <NavLink to="/#niche">Niche</NavLink>
          <NavLink to="/#support">Support the project</NavLink>
          <NavLink to="/#intro">Outro</NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/Artworks">
            <h3>Wallpapers</h3>
          </NavLink>
          <NavLink to="/Artworks?filter=utopia">Utopia</NavLink>
          <NavLink to="/Artworks?filter=anime">Anime</NavLink>
          <NavLink to="/Artworks?filter=cats">Cats</NavLink>
          <NavLink to="/Artworks?filter=classic">Classic</NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/about">
            <h3>About</h3>
          </NavLink>
          <NavLink to="/About/#aboutproject">Team | UtopiaDream</NavLink>
          <NavLink to="/About/#aboutme">About me</NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/Contact">
            <h3>Contact</h3>
          </NavLink>
          <NavLink to="/Contact/#Contact">Reach out</NavLink>
          <NavLink to="/Contact/#socials">Socials</NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/Contribute">
            <h3>Contribute</h3>
          </NavLink>
          <NavLink to="/Contribute/#donatetalk">Support the project</NavLink>
          <NavLink to="/Contribute/#donate">Donate</NavLink>
        </div>
      </div>
    </div>
  );
}

export default PhoneBanner;
