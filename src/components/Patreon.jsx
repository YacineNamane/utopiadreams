import React from "react";
import PatreonGif from "../assets/UDImages/patreongif.webp";

const Patreon = () => {
  return (
    <div className="patreon-section" data-aos="fade-up">
      <div className="patreon-container">
        <img src={PatreonGif} alt="Patreon" />
      </div>
      <div className="button-patreon">
        <a
          href="https://www.patreon.com/utopiadreams"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Visite Patreon</span>
        </a>
      </div>
    </div>
  );
};

export default Patreon;
