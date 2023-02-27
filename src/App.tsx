import React, {useState} from 'react';

// import from './App.css';

import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import {buttons, markers, waste} from "./state/state";
import {Button} from "./Button";


// export type filterType = "all" | "plastic" | "paper" | "glass"

export type filterType = "все" | "пластик" | "бумага" | "стекло" | "крупногабаритные отходы" | "опасные отходы" | "металл"

function App() {
    const [filtersArray, setFilterArray] = useState<Array<filterType>>([])
    console.log(filtersArray)

    const setActiveFilter=(wasteType:filterType)=>{

        buttons.map(b=>b.wasteTitle===wasteType?b.isActive=!b.isActive:b)
        setFilterArray([...filtersArray])
        //
        // if(!filtersArray.includes(wasteType)) {
        //
        //     setFilterArray([...filtersArray,wasteType])
        // }

    }




    let filteredMarkers = markers;

    if(buttons[0].isActive) {

        filteredMarkers.map(m=>m.wasteType==="пластик"?m.display=true:m)

    }  else {
        filteredMarkers.map(m=>m.wasteType==="пластик"?m.display=false:m)
    }

    if(buttons[1].isActive) {

        filteredMarkers.map(m=>m.wasteType==="бумага"?m.display=true:m)

    }

    else {
        filteredMarkers.map(m=>m.wasteType==="бумага"?m.display=false:m)
    }

    if(buttons[2].isActive) {

        filteredMarkers.map(m=>m.wasteType==="стекло"?m.display=true:m)

    }

    else {
        filteredMarkers.map(m=>m.wasteType==="стекло"?m.display=false:m)
    }


    const onClickHandler = (filter:filterType) => {

        if(filter==="все") {
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


    //
    // if(filtersArray.length===0) {
    //     // filteredMarkers.map(m=>m.display=true)
    // }
    // else if (filtersArray.includes("пластик")) {
    //     filteredMarkers = markers.filter(m=>m.wasteType===waste[0])
    //     filteredMarkers.map(m=>m.display=true)
    // }
    //     else if (filtersArray.includes("бумага")) {
    //     filteredMarkers = markers.filter(m=>m.wasteType===waste[1]);
    //     filteredMarkers.map(m=>m.display=true)
    // }
    //     else if (filtersArray.includes("стекло")) {
    //     filteredMarkers = markers.filter(m=>m.wasteType===waste[2]);
    //     filteredMarkers.map(m=>m.display=true)
    // }



  return (


    <div>
        <Button title={buttons[0].wasteTitle} setActiveFilter={setActiveFilter} isActive={buttons[0].isActive}/><br/>
        <Button title={buttons[1].wasteTitle} setActiveFilter={setActiveFilter} isActive={buttons[1].isActive}/><br/>
        <Button title={buttons[2].wasteTitle} setActiveFilter={setActiveFilter} isActive={buttons[2].isActive}/><br/>
        <Button title={buttons[3].wasteTitle} setActiveFilter={setActiveFilter} isActive={buttons[3].isActive}/><br/>
        <Button title={buttons[4].wasteTitle} setActiveFilter={setActiveFilter} isActive={buttons[4].isActive}/><br/>
        <Button title={buttons[5].wasteTitle} setActiveFilter={setActiveFilter} isActive={buttons[5].isActive}/><br/>

        {/*<button onClick={()=>onClickHandler("все")}>Все точки</button>*/}
        {/*<button style={{background: "green"}} onClick={()=>onClickHandler("пластик")}>Пластик</button>*/}

        {/*<button onClick={()=>onClickHandler("бумага")}>Бумага</button>*/}
        {/*<button onClick={()=>onClickHandler("стекло")}>Стекло</button>*/}
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
