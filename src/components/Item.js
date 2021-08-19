import ItemCount from "./ItemCount";

function Item({name, description, count, stock}) {

    return(
        <>
        <div className="cards">
            <p>{description}</p>
            <span>{name}</span>
            <h1>FOTO!</h1>
            <ItemCount count ={count} stock={stock} />
            <button>AGREGAR</button>
        </div>    
        </>
    )
} 

export default Item;