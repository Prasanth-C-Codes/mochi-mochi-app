import React from 'react'
import SectionBanner from '../components/SectionBanner'
import { gallery, sectionBg } from '../database/db'
import GalleryBox from '../components/GalleryBox'

export default function Gallery() {
  return (
    <div>
        <SectionBanner title="Gallery" image={sectionBg} />
        <GalleryBox images={gallery} />
    </div>
  )
}