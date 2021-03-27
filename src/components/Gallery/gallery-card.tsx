import React from 'react'

interface IGalleryCardProps{
  image: string;
}

const GalleryCard:React.FC<IGalleryCardProps> = ({image}) => {
  return (
    <div
      className="relative"
    >
      <div className="">
        <img src={image} alt="" />
      </div>
      
    </div>
  );
}

export default GalleryCard
