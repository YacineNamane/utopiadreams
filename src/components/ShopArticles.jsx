import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ShopArticles = () => {
  const [currentImages, setCurrentImages] = useState([0, 0, 0, 0]);
  const [intervals, setIntervals] = useState([null, null, null, null]);
  const [fading, setFading] = useState([false, false, false, false]);

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
      name: "Bluelock Poster AnimeEdits - Kaiser | utopiadreams",
      images: [
        require("../assets/UDImages/SS1.png"),
        require("../assets/UDImages/SS2.png"),
        require("../assets/UDImages/SS3.png"),
      ],
    },
    {
      name: "Clear Case for iPhone® - Isagi | utopiadreams",
      images: [
        require("../assets/UDImages/SM1.png"),
        require("../assets/UDImages/SM2.png"),
        require("../assets/UDImages/SM3.png"),
      ],
    },
    {
      name: "Clear Case for Samsung® - SL | utopiadreams",
      images: [
        require("../assets/UDImages/PST1.png"),
        require("../assets/UDImages/PST2.png"),
        require("../assets/UDImages/PST3.png"),
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    const imageCount = products[index].images.length;

    const intervalId = setInterval(() => {
      setFading((prevFading) => {
        const newFading = [...prevFading];
        newFading[index] = true;
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
          newFading[index] = false;
          return newFading;
        });
      }, 500);
    }, 1400);

    const newIntervals = [...intervals];
    newIntervals[index] = intervalId;
    setIntervals(newIntervals);
  };

  const handleMouseLeave = (index) => {
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
          I'm excited to announce that the shop is in the works, and we’re
          committed to creating something that truly resonates with our
          community. To make sure I offer what you want to see, I’d love to hear
          your thoughts ! <br />
          What products or designs are you most excited about? <br />
          <span> "Your Feedback" </span>will directly shape what’s coming next.
          Let me know !
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
