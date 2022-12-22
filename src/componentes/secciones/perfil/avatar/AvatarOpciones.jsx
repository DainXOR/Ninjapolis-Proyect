import { useState } from "react";
import "../perfil.css";
import { AvPiel, AvBandana, AvAldeas, AvMascaras, AvScrath } from "./srcImpAvatar/ImpAvatar";

const AvatarOpciones = ()=>{
    
    const pielArreglo =  new AvPiel();
    const bandanaArreglo = new AvBandana();
    const aldeaArreglo = new AvAldeas();
    const mascaraArreglo = new AvMascaras();
    const scratchTypes = new AvScrath();

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