// import { useState, useEffect  } from "react";
import Item from "./Item";

    //IMAGES
// import Nike1 from "../img/nike1.webp";



function ItemList({products}) {
    // const [product, setProducts] = useState([])

    // useEffect(() => {
    //     new Promise((resolve, reject) => {

    //     const data = [
    //         {
    //             id: 1,
    //             description: "Running Hombre",
    //             image: Nike1,
    //             count: 1,
    //             stock: 10

    //         },
    //         {
    //             id: 2,
    //             description: "Running Mujer",
    //             image: Nike1,
    //             count: 1,
    //             stock: 10

    //         }
    //     ]
    //     setTimeout(() => resolve(data), 2000)     
    //     }).then((dataResolve) => { 
    //         setProducts(dataResolve)
    //     })
    //     .catch((error) => {
    //         console.log("Error", error)
    //     })
    // }, [])

    return (
        <>
        <div>
            {products.map((element) => (
                <Item {...element} />
            ))} 
        </div>    
        </>
    )
}

export default ItemList;