import "./counter.css";

import ItemsColumn from "../items_column/container";

const itemCounter = (properties)=>{

    const generateColumns = ()=>{
        let Columns = new Array();

        Object.entries(properties.itemsList).forEach(([key, value]) => {
            console.log(key, value);
            Columns.push(<ItemsColumn item={key} type={value}/>);
         });

        return Columns;
    }


    return(
        <div className="counterBox">
            <center><h2>{properties.title}</h2></center>
            <div className="itemsBox">
                {
                    generateColumns()
                }
            </div>
        </div>
    );
}
export default itemCounter;