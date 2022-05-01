import React from "react";
import { Logo } from "./images/images.js";


export default function Header() {
    return (
        <header className="header-content">
            {/* <h1>FLYGUY</h1> */}
            <a href="/"><img src={Logo}></img></a>
            <p>Celebrate what makes you human.</p>
        </header>
    )
}