import Placegrid from "./components/Placegrid.jsx";
import Playgrid from "./components/Playgrid.jsx";



function App() {

  return (
    <>
      <div className={"min-h-fit min-w-fit m-4"}>
          <Placegrid id={"placegrid"} cols={8} rows={8} size={7}/>
          <Playgrid />
      </div>
    </>
  )
}

export default App
