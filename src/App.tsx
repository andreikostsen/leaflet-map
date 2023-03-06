import React, {useState} from 'react';

import s from './App.module.scss';

import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import {ButtonObjType, buttons, markers, waste} from "./state/state";
import {Button} from "./Button";


// export type filterType = "all" | "plastic" | "paper" | "glass"

export type filterType =
    "все"
    | "пластик"
    | "бумага"
    | "стекло"
    | "крупногабаритные отходы"
    | "опасные отходы"
    | "металл"

function App() {

    const [buttonsStatus, setButtonsStatus] = useState<Array<ButtonObjType>>(buttons)

    const changeButtonStatus = (wasteType: filterType) => {
        buttons.map(b => b.wasteTitle === wasteType ? b.isActive = !b.isActive : b)
        setButtonsStatus({...buttonsStatus})

    }

    let filteredMarkers = markers;

    filteredMarkers.map(m => m.display = false)

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].isActive) {
            filteredMarkers.map(m => m.wasteTypes.includes(waste[i]) ? m.display = true : m)
        }
    }


    return (

        <section className={s.map}>
            <h2>Куда сдать?</h2>
            <div className={s.buttonsWrapper}>
                {buttons.map(b => <Button
                    title={b.wasteTitle}
                    changeButtonStatus={changeButtonStatus}
                    isActive={b.isActive}
                />)}
            </div>
            <div>

                <MapContainer center={[53.884, 27.523]} zoom={11.5} scrollWheelZoom={true}
                              className={s.mapContainer}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        filteredMarkers.map(m =>
                            m.display ? <Marker position={[m.latitude, m.longitude]}>
                                <Popup>
                                    <h3>{m.title}</h3>
                                    {m.address}<br/>
                                    {m.info}<br/>
                                    Перерабатываем: {m.wasteTypes}
                                </Popup>
                            </Marker> : ""
                        )}
                </MapContainer>
            </div>

        </section>



    );
}

export default App;
