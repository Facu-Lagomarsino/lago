import { useEffect, useState } from "react";
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
                stock: 10

            },
            {
                id: 1,
                name: "Calzado",
                description: "Running Mujer",
                stock: 10

            }
        ]
        setTimeout(() => resolve(data), 2000)     
        }).then((dataResolve) => { 
            setProducts(dataResolve)
        })
        .catch((error) => {
            console.log("error", error)
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