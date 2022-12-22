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
            <div className="cardAvatarCont">

            </div>
            <Avatar/>
        </div>
    )
}
export default Perfil;