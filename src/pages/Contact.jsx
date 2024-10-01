import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import ContactForm from "../components/ContactForm";
import SocialsSection from "../components/SocialsSection";
import Footer from "../components/Footer";

function Contact() {
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
      <ContactForm />
      <SocialsSection />
      <Footer />;
    </div>
  );
}
export default Contact;
