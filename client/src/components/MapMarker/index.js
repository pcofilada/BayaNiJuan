import React from 'react';
import { Marker } from 'react-map-gl';
import { Icon } from '@material-ui/core';

const MapMarker = ({ marker, clickFunction }) => {
  const { lat, lng } = marker;

  return (
    <Marker latitude={lat} longitude={lng}>
      <Icon
        fontSize="large"
        color="secondary"
        onClick={clickFunction}
        style={{ cursor: 'pointer' }}
      >
        location_on_sharp
      </Icon>
    </Marker>
  );
};

export default MapMarker;
