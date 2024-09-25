import { NavLink } from "react-router-dom";
import { useState } from "react";
import UDLogo from "../assets/UDImages/UtopiaDreams.png";

function DefaultHeader() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <div className="Banner-default">
      <div className="logo-ud">
        <img src={UDLogo} alt="UtopiaDreamsLogo" />
      </div>
      <div className="nav-pannel">
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/">Home</NavLink>
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
          <NavLink to="/Artworks">Wallpapers</NavLink>
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
          <NavLink to="/About">About</NavLink>
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
          <NavLink to="/Contact">Contact</NavLink>
          {hoveredMenu === "contact" && (
            <div className="dropdown">
              <NavLink to="/Contact/#email">Email</NavLink>
              <NavLink to="/Contact/#phone">Phone</NavLink>
            </div>
          )}
        </div>

        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("contribute")}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/Contribute">Contribute</NavLink>
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
  );
}

export default DefaultHeader;
