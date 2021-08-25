import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { productsJson } from "../json/ProductsJson";
import ItemDetail from "./ItemDetail";
import Footer from "../components/Footer";

function ItemDetailContainer(){
    let nombre = "Facu Lagomarsino";
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
    
    return (

        <>

            <div className="container"> 
                <ItemDetail {...product} />
                <Link to="/products" style={{ display: "block", paddingBottom: "1rem" }}>VOLVER!</Link>
            </div>

            <Footer nombre={nombre} />

        </>

    );
}

export default ItemDetailContainer;



