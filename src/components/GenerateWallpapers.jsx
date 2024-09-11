// src/components/Wallpapers.jsx

import React, { useState, useEffect } from "react";

// Composant principal
const GenerateWallpapers = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [filter, setFilter] = useState("all");

  // Charger les images depuis le fichier JSON
  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  // Filtrer les images en fonction de la catégorie
  useEffect(() => {
    if (filter === "all") {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter((image) => image.category === filter));
    }
  }, [filter, images]);

  return (
    <div className="wallpapers-container">
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("utopia")}>Utopia</button>
        <button onClick={() => setFilter("anime")}>Anime</button>
        <button onClick={() => setFilter("cats")}>Cats</button>
      </div>
      <div className="wallpapers-grid">
        {filteredImages.map((image) => (
          <div key={image.src} className="wallpaper-item">
            <img src={image.src} alt={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateWallpapers;
