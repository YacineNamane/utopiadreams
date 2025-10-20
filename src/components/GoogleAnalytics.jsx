import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleAnalytics = ({ trackingId }) => {
  const location = useLocation();

  useEffect(() => {
    // Charger gtag.js si ce n'est pas déjà fait
    if (!window.gtag) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", trackingId, { send_page_view: false });
    }

    window.gtag("config", trackingId, {
      page_path: location.hash.replace("#", "") || "/",
    });
  }, [location, trackingId]);

  return null;
};

export default GoogleAnalytics;
