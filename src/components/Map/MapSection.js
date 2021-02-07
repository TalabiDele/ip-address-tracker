import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import GeolocatioIP from '../IP/GeolocationIP'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import styles from './MapSection.module.css'
import 'leaflet/dist/leaflet.css';

const MapSection = (props) => {
  const position = [6.64714, 3.32336]

  return (
    <MapContainer center={position} zoom={13} maxZoom={18} scrollWheelZoom={false} className={styles.mapSection}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={position}>

      </Marker>
    </MapContainer>
  );
};

export default MapSection;
