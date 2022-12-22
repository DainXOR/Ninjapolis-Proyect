import "./menu.css";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const ShopMenu = ()=>{

    const dirs = ["main", "face", "head", "legs", "feets", "body", "hands", "arms", "jewelry"];

    const [show, setShow] = useState(false);
    const [section, setSection] = useState(dirs[0]);


    const redirect = (e)=>{
        e.preventDefault();

        setSection(e.target.id);

    }

    

    return(
        <div className="menuSide" id="menu_side">
            <div className="menuBody">
                <a href="#" className="selected">
                    <div className="option">
                        <i className="icon_menu" title="menu">&lt;$&gt;</i>
                        <h4>Menu</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="far fa-snowflake" title="head">&lt;$&gt;</i>
                        <h4>Sombreros</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_mask" title="face">&lt;$&gt;</i>
                        <h4>Mascaras</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_body" title="body">&lt;$&gt;</i>
                        <h4>Cuerpo</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_legs" title="legs">&lt;$&gt;</i>
                        <h4>Pantalones</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_shoes" title="feets">&lt;$&gt;</i>
                        <h4>Mmm Patas</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_arm" title="arms">&lt;$&gt;</i>
                        <h4>Brazos</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_gloves" title="hands">&lt;$&gt;</i>
                        <h4>Manos</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_necklace" title="jewelry">&lt;$&gt;</i>
                        <h4>Joyeria</h4>
                    </div>
                </a>
            </div>
        </div>
    );

}
export default ShopMenu;


/*
                <a href="#" className="selected">
                    <div className="option">
                        <i className="icon_menu" title="menu">&lt;$&gt;</i>
                        <h4>Menu</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="far fa-snowflake" title="head">&lt;$&gt;</i>
                        <h4>Sombreros</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_mask" title="face">&lt;$&gt;</i>
                        <h4>Mascaras</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_body" title="body">&lt;$&gt;</i>
                        <h4>Cuerpo</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_legs" title="legs">&lt;$&gt;</i>
                        <h4>Pantalones</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_shoes" title="feets">&lt;$&gt;</i>
                        <h4>Mmm Patas</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_arm" title="arms">&lt;$&gt;</i>
                        <h4>Brazos</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_gloves" title="hands">&lt;$&gt;</i>
                        <h4>Manos</h4>
                    </div>
                </a>

                <a href="#">
                    <div className="option">
                        <i className="icon_necklace" title="jewelry">&lt;$&gt;</i>
                        <h4>Joyeria</h4>
                    </div>
                </a>
*/

//{
            //    show ?
            //        <div className="openMenu">
            //            <div className="actualMenu">
            //            <button className="menu_button" id="head" onClick={redirect}>Sombreros</button> <br/>
            //            <button className="menu_button" id="face" onClick={redirect}>Mascaras</button>
            //            <button className="menu_button" id="body" onClick={redirect}>Cuerpo</button>
            //            <button className="menu_button" id="legs" onClick={redirect}>Pantalones</button>
            //            <button className="menu_button" id="feets" onClick={redirect}>Mmm patas</button>
            //            <button className="menu_button" id="arms" onClick={redirect}>Brazos</button>
            //            <button className="menu_button" id="hands" onClick={redirect}>Manos</button>
            //            <button className="menu_button" id="jewelry" onClick={redirect}>Joyeria</button>
            //            </div>
            //            <button className="closeMenuButton" onClick={closeMenu}>Quien diria q esto iba servir</button>
            //        </div>
            //        :
            //        <div className="closeMenu">
            //            <button className="openMenuButton" onClick={openMenu}>a</button>
            //        </div>
            //}