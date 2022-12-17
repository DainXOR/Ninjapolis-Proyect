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
import bandanaCinco from "./caracterAvatar/piel/bandana-cinco.svg";
// aldeas
import aldeaUno from "./caracterAvatar/piel/aldea-uno.svg";
import aldeaDos from "./caracterAvatar/piel/aldea-dos.svg";
import aldeaTres from "./caracterAvatar/piel/aldea-tres.svg";
import aldeaCuatro from "./caracterAvatar/piel/aldea-cuatro.svg";
// Mascaras
import mascaraUno from "./caracterAvatar/piel/mascara-uno.svg";   
import mascaraDos from "./caracterAvatar/piel/mascara-dos.svg";  
import mascaraTres from "./caracterAvatar/piel/mascara-tres.svg";
import mascaraCuatro from "./caracterAvatar/piel/mascara-cuatro.svg";
import mascaraCinco from "./caracterAvatar/piel/mascara-cinco.svg";
import mascaraSeis from "./caracterAvatar/piel/mascara-seis.svg";   // 1) Subir diseño a la carpeta piel (por ahora)
import mascaraSiete from "./caracterAvatar/piel/mascara-siete.svg"; // <---2) Importar la imagen de esta forma
// Rayones
import scratchStrike from "./caracterAvatar/piel/aldea-tachado.svg";
import scratchStrikes from "./caracterAvatar/piel/aldea-tachado.svg";
import scratchRust from "./caracterAvatar/piel/aldea-tachado.svg";
import scratchBite from "./caracterAvatar/piel/aldea-tachado.svg";
import scratchTorn from "./caracterAvatar/piel/aldea-tachado.svg";
//import scratchStrikes from "./caracterAvatar/scratch/strike_2.svg";
//import scratchRust from "./caracterAvatar/scratch/rust_1.svg";
//import scratchBite from "./caracterAvatar/scratch/bite_1.svg";
//import scratchTorn from "./caracterAvatar/scratch/torn_1.svg";


