import React, {useState} from 'react';

// import from './App.css';

import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import {markers, waste} from "./state/state";
import {Button} from "./Button";


export type filterType = "all" | "plastic" | "paper" | "glass"




function App() {
    const [filtersArray, setFilterArray] = useState<Array<filterType>>([])
    console.log(filtersArray)

    const setActiveFilter=()=>{

        setFilterArray([...filtersArray,title])


    }
    let filteredMarkers = markers;

    const onClickHandler = (filter:filterType) => {

        if(filter==="all") {
            filteredMarkers.map(m=>m.display=true)
              setFilterArray([])
        }

        else if(!filtersArray.includes(filter)) {
            console.log(filter)

            setFilterArray([...filtersArray,filter])

        }

        else if(filtersArray.includes(filter)) {
            filtersArray.filter(el=>el.includes(filter))

            setFilterArray([...filtersArray])

        }




    }



    if(filtersArray.length===0) {
        // filteredMarkers.map(m=>m.display=true)
    }
    else if (filtersArray.includes("plastic")) {
        filteredMarkers = markers.filter(m=>m.wasteType===waste[0])
        filteredMarkers.map(m=>m.display=true)
    }
        else if (filtersArray.includes("paper")) {
        filteredMarkers = markers.filter(m=>m.wasteType===waste[1]);
        filteredMarkers.map(m=>m.display=true)
    }
        else if (filtersArray.includes("glass")) {
        filteredMarkers = markers.filter(m=>m.wasteType===waste[2]);
        filteredMarkers.map(m=>m.display=true)
    }



  return (


    <div> <Button title={"Бумага"} setActiveFilter={setActiveFilter} isActive={false}/><br/>

        <button onClick={()=>onClickHandler("all")}>Все точки</button>
        <button style={{background: "green"}} onClick={()=>onClickHandler("plastic")}>Пластик</button>

        <button onClick={()=>onClickHandler("paper")}>Бумага</button>
        <button onClick={()=>onClickHandler("glass")}>Стекло</button>
    <MapContainer center={[53.884, 27.523]} zoom={11.5} scrollWheelZoom={true}
                  style={{ width: "100%", height: "100vh" }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredMarkers.map(m=>
            m.display?<Marker position={[m.latitude, m.longitude]}>
                <Popup>
                    <h3>{m.title}</h3>
                    {m.address}<br/>
                    {m.info}<br/>
                    Перерабатываем: {m.wasteType}
                </Popup>
            </Marker>:""
        )}
    </MapContainer>



</div>

  );
}

export default App;
