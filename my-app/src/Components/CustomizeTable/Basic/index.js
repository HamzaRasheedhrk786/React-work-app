import React from 'react'
import "../Basic/styleSheet.css"
function index(props) {
    return (
        <div className="container-fluid bg-light">
            <div className="container ">
                <table className="table-class">
                    <tr className="row-heading" style={props.headerStyle}>
                        <th style={props.firstStyle}>{props.firstHeading}</th>
                        <th style={props.secondStyle}>{props.secondHeading}</th>
                        <th style={props.thirdStyle}>{props.thirdHeading}</th>
                        <th style={props.fourthStyle}>{props.fourthHeading}</th>
                    </tr>
                {props.BasicItem}
                </table>
            </div>
        </div>
    )
}
export default index