import React from "react";
import Row from "./Row.jsx";



const Placegrid = (props) => {

    //Ship size: number of ships
    //4 square: 1
    //3 square: 2
    //2 square: 2
    //1 square: 1
    //Use 0 to mark ships

    const rows = [];

    for (let i = 0; i < props.rows; i += 1) {
        rows.push(<Row row={i} cols={props.cols} size={props.size} key={`row:${i}`} id={props.id}/>)
    }
    //allows dynamic columns
    return (
        <>
            <div className={"flex flex-col"} id={props.id} key={`${props.id}`}>
                {rows}
            </div>
            <div className={"flex flex-col"} id={props.id+"ships"} key={`${props.id} ships`}>
                <Shipoption/>
            </div>
        </>
    )
}

export default Placegrid
