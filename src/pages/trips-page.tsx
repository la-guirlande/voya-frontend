import React, { useContext, useEffect, useState } from 'react'
import TripCard from '../components/Trips/trip-card'
import AuthenticationContext from '../contexts/authentication-context';

const TripsPage = () => {

  const { authUser } = useContext(AuthenticationContext);

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
         authUser && authUser.journeys.map((journey, i) => <TripCard key={i} journey={journey} />)
        }
      </div>
    </div>
  )
}

export default TripsPage
