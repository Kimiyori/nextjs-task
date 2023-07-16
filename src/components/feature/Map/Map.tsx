'use client';
import { YMaps, useYMaps } from '@pbe/react-yandex-maps';
import { mapData } from '@data/map';
import { useEffect, useRef } from 'react';
import { Spinner } from '@components/core/LoadingElement/LoadingElement';

const MapElement = () => {
  const mapRef = useRef(null);
  const ymaps = useYMaps(['Map', 'Placemark']);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }
    const map = new ymaps.Map(mapRef.current, {
      center: mapData.location,
      zoom: mapData.zoom,
    });
    const placemark = new ymaps.Placemark(mapData.placemark.location, {
      iconImageSize: mapData.placemark.iconImage,
      preset: mapData.placemark.preset,
    });
    map.geoObjects.add(placemark);
  }, [ymaps]);

  return ymaps ? <div ref={mapRef} id={'map'} /> : <Spinner />;
};
const MapComponent = () => {
  return (
    <>
      <YMaps
        query={{
          load: 'package.full',
          apikey: process.env.MAP_API_KEY,
        }}
      >
        <MapElement />
      </YMaps>
    </>
  );
};
export default MapComponent;
