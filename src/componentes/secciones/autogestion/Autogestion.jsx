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
            Autogestion
        </div>
    )
}
export default Autogestion;