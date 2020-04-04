import React, { useState, useEffect, useContext } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_ASSISTANCES } from '../../graphql/queries/assistance';
import { AuthContext } from '../../context/auth';
import MapMarker from '../../components/MapMarker';
import MapPopup from '../../components/MapPopup';
import { NavigationControlWrapper } from './style';

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
      const { latitude, longitude } = coords;

      setCoordinates(prevState => ({
        ...prevState,
        lat: latitude,
        lng: longitude
      }));
      setViewport(prevState => ({
        ...prevState,
        latitude,
        longitude,
        zoom: 12
      }));
    });
  }, [setCoordinates]);

  const renderMarkers = () => {
    if (loading || error) {
      return null;
    }

    return data.assistances.map(marker => (
      <MapMarker
        key={marker.id}
        marker={marker}
        clickFunction={() => setSelectedMarker(marker)}
      />
    ));
  };

  const renderPopup = () =>
    selectedMarker && (
      <MapPopup
        content={selectedMarker}
        closeFunction={() => setSelectedMarker(null)}
      />
    );

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
      >
        <NavigationControlWrapper>
          <NavigationControl />
        </NavigationControlWrapper>
        {renderMarkers()}
        {renderPopup()}
      </ReactMapGL>
    </>
  );
};

export default Main;
