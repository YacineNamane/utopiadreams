import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WallpaperPage = () => {
  const { id } = useParams(); // Obtenir l'ID du wallpaper depuis l'URL
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

  if (!wallpaper) return <div>Loading...</div>;

  return (
    <div className="wallpaper-page">
      <div className="wallpaper-tag">
        <h2>{wallpaper.category}</h2>
      </div>
      <div className="img-details-container">
        <img src={wallpaper.src} alt={wallpaper.name} />
      </div>
      <div className="download-button-container">
        <a
          href={wallpaper.src}
          download={wallpaper.name}
          className="download-button"
          title="Download"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default WallpaperPage;
