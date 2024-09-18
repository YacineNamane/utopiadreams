import xfooter from "../assets/UDImages/xfooter.png";
import tiktok from "../assets/UDImages/tik-tok.png";
import insta from "../assets/UDImages/instagram.png";
import linkdin from "../assets/UDImages/linkedin.png";
import gh from "../assets/UDImages/github.png";

function Footer() {
  return (
    <footer>
      <div className="footer-ws-info">
        <div className="popup-window">
          <div className="main-footer-info">
            <div className="footer-logo"></div>
            <div className="footer-text">
              <p>Phone Wallpapers</p>{" "}
            </div>
          </div>

          <div className="socials-footer">
            <div className="socials-footer-tag">
              <img src={xfooter} alt="" />
            </div>
            <div className="socials-footer-tag">
              <img src={linkdin} alt="" />
            </div>
            <div className="socials-footer-tag">
              <img src={insta} alt="" />
            </div>
            <div className="socials-footer-tag">
              <img src={tiktok} alt="" />
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
              <img src={linkdin} alt="linkdin logo" />
            </div>
            <div className="socials-footer-tag">
              <img src={gh} alt="linkdin logo" />
            </div>
          </div>
          <div className="footer-talk-p">
            <p>
              | Who is behind this project ? <br /> As a dedicated web developer
              , I've created UtopiaDreams to bring a touch of visual paradise to
              your mobile screens. <br /> You can reach out to me throw the
              links in the top for your futur projects
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
