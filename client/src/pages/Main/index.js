import React, { useState, useEffect } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import { Icon } from '@material-ui/core';

const Main = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '91vh',
    latitude: 14.6042,
    longitude: 120.9822,
    zoom: 12
  });
  const [markers] = useState([
    {
      id: 1,
      lat: 14.6042,
      lng: 120.9822,
      requester: 'Juan Dela Cruz',
      details: 'We need some food please help us.'
    },
    {
      id: 2,
      lat: 14.60242,
      lng: 120.9822,
      requester: 'Juana Dela Cruz',
      details: 'We need some assistant'
    }
  ]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setViewport({
        ...viewport,
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    });
  }, [viewport]);

  const renderMarkers = () =>
    markers.map(marker => (
      <Marker key={marker.id} latitude={marker.lat} longitude={marker.lng}>
        <Icon
          fontSize="large"
          color="secondary"
          onClick={() => setSelectedMarker(marker)}
          style={{ cursor: 'pointer' }}
        >
          location_on_sharp
        </Icon>
      </Marker>
    ));

  const renderPopup = () => {
    return (
      selectedMarker && (
        <Popup
          offsetLeft={18}
          longitude={selectedMarker.lng}
          latitude={selectedMarker.lat}
          onClose={() => setSelectedMarker(null)}
          closeOnClick={false}
        >
          <div>
            <h4>Requester: {selectedMarker.requester}</h4>
            <p>
              <label>Details: </label>
              {selectedMarker.details}
            </p>
          </div>
        </Popup>
      )
    );
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
      >
        <div style={{ position: 'absolute', right: '15px', top: '15px' }}>
          <NavigationControl />
        </div>
        {renderMarkers()}
        {renderPopup()}
      </ReactMapGL>
    </div>
  );
};

export default Main;
