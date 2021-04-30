import React from 'react'
import "../Basic/styleSheet.css"
import {IoBeerSharp,IoLocationOutline} from "react-icons/io5"
import {IoIosListBox} from "react-icons/io"
import BasicLeft from "../BasicLeft/index"
function index(props) {
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <div className="left-card-uperlabel">
                             <label className="uperlabel-leftcard">{props.TopLeftText}</label>
                            </div>
                            <div className="left-card-uperlabel-1">
                             <button className="uperlabel-leftcard-1">{props.TopRightText}</button>
                            </div>
                        </div>
                        <div className="card-body-content">
                            <BasicLeft LeftIcon={<IoBeerSharp className="left-icon-field"/>} middleUperText="Beer pub" middleLowerText="Business man" />
                            <BasicLeft LeftIcon={<IoLocationOutline className="left-icon-map"/>} middleUperText="United States, Pasandena 2235 Avondale Ave Undefined" middleLowerText="Full address"/>
                            <BasicLeft LeftIcon={<IoIosListBox className="left-icon-number"/>}middleUperText="377437945" middleLowerText="VAT number"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default index