import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './location-map.module.scss';
import React from 'react';

export const LocationMap = () => {

  const defaultCenter = {
    lat: 34.01716515852443, lng: -84.36437335961014
  }

  return(
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerClassName={styles["map"]}
        zoom={13}
        center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default LocationMap;

LocationMap.displayName = 'LocationMap';