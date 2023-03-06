import {filterType} from "./App";

import s from "./Button.module.scss"

type PropsType = {
    title: filterType,
    changeButtonStatus: (wasteType:filterType)=>void,
    isActive:boolean,
}

export const Button = (props:PropsType) => {

    let wasteType:filterType = props.title

    const onClickHandler=()=>{
        props.changeButtonStatus(wasteType)
    }

    return (
        <button
            style={props.isActive ? {backgroundColor: "green"} : {backgroundColor: "white"}}
            onClick={onClickHandler}
        className={s.filterButton}>
            {props.title}
        </button>
    )
}