import { useState } from "react";
import { NavLink } from "react-router-dom";
import UDLogo from "../assets/UDImages/UtopiaDreams.png";
import Closeicon from "../assets/UDImages/cross.png";
import Menuicon from "../assets/UDImages/menu.svg";
import FP from "../assets/UDImages/A25.png";
function PhoneBanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };
  return (
    <div className="phone-banner">
      <div className="logo-ud">
        <NavLink to="/">
          <img src={UDLogo} alt="UtopiaDreamsLogo" />
        </NavLink>
      </div>
      <div className="fp-menu-container">
        <div className="fp-container">
          {" "}
          <NavLink to="/#Phone-socials">
            {" "}
            <img src={FP} alt="profile pic" />
          </NavLink>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <img src={Menuicon} alt="Open Menu" />
        </button>
      </div>

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
          <NavLink to="/shop">
            <h3 id="shopspecial">Shop</h3>
          </NavLink>
        </div>
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
          <NavLink to="/Artworks?filter=anime">Bluelock</NavLink>
          <NavLink to="/Artworks?filter=cats">Cats</NavLink>
          <NavLink to="/Artworks?filter=classic">Classic</NavLink>
          <NavLink to="/Artworks?filter=realistic">Realistic</NavLink>
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
