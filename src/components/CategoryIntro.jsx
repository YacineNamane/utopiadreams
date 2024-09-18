import { NavLink } from "react-router-dom";
import CatGif from "../assets/UDImages/catgif.webp";
import UtopiaGif from "../assets/UDImages/Utopiaagif.webp";
import AnimeGif from "../assets/UDImages/Animegif.gif";

function CategoryIntro() {
  return (
    <div className="category-intro-container">
      <div className="giphy-container">
        <div className="giphy-item">
          <img src={UtopiaGif} alt="Personal GIF" className="giphy-cover" />
          <NavLink to="/Artworks">
            <div className="category-name">Utopia</div>
          </NavLink>
        </div>
      </div>

      <div className="giphy-container">
        <div className="giphy-item">
          <img src={CatGif} alt="Personal GIF" className="giphy-cover" />
          <NavLink to="/Artworks">
            {" "}
            <div className="category-name">Cats</div>
          </NavLink>
        </div>
      </div>
      <div className="giphy-container  anime">
        <div className="giphy-item">
          <img src={AnimeGif} alt="Personal GIF" className="giphy-cover" />
          <NavLink to="/Artworks">
            <div className="category-name">Anime</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default CategoryIntro;