import {filterType} from "./App";

type PropsType = {
    title: filterType,
    setActiveFilter: (wasteType:filterType)=>void,
    isActive:boolean,
}

export const Button = (props:PropsType) => {

    let wasteType:filterType = props.title

    const onClickHandler=()=>{
        props.setActiveFilter(wasteType)
    }

    return (
        <button
            style={props.isActive ? {backgroundColor: "green"} : {backgroundColor: "white"}}
            onClick={onClickHandler}>
            {props.title}
        </button>
    )
}