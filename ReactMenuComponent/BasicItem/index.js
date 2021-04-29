import React from 'react'
import "../BasicItem/styleSheet.css"
function index(props) {
    return (
        // <div className="container-fluid">
            <div className="menu-item">
                <div className="image">
                  {props.src ?<img className="image-icon" src={props.src} alt="pic" />:"" }  
                </div>
                <div className="label-1">
                 <label>
                     {props.text}
                 </label>
                </div>

            </div>
            
        // </div>
    )
}
export default index