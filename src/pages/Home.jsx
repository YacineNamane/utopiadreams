import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import PhoneBanner from "../components/PhoneBanner";
import Patreon from "../components/Patreon";
import Footer from "../components/Footer";

import React, { Suspense } from "react";

const ScrollingWallpapers = React.lazy(() =>
  import("../components/ScrollingWallpapers")
);
const Expectations = React.lazy(() => import("../components/Expectations"));
const Niche = React.lazy(() => import("../components/Niche"));
const CategoryIntro = React.lazy(() => import("../components/CategoryIntro"));
const SocialsSection = React.lazy(() => import("../components/SocialsSection"));

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <PhoneBanner />
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Expectations />
        <ScrollingWallpapers />
        <Niche />
        <Patreon />
        <CategoryIntro />
        <SocialsSection />
      </Suspense>

      <Footer />
    </div>
  );
}

export default Home;
