import React from "react";

export default function GalleryBox({ images }) {
  return (
    <div className="container py-3">
      <div className="row">
        {images.map((image, index) => (
          <div  key={index} className="col-lg-3 mb-3">
            <a href={image} data-fancybox="gallery">
              <img src={image} alt={index} className="gallery-image" loading="lazy"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
