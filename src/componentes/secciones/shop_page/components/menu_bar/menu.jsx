import "./menu.css";

// &lt;$&gt; Simbolo <$>

const ShopMenu = (actualSection)=>{

    return(
        <div className="menuSide" id="menu_side">
            <div className="menuBody">
                <a href="./main" className={actualSection.main}>
                    <div className="option">
                        <i className="icon icon_menu" title="menu">.</i>
                        <h4>Menu</h4>
                    </div>
                </a>
                <a href="./head" className={actualSection.head}>
                    <div className="option">
                        <i className="icon icon_hat" title="head">.</i>
                        <h4>Sombreros</h4>
                    </div>
                </a>
                <a href="./face" className={actualSection.face}>
                    <div className="option">
                        <i className="icon icon_mask" title="face">.</i>
                        <h4>Mascaras</h4>
                    </div>
                </a>
                <a href="./body" className={actualSection.body}>
                    <div className="option">
                        <i className="icon icon_body" title="body">.</i>
                        <h4>Cuerpo</h4>
                    </div>
                </a>
                <a href="./legs" className={actualSection.legs}>
                    <div className="option">
                        <i className="icon icon_legs" title="legs">.</i>
                        <h4>Pantalones</h4>
                    </div>
                </a>
                <a href="./feets" className={actualSection.feets}>
                    <div className="option">
                        <i className="icon icon_feets" title="feets">.</i>
                        <h4>Patas</h4>
                    </div>
                </a>
                <a href="./arms" className={actualSection.arms}>
                    <div className="option">
                        <i className="icon icon_arm" title="arms">.</i>
                        <h4>Brazos</h4>
                    </div>
                </a>
                <a href="./hands" className={actualSection.hands}>
                    <div className="option">
                        <i className="icon icon_gloves" title="hands">.</i>
                        <h4>Manos</h4>
                    </div>
                </a>
                <a href="./jewelry" className={actualSection.jewelry}>
                    <div className="option">
                        <i className="icon icon_jewelry" title="jewelry">.</i>
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