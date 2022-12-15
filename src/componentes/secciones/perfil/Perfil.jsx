import Navegacion from "../navegacion/Navegacion";
import Avatar from "./avatar/Avatar";
import "./perfil.css";

const Perfil = ()=>{
    return(
        <div className="contPerfil">
            <Navegacion perfilProp="disabled" />
            <br></br>
            <br></br>
            <br></br>
            <Avatar/>
            Perfil
        </div>
    )
}
export default Perfil;