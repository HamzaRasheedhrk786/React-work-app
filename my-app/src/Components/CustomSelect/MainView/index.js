import React, { Component } from 'react'
import Select from "../Select/index"
class index extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <div className="conatiner">
                  <div className="row">
                        <div className="col-lg-4">
                           <div className="row p-2 justify-content-center">
                               <div className="col-lg-4">
                                  <label style={{textAlign:"center",fontSize:"14px",fontWeight:"500",paddingLeft:"10px",marginTop:"8px"}}>IG HashTags </label>
                               </div>
                                <div className="col-lg-8">
                                  <Select/>
                                </div>
                            </div>
                         </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default index
