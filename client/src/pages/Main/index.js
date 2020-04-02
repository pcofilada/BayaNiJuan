import React, { useState, useEffect, useContext } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import { Icon } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_ASSISTANCES } from '../../graphql/queries/assistance';
import { AuthContext } from '../../context/auth';

const Main = () => {
  const { coordinates, setCoordinates } = useContext(AuthContext);

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '91vh',
    latitude: coordinates.lat,
    longitude: coordinates.lng,
    zoom: 12
  });
  const { loading, error, data } = useQuery(FETCH_ASSISTANCES);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({ lat: coords.latitude, lng: coords.longitude });
      setViewport({
        ...viewport,
        zoom: 12,
        longitude: coords.longitude,
        latitude: coords.latitude
      });
    });
  }, []);

  const renderMarkers = () => {
    if (loading || error) {
      return null;
    }

    return data.assistances.map(marker => (
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
  };

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
            <h3>Requester: {selectedMarker.requester}</h3>
            <h4>Contact Number: {selectedMarker.contactNumber}</h4>
            <div>
              <label>Details: </label>
              <p>{selectedMarker.details}</p>
            </div>
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
