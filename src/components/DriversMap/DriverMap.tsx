import React, { useState, useEffect } from 'react';
import { InfoWindow, Marker, GoogleMap, useLoadScript } from '@react-google-maps/api';

const DriverNav = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<{ lat: number; lng: number } | null>(null);

  // Fetch the current location using geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentLocation(location);
        },
        (error) => {
          console.error('Error getting current location: ', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser');
    }
  }, []);

  const handleMarkerClick = (lat: number, lng: number) => {
    setSelectedMarker({ lat, lng });
    setShowInfoWindow(true);
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {isLoaded ? (
        <GoogleMap
          center={currentLocation || { lat: 0, lng: 0 }}
          zoom={15}
          mapContainerStyle={{ height: '100%', width: '100%' }}
        >
          {currentLocation && (
            <Marker
              position={currentLocation}
              onClick={() => handleMarkerClick(currentLocation.lat, currentLocation.lng)}
            />
          )}
          {showInfoWindow && selectedMarker && (
            <InfoWindow
              position={selectedMarker}
              onCloseClick={() => setShowInfoWindow(false)}
            >
              <div>
                <h4>Current Location</h4>
                <p>Latitude: {selectedMarker.lat}</p>
                <p>Longitude: {selectedMarker.lng}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DriverNav;
