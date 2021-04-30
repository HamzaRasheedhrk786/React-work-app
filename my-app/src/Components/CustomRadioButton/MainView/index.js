import React from 'react'
import RadioButton from "../RadioButton/index"
function index() {
    return (
        <div className="container-fluid">
            <h4>Select Gender :</h4>
            <div className="row">
                <div className="col-lg-2">
                  <RadioButton  gender="Male" check="checked"   type="radio" radio="check" />
                </div>
                <div className="col-lg-2">
                  <RadioButton  gender="Female" type="radio" radio="check" />
                </div>
                <div className="col-lg-2">
                 <RadioButton  gender="Others"  type="radio" radio="check" />
                </div>
            </div>
        </div>
    )
}
export default index