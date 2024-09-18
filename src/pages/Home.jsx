import Header from "../components/Header";
import ScrollingWallpapers from "../components/ScrollingWallpapers";
import Expectations from "../components/Expectations";
import Niche from "../components/Niche";
import CategoryIntro from "../components/CategoryIntro";
import Footer from "../components/Footer";

function Home() {
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
