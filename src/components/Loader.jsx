import React from "react";
import LoadingG from "../assets/UDImages/LoadingGIF.webp";

const Loader = () => {
  return (
    <div className="loader">
      <div className="load-illustation">
        <img src={LoadingG} alt="Loading gif" />
      </div>
    </div>
  );
};

export default Loader;
