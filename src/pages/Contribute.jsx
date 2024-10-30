import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import PhoneBanner from "../components/PhoneBanner";
import Donate from "../components/Donate";
import SocialsSection from "../components/SocialsSection";
import Patreon from "../components/Patreon";
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
      <PhoneBanner />
      <Donate />
      <Patreon />
      <SocialsSection />
      <Footer />
    </div>
  );
}
export default Contribute;
