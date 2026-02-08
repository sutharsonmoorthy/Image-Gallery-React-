import React from "react";
import ImageCard from "./ImageCard";
import "../index.css";

const ImgGrid = ({ images }) => {
  return (
    <div className="gallery">
      <div className="grid">
        {images.map((item) => (
          <ImageCard
            key={item.name}
            src={item.src}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgGrid;