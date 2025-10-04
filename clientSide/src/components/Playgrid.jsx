import Row from "./Row.jsx";
import React, {useEffect} from "react";


const Playgrid = (props)=>{
    const [rows, setRows] = React.useState([]);
    const turn = false;

    useEffect(()=>{
        if(props.playmode){
            const container = document.getElementById("playfield");
            if(container){
                container.classList.remove("hidden");
            }
            const rowValues = [];
            const numRows = props.rows;
            const numCols = props.cols;
            for (let i = 0; i < numRows; i += 1) {
                rowValues.push(<Row row={i} cols={numCols} size={props.size} id={props.id} key={`row:${i}`}/>)
            }
            //Number of ships to place, used in calculations for spacing
            setRows(rowValues);
            //allows dynamic columns
        }
    },[props.playmode])


    const handleClick = (e) => {
        if(turn) {
            const info = props.extractInfo(e.target.id);
            if (info.row <= 0 || info.col <= 0) {
                const message = document.getElementById("message");
                if (message) {
                    message.classList.add("text-red-500");
                    message.innerText = "Invalid target selected";
                    setInterval(() => {
                        message.classList.remove("text-red-500");
                        message.innerText = "";
                    }, 10000)
                }


            }
        }
    }

    return (
        <>
            <div className={"flex flex-col mb-10 hover:cursor-crosshair"} id={props.id} key={`${props.id}`} onClick={handleClick}>
                {rows}
            </div>
        </>
    )
}

export default Playgrid
