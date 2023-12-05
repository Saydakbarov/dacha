import React, { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMap } from "store/map/mapAction";
import L from "leaflet";
import { Marker } from "react-leaflet";
import pinIcon from "assets/images/pin-icon.svg";

const customMarker = new L.icon({
  iconUrl: pinIcon,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const DisplayPosition = ({ map }) => {
  const [position, setPosition] = useState(map.getCenter());

  const dispatch = useDispatch();
  const onMove = useCallback(() => {
    setPosition(map.getCenter());
    dispatch(changeMap(position));
  }, [map, position, dispatch]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  console.log(map&& map)

  return (
    <Marker
      icon={customMarker}
      position={[position.lat.toFixed(4), position.lng.toFixed(4)]}
    />
  );
};

export default DisplayPosition;
