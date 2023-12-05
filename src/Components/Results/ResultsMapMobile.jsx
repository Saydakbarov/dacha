import React from "react";

import { Button } from "rsuite";

import { Marker, MapContainer, TileLayer, Popup } from "react-leaflet";

import { useLocation, useHistory } from "react-router-dom";
import pinIcon from "assets/images/pin-icon.svg";
import pin from "assets/images/map-pin-small.svg";
import L from "leaflet";

const center = [41.29306, 69.212312];
const zoom = 12;
const pos = [
  { latitude: 41.638227, longitude: 69.942581, price: "2 500 000" },
  { latitude: 41.668227, longitude: 69.972581, price: "2 500 000" },
  { latitude: 41.30526, longitude: 69.295094, price: "3 500 000" },
  { latitude: 41.29824, longitude: 69.240095, price: "2 500 000" },
  { latitude: 41.2943, longitude: 69.272096, price: "1 900 000" },
  { latitude: 41.29827, longitude: 69.251097, price: "1 400 000" },
  { latitude: 41.29432, longitude: 69.230098, price: "1 300 000" },
];

const customMarker = new L.icon({
  iconUrl: pinIcon,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const ResultsMapMobile = () => {
  const location = useLocation();
  const history = useHistory();

  const initMarker = (ref) => {
    console.log(ref);
  };

  const onMarkerMouseOver = () => {
    this.openPopup();
  };

  const handleLocation = (id) => {
    history.push({
      pathname: `/dachas/joy/${id}`,
      state: {from: location?.pathname}
    })
  }
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pos.map((position, index) => {
          return (
            <Marker
              icon={customMarker}
              position={[position.latitude, position.longitude]}
              riseOnHover
              ref={initMarker}
              onMouseOver={onMarkerMouseOver}
              key={index}
            >
              <Popup>
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="results-img"
                  style={{ width: "100%", height: "100" }}
                />
                <div className="results-info mx-0">
                  <p style={{ fontSize: 14, marginTop: 5, fontWeight: 500 }}>
                    Роскошная дача в близи Чимгана...
                  </p>
                  <div className="results-location">
                    <img src={pin} alt="" className="results-location-pin" />
                    <p className="results-location-text">Чимган</p>
                  </div>
                  <ul
                    className="results-card-list"
                    style={{
                      fontSize: 14,
                      color: "#777",
                    }}
                  >
                    <li className="results-card-item my-0 py-0">Гости: 10</li>
                    <li className="results-card-item my-0 py-0">Комнаты: 4</li>
                  </ul>
                  <div
                    className="results-price"
                    style={{ position: "relative" }}
                  >
                    {position.price} сум
                  </div>
                  <Button appearance="primary" block className="w-100 mt-1" onClick={() => handleLocation(index)}>
                    Посмотреть детали
                  </Button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default ResultsMapMobile;
