"use client";

import React, { useCallback, useRef, useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 51.5074, // London coordinates
  lng: -0.1278,
};

const libraries = ["places"];

const GoogleMapComponent = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markers, setMarkers] = useState([
    { id: 1, name: "London Eye", position: { lat: 51.5033, lng: -0.1195 } },
    { id: 2, name: "Tower Bridge", position: { lat: 51.5055, lng: -0.0754 } },
    {
      id: 3,
      name: "Buckingham Palace",
      position: { lat: 51.5014, lng: -0.1419 },
    },
  ]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const options = useMemo(
    () => ({
      mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
      disableDefaultUI: false,
      clickableIcons: false,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
    }),
    []
  );

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  if (loadError)
    return (
      <div className="text-red-500 text-center py-4">Error loading maps</div>
    );
  if (!isLoaded)
    return (
      <div className="text-gray-500 text-center py-4">Loading maps...</div>
    );

  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        {markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={marker.position}
            onClick={() => handleMarkerClick(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindowF
            position={selectedMarker.position}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              <h3 className="font-bold">{selectedMarker.name}</h3>
              <p>Latitude: {selectedMarker.position.lat}</p>
              <p>Longitude: {selectedMarker.position.lng}</p>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
      <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
        <h4 className="font-bold mb-2">Map Legend</h4>
        <ul>
          {markers.map((marker) => (
            <li key={marker.id}>{marker.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
