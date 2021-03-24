import React from 'react'

interface IGalleryCardProps{
  image: string;
}

const GalleryCard:React.FC<IGalleryCardProps> = ({image}) => {
  return (
    <div
      className="relative"
    >
      <div className="h-42 w-64">
        <img src={image} alt="" />
      </div>
      
    </div>
  );
}

export default GalleryCard
