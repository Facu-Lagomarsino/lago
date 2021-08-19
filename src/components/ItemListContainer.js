import ItemList from "./ItemList";
import ItemDeatilContainer from "./ItemDeatilContainer";

function ItemListContainer(props) {
  return (
    <>
        <div id="main" className="container">
          <h1>{props.greeting}</h1>
          <p>React!</p>   
          <ItemList />
          <ItemDeatilContainer />
        </div>
    </>
    );
}

export default ItemListContainer;