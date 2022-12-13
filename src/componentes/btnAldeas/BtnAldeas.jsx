import "../btnAldeas/btnAldeas.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const BtnAldeas = ()=>{

    const [ mostrar, setMostrar ] = useState(false);
    const [ dirSuna, setDirSuna ] = useState(false);
    const [ dirIwa, setDirIwa ] = useState(false);
    const [ dirKiri, setDirKiri ] = useState(false);
    const [ dirKonoha, setDirKonoha ] = useState(false);


    const mostrarBtn = (e)=>{
        setMostrar(false);
    }
    const mostrarAldeas = (e)=>{
        setMostrar(true);
    }

    const direccionar = (e)=>{
        e.preventDefault();

        const aldea = e.target.id;
        
        aldea === "suna" ? setDirSuna(true) : setDirSuna(false);
        aldea === "kiri" ? setDirKiri(true) : setDirKiri(false);
        aldea === "iwa" ? setDirIwa(true) : setDirIwa(false);
        aldea === "konoha" ? setDirKonoha(true) : setDirKonoha(false);

    }

    return(
        <div>
            {
                mostrar ?
                    <div className="contenedorBtn">
                        <button className="btnAldeaIndividual btnMenu" onClick={mostrarBtn}>M</button>
                        <button className="btnAldeaIndividual btnUno" id="suna" onClick={direccionar}>  </button>
                        <button className="btnAldeaIndividual btnDos" id="iwa" onClick={direccionar}>  </button>
                        <button className="btnAldeaIndividual btnTres" id="kiri" onClick={direccionar}>  </button>
                        <button className="btnAldeaIndividual btnCuatro" id="konoha" onClick={direccionar}>  </button>
                    </div>
                    :
                    <div >
                        <button className="btnAldeaIndividual btnMenu" onClick={mostrarAldeas}>M</button>
                    </div>
            }            
            {/* Redireccionamiento de aldeas */}
            { dirSuna && <Navigate replace to="/aldeas/sunagakure" /> }
            { dirKiri && <Navigate replace to="/aldeas/kirigakure" /> }
            { dirIwa && <Navigate replace to="/aldeas/iwagakure" /> }
            { dirKonoha && <Navigate replace to="/aldeas/konoha" /> }
        </div>
    )
}
export default BtnAldeas;