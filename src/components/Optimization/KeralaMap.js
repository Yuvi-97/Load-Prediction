// src/components/KeralaMap.js
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const highLoadIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Red icon for high load
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const normalLoadIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/609/609803.png", // Green icon for normal load
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const KeralaMap = ({ feeders }) => {
  return (
    <MapContainer center={[10.5276, 76.2144]} zoom={12} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {feeders.map((feeder) => (
        <Marker
          key={feeder.id}
          position={[feeder.lat, feeder.lon]}
          icon={feeder.load > 0.8 * feeder.capacity ? highLoadIcon : normalLoadIcon} // Dynamically set icon
        >
          <Popup>
            <b>{feeder.name}</b> <br />
            Load: {feeder.load} MW / {feeder.capacity} MW
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default KeralaMap;
