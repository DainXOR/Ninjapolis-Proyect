import { useState } from "react";
import "../perfil.css";
// color de piel
import pielUno from "./caracterAvatar/piel/pielClara-uno.svg";
import pielDos from "./caracterAvatar/piel/pielClara-dos.svg";
import pielTres from "./caracterAvatar/piel/pielClara-tres.svg";
import pielCuatro from "./caracterAvatar/piel/pielAzul.svg";
import pielCinco from "./caracterAvatar/piel/pielVerde.svg";
import pielSeis from "./caracterAvatar/piel/pielMorada.svg";
import pielSiete from "./caracterAvatar/piel/pielMorena-uno.svg";
import pielOcho from "./caracterAvatar/piel/pielMorena-dos.svg";
import pielNueve from "./caracterAvatar/piel/pielMorena-tres.svg";
import pielDies from "./caracterAvatar/piel/pielAzul-uno.svg";
import pielOnce from "./caracterAvatar/piel/pielVerde-uno.svg";
// Bandanas
import bandanaUno from "./caracterAvatar/piel/bandana-uno.svg";
import bandanaDos from "./caracterAvatar/piel/bandana-dos.svg";
import bandanaTres from "./caracterAvatar/piel/bandana-tres.svg";
import bandanaCuatro from "./caracterAvatar/piel/bandana-cuatro.svg";
import aldeaUno from "./caracterAvatar/piel/aldea-uno.svg";
import aldeaTachado from "./caracterAvatar/piel/aldea-tachado.svg";

const AvatarOpciones = ()=>{

    // tarea: condicionar la bandana con los simbolos de las aldeas, dependencia uno de otro

    let pielArreglo = [pielUno, pielDos, pielTres, pielCuatro, pielCinco, 
                       pielSeis, pielSiete, pielOcho, pielNueve, pielDies, pielOnce];
    let bandanaArreglo = [bandanaUno, bandanaDos, bandanaTres, bandanaCuatro];
    let aldeaArreglo = [aldeaUno];
    
    const [ piel, setPiel ] = useState(pielArreglo[0]); // cargar las pieles
    const [ bandana, setbandana ] = useState(bandanaArreglo[0]); // cargar las bandanas
    const [ mostrarBandana, setMostrarBandana ] = useState(false); 
    const [ aldea, setAldea ] = useState(aldeaArreglo[0]); // cargar las aldeas
    const [ mostrarAldea, setMostrarAldea ] = useState(false);

    const [tach, setTach] = useState(false); 
    
    const agregarPiel = (e)=>{
        for (let i = 0; i < pielArreglo.length; i++) {
            if(e.target.id == i){
                setPiel(pielArreglo[i]);
            }
        }
    }
    const agregarBandana = (e)=>{
        for (let i = 0; i < bandanaArreglo.length; i++) {
            if(e.target.id == i){
                setMostrarBandana(true);
                setbandana(bandanaArreglo[i]);
            }
            if(e.target.id == 4){
                setMostrarBandana(false);
            }
        }
    }
    const agregarAldea = (e)=>{
        for (let i = 0; i < aldeaArreglo.length; i++) {
            if(e.target.id == i){
                setMostrarAldea(true);
                setAldea(aldeaArreglo[i]);
            }
        }
    }
    const agregarTachar = (e)=>{
        if(e.target.id == 4){
            setTach(true);
        } else {
            setTach(false);
        }
    }

    return(
        <div>
            <div className="">
                <div className="contCuadroPrincipal ">
                    <img alt="color de piel" className="position-absolute" src={piel} />
                    {mostrarBandana && <img alt="" className="position-absolute" src={bandana} />} 
                    {mostrarAldea && <img alt="" className="position-absolute" src={aldea} />} 
                    {tach && <img alt="" className="position-absolute" src={aldeaTachado} />} 
                </div>
                
                <div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Color de piel
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="contElegirColor">
                                        <div onClick={agregarPiel} id="0" className="elegirColor c0"></div>
                                        <div onClick={agregarPiel} id="1" className="elegirColor c1"></div>
                                        <div onClick={agregarPiel} id="2" className="elegirColor c2"></div>
                                        <div onClick={agregarPiel} id="3" className="elegirColor c3"></div>
                                        <div onClick={agregarPiel} id="4" className="elegirColor c4"></div>
                                        <div onClick={agregarPiel} id="5" className="elegirColor c5"></div>
                                        <div onClick={agregarPiel} id="6" className="elegirColor c6"></div>
                                        <div onClick={agregarPiel} id="7" className="elegirColor c7"></div>
                                        <div onClick={agregarPiel} id="8" className="elegirColor c8"></div>
                                        <div onClick={agregarPiel} id="9" className="elegirColor c9"></div>
                                        <div onClick={agregarPiel} id="10" className="elegirColor c10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                Bandana Ninja
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="contElegirBandana">
                                        <label>Color: </label>
                                        <div onClick={agregarBandana} id="0" className="elegirBandana">Marron</div>
                                        <div onClick={agregarBandana} id="1" className="elegirBandana">Blanca</div>
                                        <div onClick={agregarBandana} id="2" className="elegirBandana">Oscura</div>
                                        <div onClick={agregarBandana} id="3" className="elegirBandana">Azul</div>
                                        <div onClick={agregarBandana} id="4" className="elegirBandana">Quitar</div>
                                    </div>
                                    <div className="contElegirBandana my-3">
                                        <label>Aldea: </label>
                                        <div onClick={agregarAldea} id="0" className="elegirBandana">Suna</div>
                                        <div  id="1" className="elegirBandana">Konoha</div>
                                        <div  id="2" className="elegirBandana">Iwa</div>
                                        <div  id="3" className="elegirBandana">Kiri</div>
                                        <div onClick={agregarTachar} id="4" className="elegirBandana">Tachar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AvatarOpciones;