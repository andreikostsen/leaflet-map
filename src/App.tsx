import React from 'react';

// import from './App.css';

import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'

function App() {
  return (


    <div>

    <MapContainer center={[53.884, 27.523]} zoom={13} scrollWheelZoom={false}
                  style={{ width: "100%", height: "100vh" }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[53.884, 27.523]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        <Marker position={[53.900, 27.530]}>
            <Popup>
                A pretty CS popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>



</div>

  );
}

export default App;
