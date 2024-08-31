import React  from "react";
import "./DrinkCard.css"
import { THEME } from "../../config/data";

function DrinkCard({imgUrl ,title,description,price}){
     
    return (
        <div className="drink-card">
            <img 
            src={imgUrl} 
            className="drink-card-img"
            alt="drink"/>
        <h1 className="drink-card-title" style={{color:THEME.highlight}}>{title}</h1>
        <p className="drink-card-desc">{description}</p>
        {
            price ?
             <p className="drink-card-price">
              ₹ {price}
            </p>
            :"Not Available"
        }
        <button className="drink-card-button" >Add to card</button>
           </div>
        
    )
}

export default DrinkCard