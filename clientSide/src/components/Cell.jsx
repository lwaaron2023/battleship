import {useEffect, useState} from "react";

const Cell = (props) => {
    let content;
    const row = props.row;
    const col = props.col;
    const id = `${props.id}:${row}:${col}`;
    const placing = props.placing;
    const [hasShip, setHasShip] = useState(false);

    useEffect(() => {
        if(row > 0 && col > 0) {
            const self = document.getElementById(id)
            if (self) {
                if (placing) {
                    if (hasShip) {
                        self.classList.add("inactive-cell")
                    } else {
                        self.classList.add("active-cell")
                    }
                } else {
                    if (hasShip) {
                        self.classList.remove("inactive-cell")
                    } else {
                        self.classList.remove("active-cell")
                    }
                }
            }
        }
    },[placing])

    if(props.content !== ""){
        content = (
            <p className={'text-center font-bold text-2xl'}>{props.content}</p>
        )
    }
    let rtr;
    if(row === 0 && col === 0){
        rtr = (<div className={`aspect-square border-1 border-black bg-black flex flex-cols items-center justify-center`} style={{"width":`${props.size}em`,"height":`${props.size}em`}} id={id}></div>)
    }
    else{
        rtr = (<div className={`aspect-square border-1 bg-gray-200 border-black flex flex-cols items-center justify-center`} style={{"width":`${props.size}em`,"height":`${props.size}em`}} id={id}>
            {content}
        </div>)
    }
    return (
        <>
            {rtr}
        </>
    )
}

export default Cell
