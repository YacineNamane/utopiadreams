import { NavLink } from "react-router-dom";
import UDLogo from "../assets/UDImages/UtopiaDreams.png";

function DefaultHeader() {
  return (
    <div className="Banner-default">
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
  );
}
export default DefaultHeader;
