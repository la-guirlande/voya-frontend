import React from 'react'
import Gallery from '../components/Gallery/gallery'

interface IGalleryPageProps {
  city: string;
  country: string;
  startDate: Date;
  endDate: Date
}

const GalleryPage: React.FC<IGalleryPageProps> = ({ city, country, startDate, endDate }) => {

  const images = [
    './img/mountain.jpg',
    './img/mountain.jpg',
    './img/mountain.jpg',
    './img/mountain.jpg',
    './img/mountain.jpg',
  ];

  const formatDate = (date: Date) => {
    let parsedDate = date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return parsedDate
  };

  return (
    <div className="flex flex-col">
      <div className="bg-black">
        <div className="text-white text-2xl text-center pt-4 pb-2 font-montserrat">
          Votre voyage à {city}, {country}
        </div>
        <div className="text-gray-300 text-base text-center pb-4 pt-2 font-montserrat " >
          Du {formatDate(startDate)} au {formatDate(endDate)}
        </div>
        <div className="px-40">
          <Gallery images={images} />
        </div>
      </div>
    </div>
  )
}

export default GalleryPage
