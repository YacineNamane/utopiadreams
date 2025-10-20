import { useEffect } from "react";
import AOS from "aos";
import ContritubeG from "../assets/UDImages/Contribute-txt.webp";
import ContributeImg from "../assets/UDImages/Contribute.webp";
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
          Digital Creator , Web Developer , I finally have the skills to bring
          it to life. I don't make any money from these wallpapers – it's purely
          a passion project. The only way to support me and help keep this site
          running is through donations. If you enjoy what I’ve built and want to
          contribute, I’d really appreciate it!
        </p>
      </div>
      <div className="donate-section-flex" data-aos="fade-up">
        <div className="form-donate-container">
          <a
            href="https://buymeacoffee.com/utopiadreams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="donate-button-gif"
              src={ContritubeG}
              alt="Support me on Buy Me a Coffee"
            />
          </a>
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
