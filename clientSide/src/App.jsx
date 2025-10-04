import Placegrid from "./components/Placegrid.jsx";
import Playgrid from "./components/Playgrid.jsx";
import React from "react";




function App() {
    const rows = 8;
    const cols = 8;
    const size = 7;
    const playGridId = "playgrid";
    const placeGridId = "placegrid";
    const [playMode, setPlayMode] = React.useState(false);

    const extractInfo= (id)=>{
        const temp = id.split(":");
        temp.splice(0,1);
        const rtr = {
            "row":-1,
            "col":-1
        }
        if(temp.length === 2) {
            rtr.row = parseInt(temp[0]);
            rtr.col = parseInt(temp[1]);
        }
        return rtr;
    }
  return (
    <>

        <div className = "min-h-fit max-h-min min-w-fit max-w-fit justify-self-center m-10 p-10 bg-gray-300">
            <div>
                <p className={"p-2 text-center  text-4xl"} id={"message"}></p>
            </div>
            <div className={"hidden min-h-fit min-w-fit m-4 p-4 border-2 rounded-xl"} id={"playfield"}>
                <h1 className={"text-4xl text-center font-bold mb-5 text-gray-800"}>Playfield</h1>
                <Playgrid id={playGridId} cols={cols} rows={rows} size={size} playmode={playMode} extractInfo={extractInfo}/>
            </div>
            <div className={"min-h-fit min-w-fit m-4 p-4 border-2 rounded-xl"}>
                <h1 className={"text-4xl text-center font-bold mb-5 text-gray-800"}>Your Ship Placement</h1>
                <Placegrid id={placeGridId} cols={cols} rows={rows} size={size} cb={setPlayMode} extractInfo={extractInfo}/>
            </div>
        </div>
    </>
  )
}

export default App
