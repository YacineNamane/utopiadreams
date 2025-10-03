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
          href="https://buymeacoffee.com/utopiadreams/gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> Membership </span>
        </a>
      </div>
    </div>
  );
};

export default Patreon;
