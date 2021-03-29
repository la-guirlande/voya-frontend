import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import Gallery from '../components/Gallery/gallery'
import { Map } from '../components/map/map';
import AuthenticationContext from '../contexts/authentication-context';
import { DestinationData } from '../util/types/data-types';

interface Params {
  journeyId: string;
}

const GalleryPage: React.FC = () => {
  const { journeyId } = useParams<Params>();
  const { authUser } = useContext(AuthenticationContext);

  const journey = authUser.journeys.find(journey => journey.id === journeyId);

  return authUser && (
    <div className="flex flex-col">
      <div className="bg-black">
        <div className="text-white text-2xl text-center pt-4 pb-2 font-montserrat">
          Votre voyage à {journey.destinations[0].city}
        </div>
        {/* <div className="text-gray-300 text-base text-center pb-4 pt-2 font-montserrat " >
          Du {formatDate(startDate)} au {formatDate(endDate)}
        </div> */}
        <div className="px-40">
          <Gallery images={journey.destinations[0].images.map(img => img.url)} />
        </div>
      </div>
      <Map height={500} journey={journey} />
    </div>
  )
}

export default GalleryPage
