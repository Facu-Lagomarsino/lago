import { useState, useEffect } from "react";
import { productsJson } from "../json/ProductsJson";
import ItemList from "./ItemList";

function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true)
            setTimeout(() => resolve(productsJson), 2000);
        }).then((data) => setProducts(data))
          .finally(() => {
            setLoading(false)
        })  
    }, []);

    console.log("de donde viene?", products);
    
    return loading ? <p>Loading...</p> : <ItemList products={products} />;  
     
}

export default ItemListContainer;




