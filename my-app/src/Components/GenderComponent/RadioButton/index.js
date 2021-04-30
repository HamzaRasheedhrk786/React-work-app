import React from 'react';
//      Importing Css files
import "../RadioButton/styleSheet.css"
export const RadioButton=(props)=>{
    return(
    <label className="radio-container">
        <span>{props.gender}<span style={{float:"right"}}>{props.span}</span></span>
        <input onClick={props.onClick} defaultChecked={props.check} type="radio" name="radio"/>
        <span className="check"></span>
      </label>
    )
}
