import ItemList from "./ItemList";

function ItemListContainer(props) {
  return (
    <>
        <div id="main" className="container">
          <h1>{props.greeting}</h1>
          <p>React!</p>   
          <ItemList />
        </div>
    </>
    );
}

export default ItemListContainer;