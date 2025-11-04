import React, { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import AOS from "aos";
import Gallery from "react-photo-gallery";
import filtersicon from "../assets/UDImages/settings.png";
import closeicon from "../assets/UDImages/cross.png";
import Loader from "./Loader";

const GenerateWallpapers = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";

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
      <h1> Utopiadreams | Wallpapers 4K</h1>
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
            onClick={() => setSearchParams({ filter: "all" })}
          >
            <span>All</span>
          </button>
          <button
            className={`filter-button ${
              filter === "One Piece" ? "active" : ""
            }`}
            onClick={() => setSearchParams({ filter: "One Piece" })}
          >
            <span>One Piece</span>
          </button>
          <button
            className={`filter-button ${filter === "Bluelock" ? "active" : ""}`}
            onClick={() => setSearchParams({ filter: "Bluelock" })}
          >
            <span>Bluelock</span>
          </button>

          <button
            className={`filter-button ${
              filter === "DemonSlayer" ? "active" : ""
            }`}
            onClick={() => setSearchParams({ filter: "DemonSlayer" })}
          >
            <span>Demon Slayer</span>
          </button>

          <button
            className={`filter-button ${filter === "Dandadan" ? "active" : ""}`}
            onClick={() => setSearchParams({ filter: "Dandadan" })}
          >
            <span>Dandadan</span>
          </button>

          <button
            className={`filter-button ${filter === "HxH" ? "active" : ""}`}
            onClick={() => setSearchParams({ filter: "HxH" })}
          >
            <span>Hunter x Hunter</span>
          </button>
          <button
            className={`filter-button ${filter === "JJK" ? "active" : ""}`}
            onClick={() => setSearchParams({ filter: "JJK" })}
          >
            <span>Jujutsu Kaisen</span>
          </button>
          <button
            className={`filter-button ${
              filter === "Solo Leveling" ? "active" : ""
            }`}
            onClick={() => setSearchParams({ filter: "Solo Leveling" })}
          >
            <span>Solo Leveling</span>
          </button>
          <button
            className={`filter-button ${filter === "Arcane" ? "active" : ""}`}
            onClick={() => setSearchParams({ filter: "Arcane" })}
          >
            <span>Arcane | League</span>
          </button>
          <button
            className={`filter-button ${filter === "Variety" ? "active" : ""}`}
            onClick={() => setSearchParams({ filter: "Variety" })}
          >
            <span>Others</span>
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
