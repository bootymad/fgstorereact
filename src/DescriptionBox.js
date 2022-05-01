import React from "react";
import { useState } from "react";


export default function DescriptionBox({descFull, clickHandler}) {

    const slideTitles = ['Ingredients', 'Description'];

    const [slide, setSlide] = useState(slideTitles[0]);

    const slideLinks = (
        <div className="slide-links">
            {slideTitles.map(slide => {return <button>{slide}</button>})}

        </div>
    )


    return (
        <div className="description-box">
            <h2>{slide}</h2>
            <p>{descFull}</p>
            <div className="box-nav">
            {slideLinks}
            <i onClick={clickHandler} className="fa-solid fa-x fa-2x"></i>
            </div>
        </div>
    )
}