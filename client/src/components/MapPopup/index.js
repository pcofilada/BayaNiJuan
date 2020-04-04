import React from 'react';
import { Popup } from 'react-map-gl';
import { Details } from './style';

const MapPopup = ({ content, closeFunction }) => {
  const { lat, lng, requester, contactNumber, details } = content;

  return (
    <Popup
      offsetLeft={18}
      longitude={lng}
      latitude={lat}
      onClose={closeFunction}
      closeOnClick={false}
    >
      <Details>
        <h3>Requester: {requester}</h3>
        <h4>Contact Number: {contactNumber}</h4>
        <div>
          <label>Details: </label>
          <p>{details}</p>
        </div>
      </Details>
    </Popup>
  );
};

export default MapPopup;
