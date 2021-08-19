import { useState, useEffect } from "react";

const baseURL = "https://rickandmortyapi.com/api/character";

function ItemDeatilContainer() {
    const [characters, setCharacter] = useState([]);
    
    const getCharacterFromApi = async () => {

        try {

            const response = await fetch(baseURL, {
                method: "GET",
            })
               
            const data = await response.json();
            setCharacter(data.results);

        }catch(error) {
            console.log("ERROR");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            return getCharacterFromApi();
        }, 2000);
    }, []);

    return (
       
        <div>
            {characters.map((character) =>  <>
            <h1>{character.name}</h1>
            <img src={character.image} alt="RICK"/>
            </>)}
        </div>
     
    );
}

export default ItemDeatilContainer;