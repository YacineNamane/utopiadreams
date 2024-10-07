import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import Gallery from "react-photo-gallery";
import filtersicon from "../assets/UDImages/settings.png";
import closeicon from "../assets/UDImages/cross.png";

const GenerateWallpapers = ({ initialFilter }) => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [filter, setFilter] = useState(initialFilter || "all");
  const [showFilters, setShowFilters] = useState(false);

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
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (initialFilter) {
      setFilter(initialFilter);
    }
  }, [initialFilter]);

  useEffect(() => {
    const newFilteredImages =
      filter === "all"
        ? images
        : images.filter((image) => image.category === filter);
    setFilteredImages(newFilteredImages);
  }, [filter, images]);

  // Préparer les images pour la galerie
  const photos = filteredImages.map((image) => ({
    src: image.src,
    width: 0.2, // Vous pouvez ajuster selon vos besoins
    height: 0.4, // Vous pouvez ajuster selon vos besoins
  }));

  // Fonction pour rendre chaque image avec un bouton
  const renderImageWithButton = (photo) => {
    return (
      <div className="wallpaper-item" key={photo.src}>
        <img src={photo.src} alt={photo.src} />
        <NavLink to={`/ArtworkDetails/${photo.src}`} className="get-button">
          Get this one
        </NavLink>
      </div>
    );
  };

  return (
    <div className="wallpapers-container">
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
          />
        </button>
      </div>

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

      {/* Enveloppez la galerie dans un conteneur centré */}
      <div className="wallpapers-grid">
        <Gallery
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center !important",
          }}
          photos={photos}
          renderImage={({ photo, index }) => renderImageWithButton(photo)}
        />
      </div>
    </div>
  );
};

export default GenerateWallpapers;
