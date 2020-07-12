import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { mq } from '../../styled-components/media-queries';

const LocationHeader = styled.h2`
  font-size: 34px;
  ${mq('m', 'ml')(css`
    font-size: 28px;
    margin: 8px;
  `)}
  ${mq('sl', 'm')(css`
    font-size: 25px;
    margin: 8px;
    text-align: center;
  `)}
  ${mq('sl', 'm')(css`
    font-size: 23px;
    margin: 8px;
    text-align: center;
  `)}
  ${mq('s', 'sl')(css`
    font-size: 23px;
    margin: 8px;
    text-align: center;
  `)}
`;

const LocationTitle = (props) => {
  const {
    location: { location, crds: { lat, lon } },
    language, getLocation, inputText,
  } = props;

  useEffect(() => {
    if (lat || lon) {
      getLocation(`${lat}, ${lon}`, language);
    }
  }, [language, lon, lat, getLocation, inputText]);
  return (
    <div>
      <LocationHeader>{location}</LocationHeader>
    </div>
  );
};

export default LocationTitle;
