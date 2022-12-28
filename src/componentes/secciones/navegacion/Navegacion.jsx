import { useState } from "react";
import { Navigate } from "react-router-dom";

const Navegacion = (props)=>{
    // Redireccionanmiento de paginas
    const [gestion, setGestion] = useState(false);
    const [ninjapolis, setNinjapolis] = useState(false);
    const [perfil, setPerfil] = useState(false);
    const [shop, setShop] = useState(false);

    
    const enviarGestion = (e)=>{e ? setGestion(true) : setGestion(false);}
    const enviarNinjapolis = (e)=>{e ? setNinjapolis(true) : setNinjapolis(false);}
    const enviarPerfil = (e)=>{e ? setPerfil(true) : setPerfil(false)}
    const sendShop = (e)=>{e ? setShop(true) : setShop(false)}

    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <label onClick={enviarNinjapolis} className={`mx-md-5 nav-link text-white fs-3 ${props.ninjaProp}`}>NinjaPolis</label>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-md-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-3 mx-md-5">
                        <label className={`nav-link ${props.dinamicaProp}`}>Dinamicas</label>
                        <label className={`nav-link mx-lg-2 ${props.caminoProp}`}>Camino Ninja</label>
                        <label onClick={enviarPerfil} className={`nav-link ${props.perfilProp}`}>Perfil</label>
                        <label onClick={enviarGestion} className={`nav-link mx-lg-2 ${props.gestionProp}`}>Autogestion</label>
                        <label onClick={sendShop} className={`nav-link mx-lg-2 ${props.shopProp}`}>Tienda</label>
                    </div>
                </div>
            </div>
            {ninjapolis && <Navigate to="/paginaPrincipal"/>}
            {gestion && <Navigate to="/paginaPrincipal/gestion"/>}
            {perfil && <Navigate to="/paginaPrincipal/perfil" /> }
            {shop && <Navigate to="/paginaPrincipal/shop/main" /> }
        </nav>
    )
}
export default Navegacion;