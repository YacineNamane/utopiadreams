import DefaultHeader from "../components/DefaultHeader";
import PhoneBanner from "../components/PhoneBanner";
import WallpapersDetaiils from "../components/WallpapersDetails";
import ScrollingWallpapers from "../components/ScrollingWallpapers";
import SocialsSection from "../components/SocialsSection";
import Footer from "../components/Footer";

function ArtworkDetails() {
  return (
    <div>
      <DefaultHeader />
      <PhoneBanner />
      <WallpapersDetaiils />
      <ScrollingWallpapers />
      <SocialsSection />
      <Footer />
    </div>
  );
}
export default ArtworkDetails;
