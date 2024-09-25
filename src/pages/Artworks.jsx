import { useLocation } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import GenerateWallpapers from "../components/GenerateWallpapers";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Artworks() {
  const location = useLocation();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter");
    if (filterParam) {
      setFilter(filterParam);
    } else {
      setFilter("all");
    }
  }, [location]);

  return (
    <div>
      <DefaultHeader />
      <GenerateWallpapers initialFilter={filter} />
      <Footer />
    </div>
  );
}

export default Artworks;
