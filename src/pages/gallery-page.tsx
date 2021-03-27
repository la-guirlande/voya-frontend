import React from 'react'
import Gallery from '../components/Gallery/gallery'

const GalleryPage = () => {

  const images = [
    './img/mountain.jpg',
    './img/mountain.jpg',
    './img/mountain.jpg',
    './img/mountain.jpg',
    './img/mountain.jpg',
  ];

  return (
    <div className="bg-black">
      <Gallery images={images}/>
    </div>
  )
}

export default GalleryPage
