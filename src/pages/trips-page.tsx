import React from 'react'
import TripCard from '../components/Trips/trip-card'

const TripsPage = () => {

  const image = './img/city.jpg'
  const city = 'Tokyo';
  const country = 'Japan'
  const startDate = new Date(Date.UTC(2020, 8, 20, 0, 0, 0));
  const endDate = new Date(Date.UTC(2020, 8, 30, 3, 0, 0));

  return (
    <div className="bg-black flex flex-col h-screen">
      <div className="text-white text-3xl font-montserrat text-center my-4">
        Vos voyages
      </div>
      <div className="my-6 mx-12 text-white text-xl font-montserrat">
        Liste de vos voyages
      </div>
      <div className=" m-6 flex flex-row ">
        <TripCard image={image} city={city} country={country} startDate={startDate} endDate={endDate}/>
        <TripCard image={image} city={city} country={country} startDate={startDate} endDate={endDate}/>
        <TripCard image={image} city={city} country={country} startDate={startDate} endDate={endDate}/>
        <TripCard image={image} city={city} country={country} startDate={startDate} endDate={endDate}/>
      </div>
    </div>
  )
}

export default TripsPage
