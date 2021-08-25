import { useState, useEffect } from "react";
import { productsJson } from "../json/ProductsJson";
import ItemList from "./ItemList";

function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => 
        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => resolve(productsJson), 2000);
        }).then((data) => setProducts(data))
          .finally(() => {
            setLoading(false) 
        })  
    }, []);

  
    
    return loading ? <h1>Loading...</h1> : <ItemList products={products}/>  
     
}

export default ItemListContainer;






// import ItemList from "./ItemList";


// function ItemListContainer(props) {
//   return (
//     <>
        
//           <h1>{props.greeting}</h1>
//           <p>React!</p>   
//           <ItemList />
        
//     </>
//     );
// }

// export default ItemListContainer;