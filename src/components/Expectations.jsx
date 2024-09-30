import { useEffect } from "react";
import AOS from "aos";
import X from "../assets/UDImages/X.png";

function Expectations() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation (1 seconde)
      once: true, // Animation déclenchée une seule fois
    });
  }, []);
  return (
    <div className="expectations-container" data-aos="fade-up" id="expectation">
      <h2>What to Expect</h2>
      <div className="paragraph-wrapper">
        <p>
          Welcome to <span data-aos="fade-up">UtopiaDreams</span>, where we
          curate wallpapers shared across platforms like{" "}
          <img src={X} alt="X logo" /> (formerly Twitter) and others. We've
          organized the wallpapers into different categories such as Utopia,
          Anime, and more for easy browsing.
        </p>
      </div>
      <div className="paragraph-wrapper">
        <p>
          You can explore each category and if you click on{" "}
          <span>"Get this one"</span>, you will see a preview of how the
          wallpaper will look on a phone screen. This preview helps you
          visualize the design on your device before downloading.
        </p>
      </div>
    </div>
  );
}

export default Expectations;
