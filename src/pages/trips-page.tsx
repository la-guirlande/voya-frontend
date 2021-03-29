import React, { useContext, useEffect, useState } from 'react'
import TripCard from '../components/Trips/trip-card'
import AuthenticationContext from '../contexts/authentication-context';
import { Status, useQuery } from '../hooks/query-hook';
import { JourneyData } from '../util/types/data-types';
import { JourneysResponse } from '../util/types/response-types';

const TripsPage = () => {

  const authenticationContext = useContext(AuthenticationContext);
  const user = authenticationContext.authUser;

  const image = './img/city.jpg'
  const city = 'Tokyo';
  const [journeys, setJourneys] = useState<JourneyData[]>([])

  const journeyQuery = useQuery<JourneysResponse>()

  useEffect(() => {
    switch (journeyQuery.status) {
      case Status.INIT:
        journeyQuery.get(`http://localhost/users/${user.id}/journeys`);
        break;
      case Status.SUCCESS:
        setJourneys(journeyQuery.response.journeys)
        break;
      case Status.ERROR:
        console.log(journeyQuery.errorResponse.errors)
        break;
    }
  }, [journeyQuery.status])

  return (
    <div className="bg-black flex flex-col h-screen">
      <div className="text-white text-3xl font-montserrat text-center my-4">
        Vos voyages
      </div>
      <div className="flex flex-row justify-between">
        <div className="my-6 mx-12 text-white text-xl font-montserrat">
          Liste de vos voyages
        </div>
        <div>
          <button className="bg-gray-800 hover:bg-gray-600 hover:border-white border-2 border-gray-800 text-white p-4 rounded text-lg overflow-visible font-montserrat mr-4 mt-4">
            Ajouter un voyage
          </button>
        </div>
      </div>

      <div className=" m-6 flex flex-row ">
        {
         journeys && journeys.map((journey, index) => <TripCard image={journey.destinations[index].images[0].url} city={journey.destinations[index].city} />)
        }

      </div>
    </div>
  )
}

export default TripsPage
