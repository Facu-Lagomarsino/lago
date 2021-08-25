import ItemDetailContainer from "../components/ItemDetailContainer";
import Footer from "../components/Footer";

function Characters(){
    let nombre = "Facu Lagomarsino";

    return (

        <>

        <div className="container">
            <h3>CHARACTER!</h3>
            <ItemDetailContainer />
        </div>

        <Footer nombre={nombre} />

        </>
    )

}

export default Characters;
