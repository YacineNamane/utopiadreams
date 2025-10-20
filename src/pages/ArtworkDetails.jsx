import React, { Suspense } from "react";
import Loader from "../components/Loader";

const DefaultHeader = React.lazy(() => import("../components/DefaultHeader"));
const PhoneBanner = React.lazy(() => import("../components/PhoneBanner"));
const WallpapersDetails = React.lazy(() =>
  import("../components/WallpapersDetails")
);
const ScrollingWallpapers = React.lazy(() =>
  import("../components/ScrollingWallpapers")
);
const SocialsSection = React.lazy(() => import("../components/SocialsSection"));
const Footer = React.lazy(() => import("../components/Footer"));

function ArtworkDetails() {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            {" "}
            <Loader />{" "}
          </div>
        }
      >
        <DefaultHeader />
        <PhoneBanner />
        <WallpapersDetails />
        <ScrollingWallpapers />
        <SocialsSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default ArtworkDetails;
