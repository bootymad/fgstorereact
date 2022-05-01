import React from "react";
import ProductBox from "./ProductBox";


export default function Products({products, cart, cartUpdater}) {
    const liProducts = products.map(product => {
        return <li key={product.name}>
            <ProductBox name={product.name} price={product.price} desc={product.desc} img={product.img} descFull={product.descFull} cartUpdater={cartUpdater} cart={cart} />
        </li>
    });
    return (
        <section className="products-container">
            
            <ul>
                {liProducts}
            </ul>
            <p>Click any product for it's ingredient list.</p>
            
        </section>
    )
}