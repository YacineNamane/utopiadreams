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
      name: "4K Anime Wallpaper Pack | Featuring the Character of Your Choice | UtopiaDreams",
      images: [
        require("../assets/UDImages/SS1.png"),
        require("../assets/UDImages/SS2.png"),
        require("../assets/UDImages/SS3.png"),
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
        <h1>UtopiaDreams Shop</h1>
        <p>
          I’ve been thinking about launching a shop in the future, and I want to
          make sure it truly resonates with this community. Your feedback will
          help shape what could come next <br />
          what kind of products or designs would you love to see?
          <br />
          <span> "Your Feedback" </span>will directly shape what’s coming next.
          Let me know !
        </p>
        <NavLink to={"/Contact"}> Give Your Feedback</NavLink>
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
