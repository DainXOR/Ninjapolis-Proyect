import "./autogestion.css"
import Navegacion from "../navegacion/Navegacion";
import Dashboard from "./Dashboard";

const Autogestion = ()=>{
    return(
        <div className="contGestion">
            <Navegacion gestionProp="disabled"/>

            <br></br>
            <br></br>
            <br></br>
            <Dashboard/>
            <center><h1>Autogestion</h1></center>
            
        </div>
    )
}
export default Autogestion;