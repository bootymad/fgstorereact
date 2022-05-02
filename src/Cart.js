import React from "react";




function CartItem({product, productName, cart, cartUpdater}) {

    function clickHandler() {
        if (cart[productName].quantity > 1) {
            cart[productName].quantity--;
            cartUpdater({...cart});
            return;
        }
        delete cart[productName];
        cartUpdater({...cart});

    }

    return (
        <div className="cart-item">
            <p className="product-name">{productName}</p>
            <p>${product.price}</p>
            <p>x{product.quantity}</p>
            <p className="product-total">${product.price * product.quantity}</p>
            <i onClick={clickHandler} className="fa-solid fa-x"></i>
        </div>
    )
}



export default function Cart({cart, cartUpdater}) {

    // cart object to divs
    const cartItems = Object.keys(cart);
    const cartItemDisplays = cartItems.map(item => {
        return <CartItem 
        key={item} 
        product={cart[item]} 
        productName={item} 
        cart={cart} 
        cartUpdater={cartUpdater}/>
    });

    return (
        <section className="cart-object cart-man">
            <h2>Cart</h2>
            {cartItemDisplays}
            <button>Checkout</button>
        </section>
    )
}