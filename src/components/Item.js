import ItemCount from "./ItemCount";

function Item({name, description, count, stock}) {

    return(
        <>
        <div className="cards">
            <p>{description}</p>
            <span>{name}</span>
            <h1>FOTO!</h1>
            <ItemCount count ="1" stock="10" />
            <button>AGREGAR</button>
        </div>    
        </>
    )
} 

export default Item;