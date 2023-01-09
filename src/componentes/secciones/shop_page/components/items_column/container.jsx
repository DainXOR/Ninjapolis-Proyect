import "./container.css";

const Container = (properties)=>{

    return(
        <div className="itemsColumn">
            <h5>{properties.item}</h5>
            <br />
        </div>
    );
}
export default Container;
