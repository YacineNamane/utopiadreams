import { NavLink } from "react-router-dom";
import xfooter from "../assets/UDImages/xfooter.png";
import tiktok from "../assets/UDImages/tik-tok.png";
import insta from "../assets/UDImages/instagram.png";
import linkdin from "../assets/UDImages/linkedin.png";
import gh from "../assets/UDImages/github.png";
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
              <p>Phone Wallpapers</p>{" "}
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
                href="https://www.instagram.com/utopiadreamswallpapers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={insta} alt="instagram" />
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
                href="https://www.linkedin.com/in/namane-yacine-542398252/?trk=opento_sprofile_topcard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkdin} alt="linkdin logo" />
              </a>
            </div>
            <div className="socials-footer-tag">
              <a
                href="https://github.com/YacineNamane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gh} alt="linkdin logo" />
              </a>
            </div>
          </div>
          <div className="footer-talk-p">
            <p>
              | Who is behind this project ? <br /> As a dedicated Web Developer
              & Digital Artist , I've created UtopiaDreams to bring a touch of
              visual paradise to your mobile screens. <br /> You can reach out
              to me throw the links in the top for your futur projects
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
            <span>© 2024 UtopiaDreams | All rights reserved.</span>
          </div>
        </div>
        <div className="location-container">
          <div>
            {" "}
            <span>utopiadreams.pro@gmail.com</span>
          </div>
          <div>
            <span>France,Paris</span>
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
              href="https://www.instagram.com/utopiadreamswallpapers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={insta} alt="instagram" />
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
