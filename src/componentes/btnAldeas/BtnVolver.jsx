import { Navigate } from "react-router-dom";
import { useState } from "react";

const BtnVolver = ()=>{

    const [ volver, setVolver ] = useState(false);

    const volverAtras = (e)=>{
        e.preventDefault();
        if(e){
            setVolver(true);
        }
    }

    return(
        <div>
            <button onClick={volverAtras} > Boton para regresar </button>
            {volver && <Navigate replace to="/paginaPrincipal" /> }
        </div>
    )
}
export default BtnVolver;