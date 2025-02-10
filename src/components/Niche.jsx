import { NavLink } from "react-router-dom";
import X from "../assets/UDImages/X.png";
import Support from "../assets/UDImages/HelpFrenn.png";
import LeftAds from "./LeftAds";
import RightAds from "./RightAds";
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
              I take pride in reimagining and customizing anime cutscenes into
              the unique wallpapers featured on this site. Each wallpaper is
              carefully crafted using advanced editing software , ensuring a
              seamless and high-quality fit for your phone screen.{" "}
            </p>
            <p>
              Please note that the wallpapers are based on scenes from anime,
              carefully curated and edited to bring out their visual appeal as
              phone backgrounds. These works are shared for fans to enjoy and
              celebrate the beauty of anime artistry.
            </p>{" "}
          </div>
          <div className="paragraph-wrapper-niche">
            <p>
              <span>
                Please note that this website does not sell any wallpapers.
              </span>{" "}
              <br />
              Follow my X account to stay updated and never miss new content!
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
            </ul>
          </div>
        </div>
      </div>
      <div className="paragraph-wrapper-spacial" id="support">
        <LeftAds />
        <div className="support-text-container">
          <h2 data-aos="fade-up">Support | Contribute</h2>
          <div className="paragraph-wrapper-box">
            <p>
              If you like the idea of this project and want to support me for
              the work i put into this as{" "}
              <span>Digital Creator | Web Developper </span> ! I rely on your
              donations to keep this project going{" "}
              <NavLink data-aos="fade-up" to={"/Contribute"}>
                Contribute to this project
              </NavLink>
            </p>
          </div>
        </div>
        <div className="support-illustration">
          <img src={Support} alt="support me if you want" />
        </div>
        <RightAds />
      </div>
    </div>
  );
}

export default Niche;
