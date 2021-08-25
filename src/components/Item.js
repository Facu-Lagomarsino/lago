import ItemCount from "./ItemCount";

import { Link } from "react-router-dom";

function Item({props}) {

    return(
        <>

            <div className="cards">
                <p>{props.description}</p>
                <img src={props.image} alt="Calzado"/>
                <ItemCount count ={props.initial} stock={props.stock} />
                <Link to={`/item/${props.id}`} >IR AL DERTALLE!</Link>
                <button>AGREGAR</button>
            </div>
                
        </>
    )
} 

export default Item;