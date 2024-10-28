import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Mockup from "../assets/UDImages/Mockup.jpg";
import xfooter from "../assets/UDImages/xfooter.png";
import tiktok from "../assets/UDImages/tik-tok.png";
import insta from "../assets/UDImages/instagram.png";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

const WallpaperPage = () => {
  const { id } = useParams();
  const [wallpaper, setWallpaper] = useState(null);

  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => {
        const foundWallpaper = data.find((img) => img.name === id);
        setWallpaper(foundWallpaper);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, [id]);

  if (!wallpaper)
    return (
      <div>
        <Loader />
      </div>
    );

  const downloadImage = async (url, name) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", name);

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    } catch (error) {
      console.error("Erreur lors du téléchargement de l’image", error);
    }
  };
  return (
    <div className="wallpaper-page">
      <div className="wallpaper-tag">
        <h2>
          <span>Take a look</span> | This is a preview of how your wallpaper
          will appear on a phone screen
        </h2>
      </div>
      <div className="mockup-container">
        <img className="phone-mockup" src={Mockup} alt="Phone Mockup" />
        <img
          className="wallpaper-in-mockup"
          src={wallpaper.src}
          alt={wallpaper.name}
        />
      </div>
      <div className="download-button-container">
        <button
          className="download-button"
          title="Download"
          onClick={() => downloadImage(wallpaper.src, wallpaper.name)}
        >
          Download
        </button>
      </div>
      <div className="tag-details-wpp">
        Tags | <span> {wallpaper.category}</span>
      </div>
      <div className="support-details-wpp">
        <p>If you would like to support me you can |</p>
        <NavLink to="/Contribute">
          <span>Donate</span>
        </NavLink>
      </div>
      <div className="support-details-socials">
        <p>Follow my socials and stay Updated | </p>
        <div className="socials-wpp-details">
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
    </div>
  );
};

export default WallpaperPage;
