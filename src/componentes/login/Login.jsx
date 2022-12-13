import "../../App.css"
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = ()=>{

    const [correcto, setCorrecto] = useState(false);
    const [ hacerRegistro, setHacerRegistro ] = useState(false);

    const envio = (e)=>{
        e.preventDefault();

        const { pass, user } = e.target;
        const contra = pass.value;
        const usuario = user.value;

        if(contra === "12345" && usuario === "rodrigo" ||
           contra === "<$>"   && usuario === "Dain"){
            setCorrecto(true);
        } else {
            setCorrecto(false);
        }
    }
    const redirRegistro = (e)=>{
        e.preventDefault();

        const { registrarme } = e.target.id;
        const reg = registrarme;

        reg === "registrarme" ? setHacerRegistro(false) : setHacerRegistro(true);
    }

    return(
        <div className="fondoPrincipalContenedor">
            <form className="fondoSecundario container text-center" onSubmit={envio}>
                <p className="h1 text-center my-4">Iniciar Sesion</p>
                <div className="my-4">
                    <input type="text" className="form-control px-3" 
                    id="user" placeholder="Usuario"/>
                </div>
                <div className="my-4">
                    <input type="text" className="form-control px-3" 
                    id="pass" placeholder="Contraseña"/>
                </div>
                <button className="btn form-control btnLogin" >Entrar</button>
                
                <label className="my-4" > 
                    <button id="registrarme" className="btn text-secondary" onClick={redirRegistro}> ¿No tienes cuenta?  |  Registrarme </button>
                </label>
               
                <br/>
                <label className="my-0 text-secondary">NinjaPolis</label>
                { correcto && <Navigate replace to="/paginaPrincipal"/> }
                { hacerRegistro && <Navigate replace to="/register" /> }
            </form>
        </div>
    )
}
export default Login;