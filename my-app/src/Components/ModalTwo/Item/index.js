import React from 'react'
// import {Table,TR,TD} from "../../CustomTable/Table"
import "../Item/styleSheet.css"
function index(props) {
    return (
        <div className="container-fluid">
        <div className="items-field pt-3 pb-3">
            <div className="main-div">
                <div className="icon-left-field" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"left",float:"left"}}>
                    {props.icon}
                </div>
                <div className="center">
                <div className="icon-field">
                    {/* <div className="field-image">
                    {props.src?<img className="img" src={props.src} alt="Images"/>:""}
                    </div> */}
                    <div className="text-fields">
                        <div className="text-1">
                        {props.uperText}
                        </div>
                        <div className="text-2">
                         {props.lowerText}
                        </div>
                    </div>
                </div>
                </div>
                <div className="right" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <label className="contain">
                <input type="radio"  name="radio"/>
                <span className="check"></span>
                </label>
                </div>

            </div>
            
        </div>
        </div>
    )
}
export default index