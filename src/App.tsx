import React from 'react';

// import from './App.css';

import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import {markers} from "./state/state";




function App() {
  return (


    <div>

    <MapContainer center={[53.884, 27.523]} zoom={13} scrollWheelZoom={true}
                  style={{ width: "100%", height: "100vh" }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(m=><Marker position={[m.latitude, m.longitude]}>
                <Popup>
                    <h3>{m.title}</h3>
                    {m.info}
                </Popup>
            </Marker>
        )}
    </MapContainer>



</div>

  );
}

export default App;
