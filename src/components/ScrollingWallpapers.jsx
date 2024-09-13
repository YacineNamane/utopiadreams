import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ScrollingWallpapers = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {images.concat(images).map((image, index) => (
          <div key={index} className="wallpaper-item">
            <img src={image.src} alt={image.name} />
            <NavLink
              to={`/ArtworkDetails/${image.name}`}
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
