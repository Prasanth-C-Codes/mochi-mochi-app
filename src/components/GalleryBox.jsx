import React from "react";

export default function GalleryBox({ images }) {
  return (
    <div className="container py-3">
      <div className="row">
        {images.map((image) => (
          <div className="col-lg-3 mb-3">
            <a href={image} data-fancybox="gallery">
              <img src={image} alt="image" className="gallery-image" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}