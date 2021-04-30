import React from 'react'
import "../RadioButton/styleSheet.css"
 function index(props) {
    return (
        <div className="container-fluid">
            <div className="container">
           <label className="contain"><span className="radio-text">{props.gender}</span>
          <input type={props.type} defaultChecked={props.check}  name="radio"/>
           <span className={props.radio}></span>
          </label>

            </div>
        </div>
    )
}
export default index