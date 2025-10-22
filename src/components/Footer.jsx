import { NavLink } from "react-router-dom";
import xfooter from "../assets/UDImages/xfooter.png";
import tiktok from "../assets/UDImages/tik-tok.png";
import insta from "../assets/UDImages/instagram.png";
import linkdin from "../assets/UDImages/linkedin.png";
import logoUD from "../assets/UDImages/UtopiaDreams.png";

function Footer() {
  return (
    <footer>
      <div className="footer-ws-info">
        <div className="popup-window">
          <div className="main-footer-info">
            <div className="footer-logo">
              <img src={logoUD} alt="UtopiaDreams Logo" />
            </div>
            <div className="footer-text">
              <p>Phone-Wallpapers</p>{" "}
            </div>
          </div>

          <div className="socials-footer">
            <div className="socials-footer-tag">
              <a
                href="https://x.com/UtopiaDrea42952"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={xfooter} alt="twitter" />
              </a>
            </div>
            <div className="socials-footer-tag">
              <a
                href="https://buymeacoffee.com/utopiadreams/gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkdin} alt="patreon" />
              </a>
            </div>
            <div className="socials-footer-tag">
              <a
                href="https://fr.pinterest.com/utopiadreamsDesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={insta} alt="pinterest" />
              </a>
            </div>
            <div className="socials-footer-tag">
              <a
                href="https://www.tiktok.com/@utopiadreams1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={tiktok} alt="tiktok" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-talk">
          {" "}
          <div className="footer-talk-title">
            <h3>Hello</h3>
          </div>
          <div className="socials-footer">
            <div className="socials-footer-tag">
              <a
                href="https://buymeacoffee.com/utopiadreams/gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkdin} alt="patreon" />
              </a>
            </div>
            <div className="socials-footer-tag">
              <a
                href="https://x.com/UtopiaDrea42952"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={xfooter} alt="linkdin logo" />
              </a>
            </div>
          </div>
          <div className="footer-talk-p">
            <p>
              Who is behind this | <span>Project</span>? <br /> As a passionate{" "}
              <span> Digital Creator</span> & Web Developer, I created{" "}
              <span> UtopiaDreams</span> to bring a "Unique Touch" to your
              mobile screens. <br />
              I’m always open to <span>Collaborations</span> feel free to reach
              out through my <span>Socials</span>!<span> Links </span>are down
              below.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-footer-container">
        <div className="rights-footer-container">
          <div>
            <NavLink to="/MentionsLégales">Legal notice</NavLink>
          </div>
          <div>
            <span>© 2025 UtopiaDreams | All rights reserved.</span>
          </div>
        </div>
        <div className="location-container">
          <div>
            {" "}
            <span>utopiadreams.pro@gmail.com</span>
          </div>
          <div>
            <span>France , Paris</span>
          </div>
        </div>
        <div className="socials-footer-bottom">
          <div className="socials-footer-tag">
            <a
              href="https://x.com/UtopiaDrea42952"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={xfooter} alt="twitter" />
            </a>
          </div>
          <div className="socials-footer-tag">
            <a
              href="https://www.linkedin.com/in/namane-yacine-542398252/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={linkdin} alt="linkdin" />
            </a>
          </div>
          <div className="socials-footer-tag">
            <a
              href="https://fr.pinterest.com/utopiadreamsDesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={insta} alt="pinterest" />
            </a>
          </div>
          <div className="socials-footer-tag">
            <a
              href="https://www.tiktok.com/@utopiadreams1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={tiktok} alt="tiktok" />{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
