import React from "react";

export default function SectionBanner({ title, image }) {
  return (
    <div className="section-banner" style={{ background: `url(${image})` }}>
      <h1>{title}</h1>
    </div>
  );
}
