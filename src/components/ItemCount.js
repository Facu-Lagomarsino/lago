import React, { useState } from "react";
import Button from "./Button";

function ItemCount(props) {
    const [card] = useState("Card");
    const [count, setCount] = useState(0);
    const [prodStock] = useState(props.stock);

    function sum () {
        if (count < prodStock) {
            setCount(count + 1)
        }
    }

    function res () {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (

        <>

            <h1>{card}</h1>
            <h2>{count}</h2>
            <Button text="+" onAdd={() => sum()} />
            <Button text="-" onAdd={() => res()} />
            
        </>

    );
}

export default ItemCount;
