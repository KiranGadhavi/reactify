"use client";

import React, {
  useCallback,
  useRef,
  useMemo,
  useState,
  useEffect,
} from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    }),
    []
  );

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    if (mapRef.current) {
      mapRef.current.panTo(marker.position);
      mapRef.current.setZoom(15);
    }
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const handleLegendItemClick = (marker) => {
    handleMarkerClick(marker);
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
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
              icon={{
                path: FaMapMarkerAlt.path,
                fillColor: "#f97316",
                fillOpacity: 1,
                strokeWeight: 1,
                strokeColor: "#000",
                scale: 0.075,
              }}
            />
          ))}

          {selectedMarker && (
            <InfoWindowF
              position={selectedMarker.position}
              onCloseClick={handleInfoWindowClose}
            >
              <div>
                <h3 className="font-bold text-lg">{selectedMarker.name}</h3>
                <p className="text-sm text-gray-600">
                  Latitude: {selectedMarker.position.lat.toFixed(4)}
                </p>
                <p className="text-sm text-gray-600">
                  Longitude: {selectedMarker.position.lng.toFixed(4)}
                </p>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      </div>
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
        <h2 className="font-bold text-lg mb-2">Map Legend</h2>
        <ul className="space-y-2">
          {markers.map((marker) => (
            <li
              key={marker.id}
              className="flex items-center cursor-pointer hover:text-orange-500 transition-colors duration-200"
              onClick={() => handleLegendItemClick(marker)}
            >
              <FaMapMarkerAlt className="text-orange-500 mr-2" />
              <span>{marker.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default GoogleMapComponent;
