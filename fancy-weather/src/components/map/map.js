import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { convertCrdsToMinute, translateWord } from '../../utils/utils';
import { latitudeLang, longitudeLang } from '../../data/data';
import { MapInner, CrdsStyled, MapWrapper } from '../styled-components/map-styled';

mapboxgl.accessToken = 'pk.eyJ1IjoiYm96b3JnIiwiYSI6ImNrYWdtZ3MxajA1YnoycmxzdnBhZjN3NDgifQ.GdkFymBhiAjOuFacC1lSDA';

const Map = (props) => {
  const { crds: { lat, lon }, lang } = props;
  const mapContainer = useRef(null);
  const [latitude, setLat] = useState(lat);
  const [longitude, setLon] = useState(lon);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lon, lat],
      zoom: 10,
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([lon, lat])
      .addTo(map);
    if (lat !== null && lon !== null) {
      setLat(convertCrdsToMinute(lat));
      setLon(convertCrdsToMinute(lon));
    }
  }, [lat, lon]);
  return (
    <MapInner>
      <MapWrapper ref={mapContainer} />
      <div>
        <CrdsStyled>
          {translateWord(lang, latitudeLang)}
          :
          {' '}
          {latitude}
        </CrdsStyled>
        <CrdsStyled>
          {translateWord(lang, longitudeLang)}
          :
          {' '}
          {longitude}
        </CrdsStyled>
      </div>
    </MapInner>
  );
};

export default Map;
