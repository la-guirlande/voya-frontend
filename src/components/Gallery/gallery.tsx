import { motion } from 'framer-motion';
import React, { useState } from 'react';
import GalleryCard from './gallery-card';

interface IGalleryProps{
  images: string[]
}

const Gallery:React.FC<IGalleryProps> = ({images}) => {

  return (
    <div className="grid grid-cols-2 gap-1">
      {images &&
        images.map((imageUrl, index) => (
          <div
          key={index}
            >
            <GalleryCard
              image={imageUrl}
            />
          </div>
        ))}
    </div>
  )
}


export default Gallery;
