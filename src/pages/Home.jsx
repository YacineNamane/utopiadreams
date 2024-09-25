import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import ScrollingWallpapers from "../components/ScrollingWallpapers";
import Expectations from "../components/Expectations";
import Niche from "../components/Niche";
import CategoryIntro from "../components/CategoryIntro";
import Footer from "../components/Footer";

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
      <Header />
      <Expectations />
      <ScrollingWallpapers />
      <Niche />
      <CategoryIntro />
      <Footer />
    </div>
  );
}
export default Home;
