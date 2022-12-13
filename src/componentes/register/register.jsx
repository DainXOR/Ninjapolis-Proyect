import "../../App.css"
import { useState } from "react"
import { Navigate } from "react-router-dom";

const Register = ()=> {

    const [ iniciarSesion, setIniciarSesion ] = useState(false);
 
    const redirSesion = (e)=>{
        e.preventDefault();

        const { iniciarSesion } = e.target.id;
        const reg = iniciarSesion;

        reg === "iniciarSesion" ? setIniciarSesion(false) : setIniciarSesion(true);
    }

    return(
        <div className="fondoPrincipalContenedor">
            {/* Perfil Personal */}

            <form className="fondoSecundario container ">
                <p className="h1 text-center">Registro</p>
                <div className="my-2">
                    <label className="fs-6">Nombre de usuario</label>
                    <input type="text" className="form-control px-3" 
                    id="user" placeholder="Ej: Rodrigo"/>
                </div>
                <div className="my-4">
                    <label className="fs-6">Contraseña</label>
                    <input type="text" className="form-control px-3" 
                    id="pass" placeholder="Ej: ninjapolis"/>
                </div>
                <div className="my-4">
                    <label className="fs-6">Numero de telefono</label>
                    <input type="text" className="form-control px-3" 
                    id="pass" placeholder="Ej: +54 35*******"/>
                </div>
                {/* opcion de genero */}
                <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inlineRadio1">Shinobi</label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                </div>
                <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inlineRadio2">Kunoichi</label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                </div>

                <button className="btn form-control btnLogin my-3" >Crear cuenta</button>
                <div className="text-center my-2">
                    <label className="my-3" > 
                        <button id="iniciarSesion" onClick={redirSesion} className="btn text-secondary"> ¿Ya tienes Cuenta?  |  Iniciar Sesion </button>
                    </label>
                    <br/>
                    <label className="my-0 text-secondary">NinjaPolis</label>

                </div>
            </form>
            {iniciarSesion && <Navigate replace to="/" />}
        </div>
    )
}
export default Register;