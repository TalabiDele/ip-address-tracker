import React from 'react';
import Header from './components/header/Header'
import Card from './components/Card/Card'
import MapSection from './components/Map/MapSection'
import GeolocationIP from './components/IP/GeolocationIP'
import './index.css'
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <MapSection />
    </div>
  );
}

export default App;
