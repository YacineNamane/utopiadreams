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

  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    }
  };

  return (
    <div className="phone-banner">
      <div className="logo-ud">
        <NavLink to="/" onClick={handleNavClick}>
          <img src={UDLogo} alt="UtopiaDreamsLogo" />
        </NavLink>
      </div>
      <div className="fp-menu-container">
        <div className="fp-container">
          <NavLink to="/#Phone-socials" onClick={handleNavClick}>
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
          <NavLink to="/shop" onClick={handleNavClick}>
            <h3 id="shopspecial">Shop</h3>
          </NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/" onClick={handleNavClick}>
            <h3>Home</h3>
          </NavLink>
          <NavLink to="/#expectation" onClick={handleNavClick}>
            What is it about?
          </NavLink>
          <NavLink to="/#niche" onClick={handleNavClick}>
            Niche
          </NavLink>
          <NavLink to="/#support" onClick={handleNavClick}>
            Support the project
          </NavLink>
          <NavLink to="/#intro" onClick={handleNavClick}>
            Outro
          </NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/Artworks" onClick={handleNavClick}>
            <h3>Wallpapers</h3>
          </NavLink>
          <NavLink to="/Artworks?filter=Dandadan" onClick={handleNavClick}>
            Dandadan
          </NavLink>
          <NavLink to="/Artworks?filter=Bluelock" onClick={handleNavClick}>
            Bluelock
          </NavLink>
          <NavLink to="/Artworks?filter=DemonSlayer" onClick={handleNavClick}>
            Demon Slayer
          </NavLink>
          <NavLink to="/Artworks?filter=HxH" onClick={handleNavClick}>
            Hunter x Hunter
          </NavLink>
          <NavLink to="/Artworks?filter=One Piece" onClick={handleNavClick}>
            One Piece
          </NavLink>
          <NavLink to="/Artworks?filter=JJK" onClick={handleNavClick}>
            Jujutsu Kaisen
          </NavLink>
          <NavLink to="/Artworks?filter=Solo Leveling" onClick={handleNavClick}>
            Solo Leveling
          </NavLink>
          <NavLink to="/Artworks?filter=Arcane" onClick={handleNavClick}>
            Arcane | League
          </NavLink>
          <NavLink to="/Artworks?filter=Variety" onClick={handleNavClick}>
            Others
          </NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/about" onClick={handleNavClick}>
            <h3>About</h3>
          </NavLink>
          <NavLink to="/About/#aboutproject" onClick={handleNavClick}>
            Team | UtopiaDream
          </NavLink>
          <NavLink to="/About/#aboutme" onClick={handleNavClick}>
            About me
          </NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/Contact" onClick={handleNavClick}>
            <h3>Contact</h3>
          </NavLink>
          <NavLink to="/Contact/#Contact" onClick={handleNavClick}>
            Reach out
          </NavLink>
          <NavLink to="/Contact/#socials" onClick={handleNavClick}>
            Socials
          </NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/Contribute" onClick={handleNavClick}>
            <h3>Contribute</h3>
          </NavLink>
          <NavLink to="/Contribute/#donatetalk" onClick={handleNavClick}>
            Support the project
          </NavLink>
          <NavLink to="/Contribute/#donate" onClick={handleNavClick}>
            Donate
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PhoneBanner;
