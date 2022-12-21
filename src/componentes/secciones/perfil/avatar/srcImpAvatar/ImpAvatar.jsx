// Piel
import pielUno from "../caracterAvatar/piel/pielClara-uno.svg";
import pielDos from "../caracterAvatar/piel/pielClara-dos.svg";
import pielTres from "../caracterAvatar/piel/pielClara-tres.svg";
import pielCuatro from "../caracterAvatar/piel/pielAzul.svg";
import pielCinco from "../caracterAvatar/piel/pielVerde.svg";
import pielSeis from "../caracterAvatar/piel/pielMorada.svg";
import pielSiete from "../caracterAvatar/piel/pielMorena-uno.svg";
import pielOcho from "../caracterAvatar/piel/pielMorena-dos.svg";
import pielNueve from "../caracterAvatar/piel/pielMorena-tres.svg";
import pielDies from "../caracterAvatar/piel/pielAzul-uno.svg";
import pielOnce from "../caracterAvatar/piel/pielVerde-uno.svg";
// Bandana
import bandanaUno from "../caracterAvatar/piel/bandana-uno.svg";
import bandanaDos from "../caracterAvatar/piel/bandana-dos.svg";
import bandanaTres from "../caracterAvatar/piel/bandana-tres.svg";
import bandanaCuatro from "../caracterAvatar/piel/bandana-cuatro.svg";
import bandanaCinco from "../caracterAvatar/piel/bandana-cinco.svg";
// Aldeas
import aldeaUno from "../caracterAvatar/piel/aldea-uno.svg";
import aldeaDos from "../caracterAvatar/piel/aldea-dos.svg";
import aldeaTres from "../caracterAvatar/piel/aldea-tres.svg";
import aldeaCuatro from "../caracterAvatar/piel/aldea-cuatro.svg";
// Mascaras
import mascaraUno from "../caracterAvatar/piel/mascara-uno.svg";   
import mascaraDos from "../caracterAvatar/piel/mascara-dos.svg";  
import mascaraTres from "../caracterAvatar/piel/mascara-tres.svg";
import mascaraCuatro from "../caracterAvatar/piel/mascara-cuatro.svg";
import mascaraCinco from "../caracterAvatar/piel/mascara-cinco.svg";
import mascaraSeis from "../caracterAvatar/piel/mascara-seis.svg";
import mascaraSiete from "../caracterAvatar/piel/mascara-siete.svg";
// Rayones
import scratchStrike from "../caracterAvatar/piel/aldea-tachado.svg";
import scratchStrikes from "../caracterAvatar/piel/aldea-tachado.svg";
import scratchRust from "../caracterAvatar/piel/aldea-tachado.svg";
import scratchBite from "../caracterAvatar/piel/aldea-tachado.svg";
import scratchTorn from "../caracterAvatar/piel/aldea-tachado.svg";
//import scratchStrikes from "../caracterAvatar/scratch/strike_2.svg";
//import scratchRust from "../caracterAvatar/scratch/rust_1.svg";
//import scratchBite from "../caracterAvatar/scratch/bite_1.svg";
//import scratchTorn from "../caracterAvatar/scratch/torn_1.svg";


export function AvPiel(){
    let pieles = [pielUno, pielDos, pielTres, pielCuatro, pielCinco, 
                  pielSeis, pielSiete, pielOcho, pielNueve, pielDies, pielOnce];    
    return pieles;
}
export function AvBandana(){
    let bandanas = [bandanaUno, bandanaDos, bandanaTres, bandanaCuatro, bandanaCinco];
    return bandanas;
}
export function AvAldeas(){
    let aldeas = [aldeaUno, aldeaDos, aldeaTres, aldeaCuatro];
    return aldeas;
}
export function AvMascaras(){
    let mascaras = [mascaraUno, mascaraDos, mascaraTres, mascaraCuatro, mascaraCinco, 
        mascaraSeis, mascaraSiete];
    return mascaras;
}
export function AvScrath(){
    let scratch = [scratchStrike, scratchStrikes, scratchRust, scratchBite, scratchTorn];
    return scratch;
}