const AvatarOpciones = ()=>{

    // tarea: condicionar la bandana con los simbolos de las aldeas, dependencia uno de otro(si no hay bandana, no tiene que haber simbolo)
    // > Challenge: Accepted ;)
    let pielArreglo = [pielUno, pielDos, pielTres, pielCuatro, pielCinco, pielSeis, pielSiete, 
                       pielOcho, pielNueve, pielDies, pielOnce];
    let bandanaArreglo = [bandanaUno, bandanaDos, bandanaTres, bandanaCuatro, 
                          bandanaCinco];   // <--- 3) Crear el arreglo con los import del mismo tipo
    let aldeaArreglo = [aldeaUno, aldeaDos, aldeaTres, aldeaCuatro];
    let mascaraArreglo = [mascaraUno, mascaraDos, mascaraTres, mascaraCuatro, mascaraCinco, 
                          mascaraSeis, mascaraSiete];

    let scratchTypes = [scratchStrike, scratchStrikes, scratchRust, scratchBite, scratchTorn];

    const [ piel, setPiel ] = useState(pielArreglo[0]); 

    const [ bandana, setbandana ] = useState(bandanaArreglo[0]); // <--- 4) Cargar el arreglo e inicializarlo en la p 0
    const [ mostrarBandana, setMostrarBandana ] = useState(false); // <--- 5) inicilizar en "false" la condicion para mostrar la imagen / Solo la piel se muestra desde el principio, las demas no deben

    const [ aldea, setAldea ] = useState(aldeaArreglo[0]); 
    const [ mostrarAldea, setMostrarAldea ] = useState(false);

    const [ mascara, setMascara ] = useState(mascaraArreglo);
    const [ mostrarMascara, setMostrarMascara ] = useState(false);

    const [scratch, setScratch] = useState(scratchTypes[0]); // tachar bandana
    const [showScratch, setScratchVisible] = useState(false); // tachar bandana
    
    
    const agregarPiel = (e)=>{
        setPiel(pielArreglo[e.target.id]);
    }
    const agregarBandana = (e)=>{   // 6) funcion para agregar la imagen - ir cambiando estos nombres por su categoria     
        if(e.target.id == 0){
            setMostrarBandana(false); // boton de quitar
            setMostrarAldea(false);
            setScratch(false);

        } else {
            setMostrarBandana(true);
            setbandana(bandanaArreglo[e.target.id - 1]);
        }
    
    }
    const agregarAldea = (e)=>{
        if(e.target.id == 0) {
            setMostrarAldea(false);

        } else if(mostrarBandana == true) {
            setMostrarAldea(true);
            setAldea(aldeaArreglo[e.target.id - 1]);
        }
    }
    const agregarTachar = (e)=>{
        if(e.target.id == 0){
            setScratchVisible(false);
            
        } else if(mostrarBandana == true) {
            setScratchVisible(true);
            setScratch(scratchTypes[e.target.id - 1]);
        }
    }
    const agregarMascara = (e)=>{
        if(e.target.id == 0){
            setMostrarMascara(false); //boton de quitar
            
        } else {
            setMostrarMascara(true);
            setMascara(mascaraArreglo[e.target.id - 1]);
        }
    }
    /* tarea: Luego cambiar la parte del cuerpo, para ahorrar lineas  */
    return(
        <div>
            <div className="">
                <div className="contCuadroPrincipal ">
                    <img alt="color de piel" className="position-absolute" src={piel} />
                    {mostrarBandana && <img alt="" className="position-absolute" src={bandana} />} 
                    {mostrarAldea && <img alt="" className="position-absolute" src={aldea} />} 
                    {showScratch && <img alt="" className="position-absolute" src={scratch} />} 
                    {mostrarMascara && <img alt="" className="position-absolute" src={mascara} />}  {/* 7) Colocar de esta forma las variables de la parte 4 y 5, ej: mostrar(nombreDeCategoria) y (categoria) - dependiendo de su importancia, estar atento al orden. Por ej: una mascara siempre va encima de la boca, asi que primero se pone la boca, y debajo(en el codigo) la mascara  */}
                </div>
                
                <div>
                    <div className="accordion" id="accordionExample"> {/* 8) copiar este div y pegarlo en la ultima fila (estar atento de como empieza y terminan los divs)  */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Color de piel
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="contElegirColor"> {/* 9) En los "OnClick" poner el nombre de la funcion(categoria) */}
                                        <div onClick={agregarPiel} id="0" className="elegirColor c0"> {/* Aqui se podria poner un nombre */} </div>
                                        <div onClick={agregarPiel} id="1" className="elegirColor c1"></div>
                                        <div onClick={agregarPiel} id="2" className="elegirColor c2"></div>{/*"elegirColor":no usar en otro lado */}
                                        <div onClick={agregarPiel} id="3" className="elegirColor c3"></div>{/* podes cambiarlo por "elegirBandana" */}
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
                                        <div onClick={agregarBandana} id="1" className="elegirBandana">Marron</div>
                                        <div onClick={agregarBandana} id="2" className="elegirBandana">Blanca</div>
                                        <div onClick={agregarBandana} id="3" className="elegirBandana">Oscura</div>
                                        <div onClick={agregarBandana} id="4" className="elegirBandana">Azul</div>
                                        <div onClick={agregarBandana} id="5" className="elegirBandana">Rosa</div>
                                        <div onClick={agregarBandana} id="0" className="elegirBandana">Quitar</div>
                                    </div>
                                    <div className="contElegirBandana my-3">
                                        <label>Aldea: </label>
                                        <div onClick={agregarAldea} id="1" className="elegirBandana">Suna</div>
                                        <div onClick={agregarAldea} id="2" className="elegirBandana">Iwa</div>
                                        <div onClick={agregarAldea} id="3" className="elegirBandana">Kiri</div>
                                        <div onClick={agregarAldea} id="4" className="elegirBandana">Konoha</div>
                                        <div onClick={agregarAldea} id="0" className="elegirBandana">Quitar</div>
                                    </div>
                                    <div className="contElegirBandana">
                                        <label>Marca: </label>
                                        <div onClick={agregarTachar} id="1" className="elegirBandana">Tachon</div>
                                        <div onClick={agregarTachar} id="1" className="elegirBandana">Rasguño</div>
                                        <div onClick={agregarTachar} id="1" className="elegirBandana">Oxido</div>
                                        <div onClick={agregarTachar} id="1" className="elegirBandana">Mordida</div>
                                        <div onClick={agregarTachar} id="1" className="elegirBandana">Grietas</div>
                                        <div onClick={agregarTachar} id="0" className="elegirBandana">Quitar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                Mascaras
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="contElegirColor">
                                        <div onClick={agregarMascara} id="1" className="elegirBandana c0">1</div>
                                        <div onClick={agregarMascara} id="2" className="elegirBandana c0">2</div>
                                        <div onClick={agregarMascara} id="3" className="elegirBandana c0">3</div>
                                        <div onClick={agregarMascara} id="4" className="elegirBandana c0">4</div>
                                        <div onClick={agregarMascara} id="5" className="elegirBandana c0">5</div>
                                        <div onClick={agregarMascara} id="6" className="elegirBandana c0">6</div>
                                        <div onClick={agregarMascara} id="7" className="elegirBandana c0">7</div>
                                        <div onClick={agregarMascara} id="0" className="elegirBandana c0">Quitar</div>
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