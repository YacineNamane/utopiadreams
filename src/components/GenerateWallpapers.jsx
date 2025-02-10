import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import Gallery from "react-photo-gallery";
import filtersicon from "../assets/UDImages/settings.png";
import closeicon from "../assets/UDImages/cross.png";
import Loader from "./Loader";

const GenerateWallpapers = ({ initialFilter }) => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [filter, setFilter] = useState(initialFilter || "all");
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des images:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (initialFilter) {
      setFilter(initialFilter);
    }
  }, [initialFilter]);

  useEffect(() => {
    setLoading(true);
    const newFilteredImages =
      filter === "all"
        ? images
        : images.filter((image) => image.category === filter);
    setFilteredImages(newFilteredImages);
    setTimeout(() => setLoading(false), 600);
  }, [filter, images]);

  const photos = filteredImages.map((image) => ({
    src: image.src,
    name: image.name || image.src,
    width: 0.2,
    height: 0.4,
  }));

  const renderImageWithButton = (photo) => {
    return (
      <div className="wallpaper-item" key={photo.name} data-aos="fade-up">
        <img key={photo.src} src={photo.src} alt={photo.src} />
        <NavLink to={`/ArtworkDetails/${photo.name}`} className="get-button">
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
          <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            <span>All</span>
          </button>
          <button id="ud-filter" onClick={() => setFilter("realistic")}>
            <span>UtopiaDreams</span>
          </button>
          <button
            className={`filter-button ${filter === "anime" ? "active" : ""}`}
            onClick={() => setFilter("anime")}
          >
            <span>Bluelock</span>
          </button>
          <button
            className={`filter-button ${filter === "cats" ? "active" : ""}`}
            onClick={() => setFilter("cats")}
          >
            <span>Cats</span>
          </button>
          <button
            className={`filter-button ${filter === "utopia" ? "active" : ""}`}
            onClick={() => setFilter("utopia")}
          >
            <span>Utopia</span>
          </button>

          <button
            className={`filter-button ${filter === "classic" ? "active" : ""}`}
            onClick={() => setFilter("classic")}
          >
            <span>Classic</span>
          </button>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <div className="wallpapers-grid">
          <Gallery
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            photos={photos}
            renderImage={({ photo, index }) => renderImageWithButton(photo)}
          />
        </div>
      )}
    </div>
  );
};

export default GenerateWallpapers;
