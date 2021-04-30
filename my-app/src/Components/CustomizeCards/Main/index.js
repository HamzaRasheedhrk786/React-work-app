import React from 'react'
import LeftCard from "../LeftCard/Basic/index"
import MiddleCard from "../MiddleCard/Basic/index"
import{RiFileCopy2Line} from "react-icons/ri"
import RightCard from "../RightCard/Basic/index"
function index() {
    return (
        <div className="container-fluid bg-light">
            <div className="row bg-light">
                <div className="col-lg-4 pt-2 pb-2">
                    <LeftCard TopLeftText="Company Info" TopRightText="Edit"/>
                </div>
                <div className="col-lg-4 pt-2 pb-2">
                    <MiddleCard 
                    middleIcon={<RiFileCopy2Line className="middle-icon"/>} 
                    MiddleText="Its Mandatary for a business to open a wallet here in SQUARE ecosystem to start"
                    buttonText="Create new account"/>
                </div>
                <div className="col-lg-4 pt-2 pb-2">
                    <RightCard UperLeftText="Sources" UperRightText="Edit"/>
                </div>
            </div>

            
     </div>
    )
}
export default index