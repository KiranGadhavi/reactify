"use client";

import React, { useCallback, useRef, useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const libraries = ["marker"];

const GoogleMapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
    loadingStrategy: "async",
  });

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;

    // Create the new AdvancedMarkerElement to replace MarkerF
    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      position: center,
      map: map,
    });

    markerRef.current = marker;
  }, []);

  const onUnmount = useCallback(() => {
    if (mapRef.current) {
      mapRef.current = null;
    }
    if (markerRef.current) {
      markerRef.current.setMap(null); // Clean up marker when unmounting
    }
  }, []);

  const options = useMemo(
    () => ({
      mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    />
  );
};

export default GoogleMapComponent;
