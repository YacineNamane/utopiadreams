import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import discord from "../assets/UDImages/Discord.png";
import AOS from "aos";

function Requests() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="expectations-container" data-aos="fade-up" id="expectation">
      <h2>Requests Open !</h2>
      <div className="paragraph-wrapper">
        <p>
          Want a <span>Custom Wallpaper</span> from a specific{" "}
          <span>Anime scene</span> ? Send me a DM on X with a{" "}
          <span>Screenshot of The Scene</span> you want , & I’ll turn it to a{" "}
          <span>Wallpaper</span> for a small fee. <br />
          <span>
            <NavLink
              data-aos="fade-up"
              to="https://x.com/UtopiaDrea42952"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request A Wallpaper Here
            </NavLink>
          </span>{" "}
          <br />
          <span className="discord-span">
            You can also join my Discord here :{" "}
            <a
              href="https://discord.gg/2wkbdBxz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              <img
                src={discord}
                alt="Discord"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <span style={{ textDecoration: "underline" }}></span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Requests;
