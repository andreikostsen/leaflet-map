import {useState} from 'react';
import L from 'leaflet';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";
import {ButtonObjType, buttons, markers, MarkerType, waste} from "./state/state";
import {Button} from "./Button";
import s from './App.module.scss';
import pointIcon from './point_icon.svg';
import axios, {AxiosError} from 'axios';


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

    const customIcon = new L.Icon({
        iconUrl: pointIcon,
        iconSize: new L.Point(27, 32)
    });



// API
    const instance = axios.create({baseURL: 'https://my-json-server.typicode.com/andreikostsen/testsearch/'})

    const api = {
        getMarkers() {
            return instance.get<MarkerType[]>('markersState')
        },

    }

        api.getMarkers()
            .then((res) => {
                console.log(typeof (res.data[1].wasteTypes))

            })
            .catch((e: AxiosError) => {
                console.log(e)
            })




    let filteredMarkers = markers;

    filteredMarkers.map(m => m.display = false)

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].isActive) {
            filteredMarkers.map(m => m.wasteTypes.includes(waste[i]) ? m.display = true : m)
        }
    }

    const token = 'xZpKoSPd2lxvjHa2OY9UT0kBT6StaY0c7pnbhNF1RPCPKAexPRuo2P8x8KKICtO3';


    return (

        <section className={s.map}>
            <h2>Куда сдать?</h2>
            <div className={s.buttonsWrapper}>
                {buttons.map((b, i) => <Button
                    key = {i}
                    title={b.wasteTitle}
                    changeButtonStatus={changeButtonStatus}
                    isActive={b.isActive}
                />)}
            </div>
            <div>

                <MapContainer center={[53.9024716, 27.5618225]} zoom={11.5} scrollWheelZoom={true}
                              className={s.mapContainer}>
                    <TileLayer
                        attribution='<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors'
                        url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${token}&lang=ru`}
                    />
                    <MarkerClusterGroup chunkedLoading>
                    {filteredMarkers.map((m, i) =>
                            m.display ? <Marker key={i} position={[m.latitude, m.longitude]} icon={customIcon}>
                                {/*<Popup>*/}
                                {/*    <h3>{m.title}</h3>*/}
                                {/*    {m.address}<br/>*/}
                                {/*    {m.info}<br/>*/}
                                {/*    Перерабатываем: {m.wasteTypes}*/}
                                {/*</Popup>*/}
                                <Popup className={s.popup} keepInView={false} maxWidth={370}>
                                    <div className={s.popupHeader}>{m.title}</div>
                                    <div className={s.popupAddressWrapper}>
                                        <ul className={s.address}>
                                            <li className={s.locationPoint}>
                                                <div className={s.popupAddressContent}>{m.address}</div>
                                            </li>
                                            <li className={s.phone}>
                                                <div className={s.popupAddressContent}>{m.phone}</div>
                                            </li>
                                            <li className={s.schedule}>
                                                <div className={s.popupAddressContent}>{m.schedule}</div>
                                            </li>
                                            <li className={s.website}>
                                                <div className={s.popupAddressContent}><a href={m.website}>{m.website}</a></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={s.popupFooter}>
                                        Перерабатываем:
                                        <ul className={s.wasteTypes}>
                                            {m.wasteTypes.map((item, i) =>
                                                <li key={i}>{item}</li>
                                            )}
                                        </ul>
                                    </div>
                                </Popup>
                            </Marker> : ""
                        )}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>

        </section>



    );
}

export default App;
