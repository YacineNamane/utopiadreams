import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import PhoneBanner from "../components/PhoneBanner";
import AboutTheProject from "../components/AboutTheProject";
import SocialsSection from "../components/SocialsSection";
import Footer from "../components/Footer";

function About() {
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
      <DefaultHeader />
      <PhoneBanner />
      <AboutTheProject />
      <SocialsSection />
      <Footer />
    </div>
  );
}
export default About;
