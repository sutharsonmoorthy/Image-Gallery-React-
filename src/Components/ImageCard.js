import React from "react";

const ImageCard = ({ src, name }) => {
  return (
    <div className="image-card">
      <img src={src} alt={name} className="grid-image" />
      <p className="image-name">{name}</p>
    </div>
  );
};

export default ImageCard;