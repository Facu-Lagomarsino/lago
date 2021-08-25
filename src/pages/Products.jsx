import ItemListContainer from "../components/ItemListContainer";
import Footer from "../components/Footer";


function products(){
    let nombre = "Facu Lagomarsino";

    return (

        <>

            <div className="container">
                <h3>PRODUCTS!</h3>
                <ItemListContainer />
            </div>

            <Footer nombre={nombre} />

        </>
    )

}

export default products;
