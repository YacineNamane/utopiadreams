import { NavLink } from "react-router-dom";
import X from "../assets/UDImages/X.png";
import Support from "../assets/UDImages/HelpFrenn.png";
import { useEffect } from "react";
import AOS from "aos";

function Niche() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <div className="niche-container" data-aos="fade-up" id="niche">
        <h2>My Niche</h2>
        <div className="flex-box-org">
          <div className="paragraph-wrapper-niche">
            <p>
              I take pride in creating most of the wallpapers featured on this
              site. Each design is original and crafted with attention to
              detail. <br />
              As the artist, I hold full rights to these creations i made,
              ensuring they are unique and authentic. By downloading or using
              any of these wallpapers, you are supporting original artwork made
              with passion .
            </p>{" "}
          </div>
          <div className="paragraph-wrapper-niche">
            <p>
              Not only but you can find amazing content from other talented
              creators. We are simply organizing and sharing their works .
              <span>
                Please note that this website does not sell any wallpapers
              </span>{" "}
              . You can explore and support the creators directly in the
              following links
            </p>
            <ul>
              <li>
                <img src={X} alt="X logo" />

                <a
                  href="https://x.com/UtopiaDrea42952"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  | UtopiaDreams
                </a>
              </li>
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
      <div className="paragraph-wrapper-spacial" id="support">
        <div className="support-text-container">
          <h2 data-aos="fade-up">Support | Contribute</h2>
          <div className="paragraph-wrapper-box">
            <p>
              If you like the idea of this website and want to support me for
              the work i put into this project as <span>Web Developper</span>{" "}
              you can simply share this with your friends ! or Donate{" "}
              <NavLink data-aos="fade-up" to={"/Contribute"}>
                Contribute to this project
              </NavLink>
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
