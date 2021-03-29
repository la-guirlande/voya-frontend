import React from 'react'
import Gallery from '../components/Gallery/gallery'
import { DestinationData } from '../util/types/data-types';

interface IGalleryPageProps {
  destination: DestinationData;
}

const GalleryPage: React.FC<IGalleryPageProps> = ({ destination }) => {

  // const formatDate = (date: Date) => {
  //   let parsedDate = date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  //   return parsedDate
  // };

  return (
    <div className="flex flex-col">
      <div className="bg-black">
        <div className="text-white text-2xl text-center pt-4 pb-2 font-montserrat">
          Votre voyage à {destination.city}
        </div>
        {/* <div className="text-gray-300 text-base text-center pb-4 pt-2 font-montserrat " >
          Du {formatDate(startDate)} au {formatDate(endDate)}
        </div> */}
        <div className="px-40">
          <Gallery images={destination.images.map(img => img.url)} />
        </div>
      </div>
    </div>
  )
}

export default GalleryPage
