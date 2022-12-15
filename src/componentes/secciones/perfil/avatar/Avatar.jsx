import "../perfil.css";
import AvatarOpciones from "./AvatarOpciones";

const Avatar = ()=>{
    return(
        <div>
            <button type="button" className="btn btn-dark py-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Modificar Avatar
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-secondary" id="exampleModalLabel">Avatar</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AvatarOpciones/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Avatar;