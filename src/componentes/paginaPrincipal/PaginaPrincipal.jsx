import "../../App.css"
import BtnAldeas from "../btnAldeas/BtnAldeas";
import Navegacion from "../secciones/navegacion/Navegacion";
import Autogestion from "../secciones/autogestion/Autogestion";

const PaginaPrincipal = ()=> {
    return(
        <div className="fondoPrincipalContenedor">
            <Navegacion/>
            <h2>Pagina Principal</h2>


            <Autogestion/>
            <BtnAldeas/>
        </div>
    )
}
export default PaginaPrincipal;