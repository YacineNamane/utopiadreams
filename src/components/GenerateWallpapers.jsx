import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const GenerateWallpapers = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  const [filter, setFilter] = useState("all");
  const [transitioning, setTransitioning] = useState(false); // État pour gérer la transition
  const gridRef = useRef(null);

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
    //  transition Fade
    setTransitioning(true);

    // Filtrer les images
    const newFilteredImages =
      filter === "all"
        ? images
        : images.filter((image) => image.category === filter);

    setTimeout(() => {
      setFilteredImages(newFilteredImages);
      setTransitioning(false); //
    }, 600);
  }, [filter, images]);

  return (
    <div className="wallpapers-container">
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("utopia")}>Utopia</button>
        <button onClick={() => setFilter("anime")}>Anime</button>
        <button onClick={() => setFilter("cats")}>Cats</button>
      </div>
      <div
        ref={gridRef}
        className={`wallpapers-grid ${!transitioning ? "visible" : ""}`}
      >
        {filteredImages.map((image) => (
          <div key={image.src} className="wallpaper-item">
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

export default GenerateWallpapers;
