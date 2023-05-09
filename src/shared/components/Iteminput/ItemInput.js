import React from "react";
import iteminputt from "./ItemInput.module.scss";

function ItemInput(props){
const { data, loading , children, placeholder,onChange ,title,valide,value} =props

return (
    
        <div className={iteminputt["inputitem"]}>
            <div className={iteminputt["inputitem-stand"]}>
                <span className={iteminputt["text-item-ncc"]}>{title}</span>
                <span className={iteminputt["valide"]}>{valide}</span>
        </div>
                <input className={`${iteminputt["input-item"]} ${props.className}`} placeholder={placeholder} value={value}></input>
        </div>
        
  
)
}
export default ItemInput