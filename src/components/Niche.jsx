import { NavLink } from "react-router-dom";
import X from "../assets/UDImages/X.png";
import Support from "../assets/UDImages/HelpFrenn.png";

function Niche() {
  return (
    <div>
      <div className="niche-container">
        <h2>My Niche</h2>
        <div className="flex-box-org">
          <div className="paragraph-wrapper-niche">
            <p>
              Our goal is to bring together and showcase amazing content from
              talented creators. We are simply organizing and sharing these
              works for the enjoyment of others.{" "}
              <span>
                Please note that this website does not sell any wallpapers
              </span>
            </p>
          </div>
          <div className="paragraph-wrapper-niche">
            <p>
              You can explore and support the creators directly in the following
              links
            </p>
            <ul>
              <li>
                <img src={X} alt="X logo" />
                <a
                  href="https://x.com/LiveDigitalArt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  | Digital Art
                </a>
              </li>
              <li>
                <img src={X} alt="X logo" />
                <a
                  href="https://x.com/aestheticsguyy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  | Aesthetics
                </a>
              </li>
              <li>
                <img src={X} alt="X logo" />
                <a
                  href="https://x.com/coffee2hai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  | 2hai
                </a>
              </li>
              <li>
                <img src={X} alt="X logo" />

                <a
                  href="https://x.com/ito_ito_18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  | 絲(いと)AI絵本作家
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="paragraph-wrapper-spacial">
        <div className="support-text-container">
          <h2>Support | Contribute</h2>
          <div className="paragraph-wrapper-box">
            <p>
              If you like the idea of this website and want to support me for
              the work i put into this project as <span>Web Developper</span>{" "}
              you can simply share this with your friends ! or Donate{" "}
              <NavLink to={"/Contribute"}>Contribute to this project</NavLink>
            </p>
          </div>
        </div>
        <div className="support-illustration">
          <img src={Support} alt="support me if you want" />
        </div>
      </div>
    </div>
  );
}

export default Niche;
