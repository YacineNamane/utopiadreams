import { NavLink } from "react-router-dom";
import UDLogo from "../assets/UDImages/UtopiaDreams.png";

function Header() {
  return (
    <div className="landing-page">
      <style>{`
        .landing-page-find h2 {
          font-size: 1.7em;
  color: #1f1e27;
  font-weight: 500;
  margin: 0;
        }
      `}</style>
      <div className="Banner">
        <div className="logo-ud">
          <img src={UDLogo} alt="UtopiaDreamsLogo" />
        </div>
        <div className="nav-pannel">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Artworks">Wallpapers </NavLink>
          <NavLink to="/About">About </NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Contribute">Contribute</NavLink>
        </div>
      </div>
      <div className="landing-page-find">
        <h2>
          FIND THE ONE THAT FITS YOU THE MOST <br />
          MAKE YOUR SMARTEPHONE'S EXPERIENCE BETTER
        </h2>
        <NavLink to="/Artworks">Start Navigation</NavLink>
      </div>
    </div>
  );
}
export default Header;
