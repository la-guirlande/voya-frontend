import React from 'react'
import { useHistory } from 'react-router';
import { JourneyData } from '../../util/types/data-types';

interface ITripCardProps{
  journey: JourneyData;
}

const TripCard:React.FC<ITripCardProps> = ({ journey }) => {
  const history = useHistory();

  return (
    <div className="mx-4">
      <div className="rounded-lg overflow-hidden">
        <div className="relative overflow-hidden pb-60">
          <img
            className="absolute h-full w-full object-cover object-center"
            src={journey.destinations[0].images[0].url}
            alt=""
          />
        </div>
        <div className="relative bg-gray-800">
          <div className="py-10 px-8">
            <h3 className="text-2xl font-bold text-gray-100 font-montserrat">{journey.destinations[0].city}</h3>

            <div className="mt-10 flex justify-between items-center">
              
              <div className="flex items-center"
              >
                <button className="mr-4 text-gray-400" onClick={() => history.push(`/gallery/${journey.id}`)}>Voir les photos</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripCard
