import React from 'react'
import "../BasicRight/styleSheet.css"


function index(props) {
    return (
        <div className="container-fluid " >
            {/* <div className="container"> */}
                <div className="row" >
                    <div className="col-lg-1">
                    {props.rightIcon}
                    </div>
                    <div className="col-lg-11">
                        <table className="table-right">
                            <tr className="right-uper-label">
                                {props.rightmiddleUperText}
                            </tr>
                            <tr className="right-lower-label">
                                {props.rightmiddleLowerText}
                            </tr>
                            
                        </table>
                        <div className="right-label">
                            {props.tickIcon}
                        </div>
                       

                    </div>

                </div>
            {/* </div>  */}
        </div>
    )
}
export default index