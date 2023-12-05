import React, { useState } from "react";
import { MAP_TOKEN } from "service/mapToken";
import pinIcon from "assets/images/pin-icon.svg";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import L from "leaflet";

const customMarker = new L.icon({
  iconUrl: pinIcon,
  iconSize: [25, 27],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

// import ReactMapGL, {
//   Marker,
//   NavigationControl,
//   GeolocateControl,
// } from "react-map-gl";

const ProductMap = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "60vh",
    latitude: 41.291019,
    longitude: 69.210099,
    zoom: 10,
  });

  const handleViewPortChange = (e) => {
    setViewport(e);
  };

  const position = [41.291019, 69.210099];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[41.291019, 69.210099]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customMarker} position={[41.291019, 69.210099]}></Marker>
      </MapContainer>
    </div>
    // <ReactMapGL
    //   {...viewport}
    //   onViewportChange={handleViewPortChange}
    //   mapStyle="mapbox://styles/mapbox/streets-v9"
    //   mapboxApiAccessToken={MAP_TOKEN}
    // >
    //   <GeolocateControl
    //     positionOptions={{ enableHighAccuracy: true }}
    //     trackUserLocation={true}
    //   />
    //   <Marker
    //     latitude={viewport.latitude}
    //     longitude={viewport.longitude}
    //     offsetLeft={-20}
    //     offsetTop={-10}
    //   >
    //     {pinIcon}
    //   </Marker>
    //   <div style={{ position: "absolute", right: 0 }}>
    //     <NavigationControl />
    //   </div>
    // </ReactMapGL>
  );
};

export default ProductMap;
