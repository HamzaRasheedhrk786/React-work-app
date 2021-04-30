import React from 'react'
import {TiTick} from "react-icons/ti"
import "../Basic/styleSheet.css"
import BasicRight from "../BasicRight/index"
import MasterCard from "../../../../Images/mastercard.png"
import Visa from "../../../../Images/visa.png"
import PayPal from "../../../../Images/paypal.jpg"
function index(props) {
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <div className="right-card-uperlabel">
                             <label className="uperlabel-rightcard">{props.UperLeftText}</label>
                            </div>
                            <div className="right-card-uperlabel-1">
                             <button className="uperlabel-rightcard-1">{props.UperRightText}</button>
                            </div>
                            <div className="card-body-content-right">
                                <div className="body pt-3 pb-2" style={{borderBottom:"1px solid #aaa"}}>
                                <BasicRight rightIcon={<img src={MasterCard} alt="master" className="right-icon-mastercard"/>} rightmiddleUperText="****3453" rightmiddleLowerText="Name Surname" tickIcon={<TiTick className="right-icon-label"/>}/>
                                </div>
                                <div className="body pt-3 pb-2" style={{borderBottom:"1px solid #aaa"}}>
                                <BasicRight rightIcon={<img src={Visa} alt="visa" className="right-icon-visa"/>} rightmiddleUperText="****1240" rightmiddleLowerText="Name Surname"/>
                                </div>
                                <div className="body pt-3 pb-4">
                                <BasicRight rightIcon={<img src={PayPal} alt="paypal" className="right-icon-paypal"/>} rightmiddleUperText="Add PayPal account"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}
export default index