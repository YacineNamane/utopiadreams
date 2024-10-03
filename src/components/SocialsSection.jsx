import SocialsG from "../assets/UDImages/socials-gifUD.gif";
import xfooter from "../assets/UDImages/xfooter.png";
import tiktok from "../assets/UDImages/tik-tok.png";
import insta from "../assets/UDImages/instagram.png";

function SocialsSection() {
  return (
    <div className="socials-section-Upannel">
      <div className="gif-container-socials">
        <img src={SocialsG} alt="Socials redirect" />
      </div>
      <div className="socials-footer-Upannel" data-aos="fade-up">
        <div className="socials-footer-Upannel-tag">
          <a
            href="https://x.com/UtopiaDrea42952"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={xfooter} alt="twitter" />
            <span>| Twitter</span>
          </a>
        </div>

        <div className="socials-footer-Upannel-tag">
          <a
            href="https://www.instagram.com/utopiadreamswallpapers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={insta} alt="instagram" />
            <span>| Instagram</span>
          </a>
        </div>
        <div className="socials-footer-Upannel-tag">
          <a
            href="https://www.tiktok.com/@utopiadreamswallpapers"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={tiktok} alt="tiktok" /> <span>| Tiktok</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default SocialsSection;
