import React from 'react'

interface ITripCardProps{
  image: string;
  city: string;
  country: string;
  startDate: Date;
  endDate: Date;
}

const TripCard:React.FC<ITripCardProps> = ({image, city, country, startDate, endDate}) => {

  const formatDate = (date: Date) => {
    let parsedDate = date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return parsedDate
  };

  return (
    <div className="mx-4">
      <div className="rounded-lg overflow-hidden">
        <div className="relative overflow-hidden pb-60">
          <img
            className="absolute h-full w-full object-cover object-center"
            src={image}
            alt=""
          />
        </div>
        <div className="relative bg-gray-800">
          <div className="py-10 px-8">
            <h3 className="text-2xl font-bold text-gray-100 font-montserrat">{city}, {country}</h3>
            <div className="text-gray-300 text-sm font-medium flex mb-4 mt-2 font-montserrat">
              <p>{formatDate(startDate)} au {formatDate(endDate)}</p>
            </div>
            <div className="mt-10 flex justify-between items-center">
              
              <div className="flex items-center"
              >
                <p className="mr-4 text-gray-400">Voir les photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripCard
