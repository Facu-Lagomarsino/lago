import ItemListContainer from "../components/ItemListContainer";
import ItemDeatilContainer from "../components/ItemDetailContainer";
import Footer from "../components/Footer";

import "../css/Style.css";

function Home(){
    let nombre = "Facu Lagomarsino";

    return (
            <>
        
            <div id="main" className="container"> 
                <ItemListContainer greeting="LAGO'" /> 
                <ItemDeatilContainer />
            </div>
           
                <Footer nombre={nombre} />
                   
            </>
    );    
}

export default Home;