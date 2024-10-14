import { useEffect } from "react";
import AOS from "aos";
import ContritubeG from "../assets/UDImages/Contribute.gif";
import ContributeImg from "../assets/UDImages/Contribute.png";
function Donate() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="contribute-container">
      <div className="donate-wrapper" id="donatetalk">
        <h2 data-aos="fade-up"> If you would like to support </h2>
        <p>
          <span data-aos="fade-up"> Support the Project.</span> This project has
          been an idea I've had for a long time, and now that I'm a freelance
          web developer, AI artist , I finally have the skills to bring it to
          life. I don't make any money from these wallpapers – it's purely a
          passion project. The only way to support me and help keep this site
          running is through donations. If you enjoy what I’ve built and want to
          contribute, I’d really appreciate it!
        </p>
      </div>
      <div className="donate-section-flex" data-aos="fade-up">
        <div className="form-donate-container">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="8B6T5L6JRV38G"
            />
            <input
              className="donate-button-gif"
              type="image"
              src={ContritubeG}
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_FR/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
        <div className="donate-img" id="donate">
          {" "}
          <img src={ContributeImg} alt="donnate-img" />
        </div>
      </div>
    </div>
  );
}
export default Donate;
