function itemDetail(props) {

    return (

        <>
      
            <div className="cards">
                <span>DETALLE DEL ITEM!</span> 
                <p>{props.description}</p>
                <img src={props.image} alt="Calzado"/>
                <strong>$ {props.price}</strong>
            </div>

        </>

    )
}

export default itemDetail;






