import React from 'react'
import "../Table/styleSheet.css"
import {BiGroup} from "react-icons/bi"
import {AiOutlineThunderbolt} from  "react-icons/ai";
import {HiCheck} from "react-icons/hi";
import {TiTimes} from "react-icons/ti";
export const Table=(props)=> {
    return (
        <div className="table-container">
            <table className="tables-class">
                {props.children}
            </table>
        </div>
    )
}
export const Tbody=(props)=>{
    return(
    <tbody>
        {props.children}
    </tbody>
    )
}
export const TH = (props)=>
{
    return(
        <th className={props.className ? props.className : "table-heading"}>
            {props.children}
        </th>
    )
}
export const TR=(props)=> {
    return(
        // <tr className={props.className? props.className: "tables-row"}>
        //     {props.children}
        // </tr>
    <tr className={props.active===true?"table-row":"tables-row"} onClick={props.onClick} style={props.rowStyle} >
        {props.children}
    </tr>
    )
}
export const TD = (props)=>{
    if(props.type==="Container")
    return(
    <td className={props.className ? props.className : "table-data"} >
        {props.children}
    </td>
    )
    else if(props.type==="Contain")
    return(
    <td className={props.className ? props.className : "table-data"} >
        <div style={{textAlign:"left",marginTop:"5px"}}>
            <span style={{display:"flex"}}><BiGroup className="icons-row"/>{props.text1}</span>
            <span style={{display:"flex"}}><AiOutlineThunderbolt className="icons-row"/>{props.text2}</span>
        </div>
    </td>
    )
    else if(props.type==="Contains")
    return(
    <td className={props.className ? props.className : "table-data"} >
       <div className="last-icons">
            <button className="button-cross"><TiTimes className="icon-button"/></button>
            <button className="button-tick"><HiCheck className="icon-button"/></button>
        </div>
    </td>
    )
    
    
    else{
        return(
            <td className={props.className ? props.className : "table-data"}>
                <div className="icon-field">
                    <div className="field-image">
                    {props.src?<img className="img" src={props.src} alt="Images"/>:""}
                    </div>
                    <div className="text-fields">
                        <div className="text-1">
                         {props.label}<span>{props.text}</span>
                        </div>
                        <div className="text-2">
                         {props.sublabel}
                        </div>
                    </div>
                </div>
            </td>
        )
    }
}
