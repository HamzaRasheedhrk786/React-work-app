import React, { Component } from 'react'
import "../MainView/styleSheet.css"
import Image from "../../../Images/safraz.jpg"
import Picture from "../SinglePicture/index"
import Image1 from "../../../Images/image.jpg"
class index extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <Picture image={Image}/>
                        <Picture image={Image}/>
                        <Picture image={Image}/>
                        <Picture image={Image}/>
                        <Picture image={Image1}/>
                    </div>
                </div>
                <div className="circle-div">
                   <label>+3</label>

                </div>
                
            </div>
        )
    }
}

export default index
