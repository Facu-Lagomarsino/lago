import ItemListContainer from "../components/ItemListContainer";
import Footer from "../components/Footer";


function Home(){
    let nombre = "Facu Lagomarsino";

    return (

            <>
            
                <div id="main" className="container"> 
                    <ItemListContainer greeting="LAGO'" /> 
                </div>
           
                <Footer nombre={nombre} />
                   
            </>

    );    
}

export default Home;