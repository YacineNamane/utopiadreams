import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UDLogo from "../assets/UDImages/UtopiaDreams.png";
import arrow from "../assets/UDImages/arrow.png";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation (1 seconde)
      once: true, // Animation déclenchée une seule fois
    });
  }, []);

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };
  return (
    <div className="landing-page">
      <style>{`
        .landing-page-find h2 {
          font-size: 1.4em;
    color: #1f1e27;
    font-weight: bold;
    margin: 0;
        }
      `}</style>
      <div className="Banner">
        <div className="logo-ud">
          <img src={UDLogo} alt="UtopiaDreamsLogo" />
        </div>
        <div className="nav-pannel">
          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/">
              Home
              <img
                src={arrow}
                alt="arrow"
                className={`arrow-icon ${
                  hoveredMenu === "home" ? "rotated" : ""
                }`}
              />
            </NavLink>
            {hoveredMenu === "home" && (
              <div className="dropdown">
                <NavLink to="/#expectation">What is it about ?</NavLink>
                <NavLink to="/#niche">Niche</NavLink>
                <NavLink to="/#support">Support the project</NavLink>
                <NavLink to="/#intro">Outro</NavLink>
              </div>
            )}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("wallpapers")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/Artworks">
              Wallpapers
              <img
                src={arrow}
                alt="arrow"
                className={`arrow-icon ${
                  hoveredMenu === "wallpapers" ? "rotated" : ""
                }`}
              />
            </NavLink>
            {hoveredMenu === "wallpapers" && (
              <div className="dropdown">
                <NavLink to="/Artworks?filter=utopia">Utopia</NavLink>
                <NavLink to="/Artworks?filter=anime">Anime</NavLink>
                <NavLink to="/Artworks?filter=cats">Cats</NavLink>
                <NavLink to="/Artworks?filter=classic">Classic</NavLink>
              </div>
            )}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/About">
              About
              <img
                src={arrow}
                alt="arrow"
                className={`arrow-icon ${
                  hoveredMenu === "about" ? "rotated" : ""
                }`}
              />
            </NavLink>
            {hoveredMenu === "about" && (
              <div className="dropdown">
                <NavLink to="/About/#aboutproject">Team | UtopiaDream</NavLink>
                <NavLink to="/About/#aboutme">About me </NavLink>
              </div>
            )}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/Contact">
              Contact
              <img
                src={arrow}
                alt="arrow"
                className={`arrow-icon ${
                  hoveredMenu === "contact" ? "rotated" : ""
                }`}
              />
            </NavLink>
            {hoveredMenu === "contact" && (
              <div className="dropdown">
                <NavLink to="/Contact/#Contact">Reach out</NavLink>
                <NavLink to="/Contact/#socials">Socials</NavLink>
              </div>
            )}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("contribute")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/Contribute">
              Contribute
              <img
                src={arrow}
                alt="arrow"
                className={`arrow-icon ${
                  hoveredMenu === "contribute" ? "rotated" : ""
                }`}
              />
            </NavLink>
            {hoveredMenu === "contribute" && (
              <div className="dropdown">
                <NavLink to="/Contribute/#donatetalk">
                  Support the project
                </NavLink>
                <NavLink to="/Contribute/#donate">Donate</NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="landing-page-find">
        <div className="landing-title-container" data-aos="fade-up">
          <h2>
            FIND THE ONE THAT FITS YOU THE MOST <br />
            MAKE YOUR SMARTEPHONE'S EXPERIENCE BETTER
          </h2>
        </div>
        <div className="navigate-container-redirect" data-aos="fade-up">
          <NavLink to="/Artworks">Start Navigation</NavLink>
        </div>
      </div>
    </div>
  );
}
export default Header;
