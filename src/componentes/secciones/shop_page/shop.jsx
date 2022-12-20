import "./shop.css";

import Navegacion from "../navegacion/Navegacion";
import MenuBar from "./menu";

const Shop = ()=>{






    return(
        <div className="contShop">
            <Navegacion shopProp="disabled"/>
            <br/>
            <br/>
            <br/>
            <center><h1>Tienda</h1></center>
            <br/>
            <center ><h2>Headbands Masks Hats</h2></center>
            <MenuBar/>
        </div>
    )
}

export default Shop;