import React from 'react'
import Gallery from '../components/Gallery/gallery'

const GalleryPage = () => {

  const images = [
    './img/mountains.jpg',
    './img/mountains.jpg',
    './img/mountains.jpg',
    './img/mountains.jpg',
    './img/mountains.jpg'
  ];

  return (
    <div className="bg-black h-96">
      <Gallery images={images}/>
    </div>
  )
}

export default GalleryPage
