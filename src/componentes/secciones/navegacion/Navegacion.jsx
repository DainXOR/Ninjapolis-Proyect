import Autogestion from "../autogestion/Autogestion";


import { useState } from "react";
import { Navigate } from "react-router-dom";

const Navegacion = ()=>{

    const [gestion, setGestion] = useState(false);

    const enviarGestion = (e)=>{
        e.preventDefault();

        e? setGestion(true) : setGestion(false);
    }

    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <label className="navbar-brand">NinjaPolis</label>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex justify-content-end">
                        <label className="nav-link">Dinamicas</label>
                        <label className="nav-link">Perfil</label>
                        <button onClick={enviarGestion} className="nav-link">Autogestion</button>
                    </div>
                </div>
            </div>
            {
                gestion && <Navigate to="/gestion"/>
            }
        </nav>
    )
}
export default Navegacion;