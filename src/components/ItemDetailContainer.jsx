import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { productsJson } from "../json/ProductsJson";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const [product, setProduct] = useState([])
    const [ loading, setLoading ] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => resolve(productsJson.filter((item) => item.id === id)), 
            2000);
            setLoading(false);
        }).then((data) => setProduct(data[0]));            
    }, );

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    console.log(product);
    return (

        <div className="containerProducts"> 
            <ItemDetail {...product}/>
            <Link to="/characters">VOLVER!</Link>
        </div>

    );
}

export default ItemDetailContainer;





// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { productsJson } from "../json/productsJson";
// import ItemList from "./ItemList";

// function ItemListContainer(){
//     const [products, setProducts] = useState([])
//     const [ loading, setLoading ] = useState(false);

//     useEffect(() => {
//         setLoading(true);
//         new Promise((resolve, reject) => {
//             setTimeout(() => resolve(productsJson), 2000);
//         }).then((data) => setProducts(data));  
//             setLoading(false);   
//     }, []);

//     console.log("data ...", products )

//     if (loading) {
//         return <h1>Loading...</h1>
//     }
    
//     return (

//         <div className="containerProducts"> 
//             <ItemList productsJson={productsJson}/>
//             <Link to="/characters">VOLVER!</Link>
//         </div>

//     );
// }

// export default ItemListContainer;








// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// // import Item from "./Item";

// const baseURL = "https://rickandmortyapi.com/api/character";

// function ItemDetailContainer() {
//     const [ characters, setCharacters ] = useState([]);
//     const [ loading, setLoading ] = useState(false);
//     const getCharacterFromApi = async () => {

//         try {
//             setLoading(true);
//             const response = await fetch(baseURL, {
//                 method: "GET",
//             })
               
//             const data = await response.json();
//             setCharacters(data.results);
//             setLoading(false);
//         }catch(error) {
//             alert("ERROR");
//         }
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             return getCharacterFromApi();
//         }, 2000);
//     }, []); 

//     if (loading) {
//         return <h1>Loading...</h1>
//     }

//     return (
//         <>
     
//             {characters.map((item) => (
//                 <div className="containerCharacter">  
//                     <h1>{item.name}</h1>
//                     <img src={item.image} alt="Personaje"/>
//                     <Link to={`/characters-detail/${item.id} `}>
//                     VER DETALLE
//                     </Link>
//                 </div>
//             ))}

//         </>
//     );
// }

// export default ItemDetailContainer;