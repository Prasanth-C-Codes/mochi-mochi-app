import React from 'react'
import Slider from 'react-slick'
import { banners } from '../database/db'

export default function Banners() {
  return (
    <div><Slider autoplay={true} autoplaySpeed={2000} arrows={false}>
    {banners.map((banner, index) => (
      <div key={index}>
        <div className="banner-slider">
          <img src={banner.image} alt={banner.caption} className="w-100" />
          <h1 className="banner-caption">{banner.caption}</h1>
        </div>
      </div>
    ))}
    </Slider></div>
  )
}
