import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import Donate from "../components/Donate";
import SocialsSection from "../components/SocialsSection";
import Footer from "../components/Footer";

function Contribute() {
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
      <Donate />
      <SocialsSection />
      <Footer />
    </div>
  );
}
export default Contribute;
