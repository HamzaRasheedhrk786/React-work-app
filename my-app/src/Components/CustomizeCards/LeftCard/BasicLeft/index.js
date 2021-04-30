import React from 'react'
import "../BasicLeft/styleSheet.css"
function index(props) {
    return (
        <div className="container-fluid">
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-lg-1">
                       {props.LeftIcon}
                    </div>
                    <div className="col-lg-11">
                        <table className="table">
                            <tr className="middle-uper-label">
                                {props.middleUperText}
                            </tr>
                            <tr className="middle-lower-label">
                                {props.middleLowerText}
                            </tr>
                        </table>

                    </div>

                </div>
            {/* </div>  */}
        </div>
    )
}
export default index