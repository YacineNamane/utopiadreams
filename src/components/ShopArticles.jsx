import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ShopArticles = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0]);
  const [intervals, setIntervals] = useState([null, null, null, null]);
  const [fading, setFading] = useState([false, false, false, false]); // Pour gérer le fading

  const products = [
    {
      name: "Clear Case for iPhone® | utopiadreams ",
      images: [
        require("../assets/UDImages/IC1.png"),
        require("../assets/UDImages/IC2.png"),
        require("../assets/UDImages/IC3.png"),
      ],
    },
    {
      name: "Stainless steel water bottle with a straw lid | utopiadreams",
      images: [
        require("../assets/UDImages/SS1.png"),
        require("../assets/UDImages/SS2.png"),
        require("../assets/UDImages/SS3.png"),
      ],
    },
    {
      name: "Clear Case for Samsung® | utopiadreams",
      images: [
        require("../assets/UDImages/SM1.png"),
        require("../assets/UDImages/SM2.png"),
        require("../assets/UDImages/SM3.png"),
      ],
    },
    {
      name: "Poster | utopiadreams",
      images: [
        require("../assets/UDImages/PST1.png"),
        require("../assets/UDImages/PST2.png"),
        require("../assets/UDImages/PST3.png"),
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    const imageCount = products[index].images.length;

    // Crée un intervalle pour faire défiler les images
    const intervalId = setInterval(() => {
      setFading((prevFading) => {
        const newFading = [...prevFading];
        newFading[index] = true; // Déclenche le fading
        return newFading;
      });

      setTimeout(() => {
        setCurrentImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[index] = (newImages[index] + 1) % imageCount;
          return newImages;
        });

        setFading((prevFading) => {
          const newFading = [...prevFading];
          newFading[index] = false; // Fin du fading
          return newFading;
        });
      }, 500); // La durée du fading correspond à la transition CSS
    }, 1400); // Change d'image toutes les 1,3 secondes

    const newIntervals = [...intervals];
    newIntervals[index] = intervalId;
    setIntervals(newIntervals);
  };

  const handleMouseLeave = (index) => {
    // Réinitialise l'image et supprime l'intervalle
    setCurrentImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = 0;
      return newImages;
    });

    clearInterval(intervals[index]);
    const newIntervals = [...intervals];
    newIntervals[index] = null;
    setIntervals(newIntervals);
  };

  // Nettoyage en cas de changement de composant (utile si tu changes de page)
  useEffect(() => {
    return () => {
      intervals.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [intervals]);

  return (
    <div>
      <div className="ud-store-info">
        <h2>UtopiaDreams Shop</h2>
        <p>
          We’re excited to announce that our shop is in the works, and we’re
          committed to creating something that truly resonates with our
          community. To make sure we offer what you want to see, we’d love to
          hear your thoughts ! <br />
          What products or designs are you most excited about? <br />
          What would make your shopping experience with us unforgettable?
          <br />
          <span> "Your Feedback" </span>will directly shape what’s coming next.
          Let us know below!
        </p>
        <NavLink to={"/Contact"}>GIVE YOUR FEEDBACK</NavLink>
      </div>
      <div className="shop-container">
        {products.map((product, index) => (
          <div
            key={index}
            className="product"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={product.images[currentImages[index]]}
              alt={product.name}
              className={`product-image ${
                fading[index] ? "fade-out" : "fade-in"
              }`}
            />
            <h3>{product.name}</h3>
            {/* Bulles de pagination */}
            <div className="dots-container">
              {product.images.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`dot ${
                    currentImages[index] === dotIndex ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopArticles;
