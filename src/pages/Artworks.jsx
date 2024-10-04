import React, { Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DefaultHeader = React.lazy(() => import("../components/DefaultHeader"));
const PhoneBanner = React.lazy(() => import("../components/PhoneBanner"));
const GenerateWallpapers = React.lazy(() =>
  import("../components/GenerateWallpapers")
);
const Footer = React.lazy(() => import("../components/Footer"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <DefaultHeader />
        <PhoneBanner />
        <GenerateWallpapers initialFilter={filter} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Artworks;
