import "../../App.css"
import BtnAldeas from "../btnAldeas/BtnAldeas";
import Navegacion from "../secciones/navegacion/Navegacion"; 

const PaginaPrincipal = ()=> {
    return(
        <div className="fondoPrincipalContenedor">
            <Navegacion ninjaProp="disabled"/>

            <h2>Pagina Principal</h2>

            <BtnAldeas/>
        </div>
    )
}
export default PaginaPrincipal;