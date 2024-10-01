import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import filtersicon from "../assets/UDImages/settings.png";
import closeicon from "../assets/UDImages/cross.png";

const GenerateWallpapers = ({ initialFilter }) => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [filter, setFilter] = useState(initialFilter || "all");
  const [transitioning, setTransitioning] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
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
    AOS.init({
      duration: 1000, // Durée de l'animation (1 seconde)
      once: true, // Animation déclenchée une seule fois
    });
  }, []);

  useEffect(() => {
    if (initialFilter) {
      setFilter(initialFilter);
    }
  }, [initialFilter]);

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
      {/* Bouton pour ouvrir/fermer les filtres */}

      <div className="filter-button-box">
        <button
          className="toggle-filters-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span>Filters</span>
          <img
            src={showFilters ? closeicon : filtersicon}
            className={showFilters ? "rotated" : ""}
            alt="set filters"
          />{" "}
        </button>
      </div>

      {/* Affichage des filtres si showFilters est true */}
      {showFilters && (
        <div className="filters" data-aos="fade-up">
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
          <button onClick={() => setFilter("classic")}>
            <span>Classic</span>
          </button>
        </div>
      )}

      <div
        ref={gridRef}
        className={`wallpapers-grid ${!transitioning ? "visible" : ""}`}
      >
        {filteredImages.map((image) => (
          <div key={image.src} className="wallpaper-item">
            <img src={image.src} alt={image.name} loading="lazy" />
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
