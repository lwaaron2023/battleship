import React from "react";
import Row from "./Row.jsx";
import Shipoption from "./Shipoption.jsx";



const Placegrid = (props) => {

    const [placing, setPlacing] = React.useState(false);

    const pointers = []
    for (let i = 0; i < 4; i++) {
        const pointer = document.createElement("div");
        pointer.id = 'pointer'+i;
        pointer.style.position = "absolute";
        pointer.style.height = 1 + "rem";
        pointer.style.width = 1 + "rem";
        pointer.style.display = 'none';
        pointer.style.backgroundColor = '#000000';
        pointer.style.pointerEvents = "none";
        document.body.appendChild(pointer);
        pointers.push(pointer);
    }

    const handleShipClick = (id, size) =>{
        let selection = document.getElementById(id)
        if(selection && selection.getAttribute("disabled") !== "true" && !placing){
            console.log("id",id,"size",size);
            setPlacing(true);
            selection.style.backgroundColor = "#000000";
            /*
            Need to write function that allows the user place ships
             */
            selection = document.getElementById(props.id+':0:0');
            console.log(selection.style.width)
            document.body.style.cursor = "none";
            for(let i = 0; i < size; i++) {
                pointers[i].style.display = "block";
            }
            document.body.addEventListener('mousemove', (e)=>{
                console.log(e)
                for(let i = 0; i < size; i++){

                    pointers[i].style.top = `${e.clientY}px`;
                    pointers[i].style.left = `${e.clientX+(i*parseInt(selection.style.width)*16)}px`;
                }
            });


            //will need to set this in the end
            selection.setAttribute("disabled", "true");
        }
    }

    onkeydown = (e)=>{
        if(e.key === "r" && placing){
            console.log("rotating ship");
        }
    }

    const handlePlaceClick = (row, col) =>{

    }

    const handleShipHover = (row, col) =>{

    }

    //Ship size: number of ships
    //4 square: 1
    //3 square: 2
    //2 square: 2
    //1 square: 1
    //Use 0 to mark ships

    const rowValues = [];
    const numRows = props.rows;
    const numCols = props.cols;
    for (let i = 0; i < numRows; i += 1) {
        rowValues.push(<Row row={i} cols={numCols} size={props.size} id={props.id} key={`row:${i}`} placing={placing}/>)
    }
    //Number of ships to place, used in calculations for spacing
    const numShips = 6;
    const temp2 = (numCols-numShips)*props.size/(numShips-1);
    //allows dynamic columns
    return (
        <>
            <div className={"flex flex-col mb-10"} id={props.id} key={`${props.id}`}>
                {rowValues}
            </div>
            <div className={"flex flex-row"} id={props.id+"ships"} key={`${props.id} ships`}>
                <Shipoption shipsize={4} size={props.size} ml = {0} key={'option:1'} id={'ship1'} onClick={()=>{handleShipClick("ship1", 4)}}/>
                <Shipoption shipsize={3} size={props.size} ml = {temp2} key={'option:2'} id={'ship2'} onClick={()=>{handleShipClick("ship2", 3)}}/>
                <Shipoption shipsize={3} size={props.size} ml = {temp2} key={'option:3'} id={'ship3'} onClick={()=>{handleShipClick("ship3", 3)}}/>
                <Shipoption shipsize={2} size={props.size} ml = {temp2} key={'option:4'} id={'ship4'} onClick={()=>{handleShipClick("ship4", 2)}}/>
                <Shipoption shipsize={2} size={props.size} ml = {temp2} key={'option:5'} id={'ship5'} onClick={()=>{handleShipClick("ship5", 2)}}/>
                <Shipoption shipsize={1} size={props.size} ml = {temp2} key={'option:6'} id={'ship6'} onClick={()=>{handleShipClick("ship6", 1)}}/>
            </div>
        </>
    )
}

export default Placegrid
