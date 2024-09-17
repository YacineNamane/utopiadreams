import Header from "../components/Header";
import ScrollingWallpapers from "../components/ScrollingWallpapers";
import Expectations from "../components/Expectations";
import Niche from "../components/Niche";
import CategoryIntro from "../components/CategoryIntro";

function Home() {
  return (
    <div>
      <Header />
      <Expectations />
      <ScrollingWallpapers />
      <Niche />
      <CategoryIntro />
    </div>
  );
}
export default Home;
