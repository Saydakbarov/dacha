import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import DisplayPosition from "./DisplayPosition";

const center = [41.29306, 69.212312];
const zoom = 12;

const FormMapMine = () => {
  const [mapNew, setMapNew] = useState(null);

  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          whenCreated={setMapNew}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {mapNew && <DisplayPosition map={mapNew} />})
        </MapContainer>
      </div>
    </div>
  );
};

export default React.memo(FormMapMine);
