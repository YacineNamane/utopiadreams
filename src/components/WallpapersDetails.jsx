import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  if (!wallpaper) return <div>Loading...</div>;

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
        <h2>{wallpaper.category}</h2>
      </div>
      <div className="img-details-container">
        <img src={wallpaper.src} alt={wallpaper.name} />
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
    </div>
  );
};

export default WallpaperPage;
