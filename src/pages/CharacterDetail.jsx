import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";


function CharacterDetail(){
    const { id } = useParams();

    const [ character, setCharacter ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const  getCharacter = async () => {

        try {
            setLoading(true);
            const response = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`
            );

            const data = await response.json();
            
            setCharacter(data);
            setLoading(false);
        }catch(error) {
            alert("ERROR");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            return getCharacter();
        }, 2000);
    }, );

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return (

        <div className="containerCharacter"> 
            <h1>{character.name}</h1>
            <img src={character.image} alt="Personaje"/>
            <Link to="/characters">VOLVER!</Link>
        </div>

    );
}

export default CharacterDetail;