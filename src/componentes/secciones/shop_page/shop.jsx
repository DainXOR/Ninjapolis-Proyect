import "./shop.css";

import NavegacionBar from "../navegacion/Navegacion";
import MenuBar from "./components/menu_bar/menu";
import ItemsCounter from "./components/items_counter/counter";

const Shop = ()=>{

    const showItems = {"hats":"popular", "masks":"popular", "shirts":"popular", "pants":"popular", "shoes":"popular", "arms":"popular", "gloves":"popular", "jewelry":"popular"};




    return(
        <div className="contShop">
            <NavegacionBar shopProp="disabled"/>
            <br/><br/><br/>
            <MenuBar main="selected"/>
            <div className="shopBody">
                <ItemsCounter title="¡Popular!" itemsList={showItems}/>
                
            </div>
            
        </div>
    )
}

export default Shop;