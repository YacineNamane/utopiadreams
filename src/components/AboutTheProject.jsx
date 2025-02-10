import { useEffect } from "react";
import AOS from "aos";
function AboutTheProject() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="about-main-container">
      <h2 data-aos="fade-up" id="aboutproject">
        UtopiaDreams Project
      </h2>
      <div className="about-the-project">
        <p>
          Creating <span>"UtopiaDreams"</span> started as a simple idea but grew
          naturally from my dual passions as a <span>Digital Creator</span> &
          Web Developer. I focus on turning anime cutscenes into stunning
          wallpapers, carefully adapting them to a format that feels fresh,
          unique, and visually captivating. It’s not just about creating
          wallpapers , it’s about <span>Enhancing </span>daily experiences with
          a <span>thoughtfully</span>,curated visuals that turn every phone
          screen into a small <span>canvas</span> of inspiration.
        </p>
        <p>
          My inspiration comes from various sources, with <span>"Anime"</span>{" "}
          being a key influence. These inspirations guide my process of
          <span> reimagining</span> & <span>customizing</span> scenes into
          wallpapers that evoke a sense of wonder and creativity. Whether you’re
          looking for something serene or visually dynamic, my goal is to
          provide Wallpapers that feel <span>Fresh</span> , <span>Unique</span>{" "}
          & <span> Different</span> from what you’re used to seeing.
        </p>
      </div>
      <h2 data-aos="fade-up" id="aboutme">
        About Me
      </h2>
      <div className="about-me">
        <p>
          As a passionate <span>Digital Creator </span>| Web Developer , and
          Freelance Enthusiast, I thrive at the intersection of{" "}
          <span>Creativity</span> & technology. Over the years, I’ve honed my
          skills to not only deliver high-quality <span>Web Experiences</span>{" "}
          while reimagining anime scenes into stunning <span>wallpapers.</span>{" "}
          With a deep-rooted interest in both <span>"Design"</span> &{" "}
          <span>"Coding"</span>, I constantly seek innovative ways to blend
          these disciplines, ensuring that each project I undertake is both{" "}
          <span>Functional</span> & <span>Visually Captivating</span>.
        </p>
      </div>
    </div>
  );
}
export default AboutTheProject;
