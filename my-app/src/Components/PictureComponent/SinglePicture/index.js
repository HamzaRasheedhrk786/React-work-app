import React from 'react'
import "../SinglePicture/styleSheet.css"
function index(props) {
    return (
        <div className="image-wrapper">
            <img className="image-view" src={props.image} alt="sarfaraz"/> 
        </div>
    )
}
export default index