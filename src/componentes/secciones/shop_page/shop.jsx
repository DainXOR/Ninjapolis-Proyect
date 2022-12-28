import "./shop.css";

import NavegacionBar from "../navegacion/Navegacion";
import MenuBar from "./components/menu_bar/menu";

const Shop = ()=>{






    return(
        <div className="contShop">
            <NavegacionBar shopProp="disabled"/>
            <br/>
            <br/>
            <br/>
            <MenuBar main="selected"/>

        </div>
    )
}

export default Shop;