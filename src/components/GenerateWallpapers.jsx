import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const GenerateWallpapers = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  const [filter, setFilter] = useState("all");
  const [transitioning, setTransitioning] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  useEffect(() => {
    setTransitioning(true);

    const newFilteredImages =
      filter === "all"
        ? images
        : images.filter((image) => image.category === filter);

    setTimeout(() => {
      setFilteredImages(newFilteredImages);
      setTransitioning(false);
    }, 600);
  }, [filter, images]);

  return (
    <div className="wallpapers-container">
      <div className="filters">
        <button onClick={() => setFilter("all")}>
          <span>All</span>
        </button>
        <button onClick={() => setFilter("utopia")}>
          <span>Utopia</span>
        </button>
        <button onClick={() => setFilter("anime")}>
          <span>Anime</span>
        </button>
        <button onClick={() => setFilter("cats")}>
          <span>Cats</span>
        </button>
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
