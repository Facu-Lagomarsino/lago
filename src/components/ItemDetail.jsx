

function ItemDetail(props) {
    return (
        <>
      
        <div className="cards">
            <h1>DETALLE DEL ITEM!</h1> 
            <p>{props.description}</p>
            <img src={props.image} alt="Calzado"/>
        </div>

        </>
    )
}

export default ItemDetail;







// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";


// function CharacterDetail(){
//     const { id } = useParams();
//     const [ character, setCharacter ] = useState([]);
//     const [ loading, setLoading ] = useState(false);

//     const  CharacterDetail = async () => {

//         try {
//             setLoading(true);
//             const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);   
//             const data = await response.json();
            
//             setCharacter(data.results);
//             setLoading(false);
//         }catch(error) {
//             alert("ERROR");
//         }
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             return CharacterDetail();
//         }, 2000);
//     }, []);

//     if (loading) {
//         return <h1>Loading...</h1>
//     }
    

//     return <>CHARACTER DETAIL!</>
// }

// export default CharacterDetail;