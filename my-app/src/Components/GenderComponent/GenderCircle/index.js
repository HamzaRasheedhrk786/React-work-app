import React from 'react'
import "../GenderCircle/styleSheet.css" 
 export const GenderCircle=(props)=>{
    return (
        <div className="circle-div">
            <div className={props.className?props.className+" circle":"circle"} style={{width:props.value,height:props.value,textAlign:"center"}}>
                <label className="circle-value">{props.value}</label>
            </div>           
        </div>
    )
}