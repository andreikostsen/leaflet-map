import {filterType} from "./App";

type PropsType = {
    title: string,
    setActiveFilter: ()=>void,
    isActive:boolean,
}

export const Button = (props: PropsType) => {

    let title = props.title

    const onClickHandler=()=>{
        props.setActiveFilter()
    }

    return (
        <button
            style={props.isActive ? {backgroundColor: "green"} : {backgroundColor: "white"}}
            onClick={onClickHandler}>
            {props.title}
        </button>
    )
}