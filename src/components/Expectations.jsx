import { useEffect } from "react";
import AOS from "aos";

function Expectations() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="expectations-container" data-aos="fade-up" id="expectation">
      <h2>What to Expect</h2>
      <div className="paragraph-wrapper">
        <p>
          Welcome to <span data-aos="fade-up">UtopiaDreams</span>, Here you will
          find unique wallpapers from anime cutscenes and other visuals. Each
          design is carefully Crafted to capture the distinct aesthetic that
          defines our site .
        </p>
      </div>
      <div className="paragraph-wrapper">
        <p>
          We've organized the wallpapers into categories like Utopia, Anime, and
          more, making it easy for you to browse. When you click{" "}
          <span>"Get this one"</span>, you’ll see a preview of how the wallpaper
          will appear on a phone screen, helping you visualize the design before
          downloading.
        </p>
      </div>
    </div>
  );
}

export default Expectations;
