import React from 'react'
import "../Basic/styleSheet.css"
function index(props) {
    return (
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <div className="middle-card-uperlabel">
                             <label className="uperlabel-middlecard">Wallet</label>
                            </div>
                        </div>
                        <div className="card-body-main">
                            <label className="card-middle-icon">{props.middleIcon}</label>
                            <div className="card-middle-main-text">
                                <label className="card-middle-main-text-value">{props.MiddleText}</label>
                            </div>
                            <button className="middle-button">{props.buttonText}</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default index