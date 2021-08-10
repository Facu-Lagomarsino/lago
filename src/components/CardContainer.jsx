// import { useEffect, useState } from "react"; 
// import Card from './Card'

// const cards = [
//     {
//         name: "Calzados",
//         product: {
//             description: "Artículo deportivo",
//             brand: "Adidas"  
//         }
//     },
//     {
//         name: "Calzados",
//         product: {
//             description: "Artículo deportivo",
//             brand: "Nike"  
//         }
//     }
// ]

// function CardContainer() {
//     const [ dataCards, setDataCards ] = useState([]);
//     const [ loading, setLoading ] = useState(false);

//     useEffect(() => {
//         setLoading(true)
//         setTimeout(() => {
//             setDataCards(cards)
//         }, 2000)
//     }, [])

//     useEffect(() => {

//     }, [dataCards])

//     if (loading) {
//         return (
//             <h3>Loading...</h3>
//         )
//     }

//     return (
//         <>
//         {cards.map((element) => (
//             <Card {...element} />
//         ))}      
//         </>
//     )
// } 

// export default CardContainer;