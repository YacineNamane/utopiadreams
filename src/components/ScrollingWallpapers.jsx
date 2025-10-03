import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MAX_IMAGES = 30;

const ScrollingWallpapers = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.slice(0, MAX_IMAGES));
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {images.concat(images).map((image, index) => (
          <div key={index} className="wallpaper-item">
            <img
              src={image.src}
              alt={image.name || image.src}
              loading="lazy"
              style={{ objectFit: "cover", width: "225px", height: "95%" }}
            />
            <NavLink
              to={`/ArtworkDetails/${
                image.name || encodeURIComponent(image.src)
              }`}
              className="get-button"
            >
              Get this one
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingWallpapers;
