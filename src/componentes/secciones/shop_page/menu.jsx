import "./menu.css";

import { useState } from "react";
import { Navigate } from "react-router-dom";

const ShopMenu = ()=>{

    const dirs = ["main", "headbands", "masks", "hats", "necklaces", "gloves", "shirts", "jackets", "pants", "shoes", "torso", "hands", "jewelry"];

    const [show, setShow] = useState(false);
    const [section, setSection] = useState(dirs[0]);

    const openMenu = (e)=>{
        setShow(true);
    }
    const closeMenu = (e)=>{
        setShow(false);
    }

    const redirect = (e)=>{
        e.preventDefault();

        setSection(e.target.id);

    }

    return(
        <div>
            {
                show ?
                    <div className="openMenu">
                        <button className="closeMenuButton" onClick={closeMenu}>Quien diria q esto iba servir</button>
                    </div>
                    :
                    <div className="closeMenu">
                        <button className="openMenuButton" onClick={openMenu}>a</button>
                    </div>
            }
        </div>
    );

}
export default ShopMenu;