import React from "react";
import { useState } from "react";
import DescriptionBox from "./DescriptionBox";








export default function ProductBox({name, price, desc, descFull, img, cartUpdater, cart}) {



    function handleCartUpdate() {
        if (name in cart) {
            cart[name].quantity++
            cartUpdater({...cart})
            return;
        }
        cartUpdater({...cart, [name]: {quantity: 1, price}})
    }


    const [clicked, setClicked] = useState(false);

    function handleClick(event) {
        if (clicked) {
            setClicked(false);
            return;
        }
        setClicked(true);
        return
    }



    const defaultContent = (
        <div className="product-box" onClick={handleClick}>
        <img src={img}></img>
        <h2>{name}</h2>
        
        <p>${price}</p>
        <p>{desc}</p>
        </div>
    )
    return (
        <div className="product-card-container">
            {clicked ? <DescriptionBox descFull={descFull} clickHandler={handleClick}/> : defaultContent}
            <button onClick={handleCartUpdate}>Add to Cart</button>
        </div>

    )
}