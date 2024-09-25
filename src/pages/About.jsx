import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
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
      <Footer />
    </div>
  );
}
export default About;
