import L, { LatLng } from 'leaflet';
import React, { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { JourneyData } from '../../util/types/data-types';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export interface MapProps {
  journey?: JourneyData;
  height?: number;
}

export const Map: FC<MapProps> = ({ journey, height }) => {
  const location = new LatLng(journey.destinations[0].lat, journey.destinations[0].lon);
  const defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [16, 32],
    iconAnchor: [8, 16],
    popupAnchor: [0, -16]
  });

  return (
    <MapContainer center={location} zoom={13} style={{ height: `${height}px` }}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {journey?.destinations.map((destination, i) => (
        <Marker key={i} position={new LatLng(destination.lat, destination.lon)} icon={defaultIcon}>
          <Popup>{destination.city}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

Map.defaultProps = {
  journey: null,
  height: 180
}
