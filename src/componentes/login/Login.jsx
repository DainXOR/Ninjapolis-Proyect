import "../../App.css"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import PaginaPrincipal from "../paginaPrincipal/PaginaPrincipal";

const Login = ()=>{

    const [correcto, setCorrecto] = useState(false);
    const [ hacerRegistro, setHacerRegistro ] = useState(false);

    const envio = (e)=>{
        e.preventDefault();

        const { pass, user } = e.target;
        const contra = pass.value;
        const usuario = user.value;

        if(contra === "12345" && usuario === "rodrigo"){
            setCorrecto(true);
        } else {
            setCorrecto(false);
        }
    }
    const redirRegistro = (e)=>{
        e.preventDefault();
        console.log(e.target.id)

        const { registrarme } = e.target.id;
        const reg = registrarme.value;

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
                    <button id="registrarme" onClick={redirRegistro}> ¿No tienes cuenta?  |  Registrarme </button>
                </label>
               
                <br/>
                <label className="my-0">NinjaPolis</label>
                { correcto && <Navigate to="/paginaPrincipal"/> }
                { hacerRegistro && <Navigate to="/register" /> }
            </form>
        </div>
    )
}
export default Login;