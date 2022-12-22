import "./shop.css";

import NavegacionBar from "../navegacion/Navegacion";
import MenuBar from "./menu";

const Shop = ()=>{






    return(
        <div className="contShop">
            <NavegacionBar shopProp="disabled"/>
            <br/>
            <br/>
            <br/>
            <MenuBar/>
        </div>
    )
}

export default Shop;