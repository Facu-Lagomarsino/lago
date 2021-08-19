import { useState, useEffect  } from "react";
import Item from "./Item";


function ItemList() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        new Promise((resolve, reject) => {

        const data = [
            {
                id: 1,
                name: "Calzado",
                description: "Running Hombre",
                count: 1,
                stock: 10

            },
            {
                id: 1,
                name: "Calzado",
                description: "Running Mujer",
                count: 1,
                stock: 10

            }
        ]
        setTimeout(() => resolve(data), 2000)     
        }).then((dataResolve) => { 
            setProducts(dataResolve)
        })
        .catch((error) => {
            console.log("Error", error)
        })
    }, [])

    return (
        <>
         {products.map((element) => (
            <Item {...element} />
        ))} 
        </>
    )
}

export default ItemList;