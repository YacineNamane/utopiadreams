import { NavLink } from "react-router-dom";
import UDLogo from "../assets/UDImages/UtopiaDreams.png";

function Header() {
  return (
    <div className="landing-page">
      <div className="Banner">
        <div className="logo-ud">
          <img src={UDLogo} alt="UtopiaDreamsLogo" />
        </div>
        <div className="nav-pannel">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Artworks">Wallpapers </NavLink>
          <NavLink to="/About">About </NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </div>
      <div className="landing-page-find">
        <h2>
          FIND THE ONE THAT FITS YOU THE MOST <br />
          MAKE YOUR SMARTEPHONE'S EXPERIENCE BETTER
        </h2>
        <NavLink to="/"> Start Navigation</NavLink>
      </div>
    </div>
  );
}
export default Header;
