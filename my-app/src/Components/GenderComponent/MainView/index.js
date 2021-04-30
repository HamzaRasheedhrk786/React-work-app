import React, { Component } from 'react';
import {GenderCircle} from "../GenderCircle/index";
import {RadioButton} from "../RadioButton/index";
import "../MainView/styleSheet.css"
class Gender extends Component {
   constructor(props) {
       super(props)
       this.state = {
            genderCatogery:true
       }
   }
   maleChangeHandler=()=>{
       this.setState({
           genderCatogery:true
       })
   }
   femaleChangeHandler=()=>{
       this.setState({
           genderCatogery:false
       })
   }
   
    render() { 
        // object destructring
        const {genderCatogery} = this.state;
        return ( 
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 justify-content-center" style={{textAlign:"center"}}>
                              <span style={{fontSize:"18px",fontWeight:"500",color:"#aaa"}}>Gender</span>
                              <div style={{height:"200px",justifyContent:"center",width:"340px",marginLeft:"10px"}}>
                                  <GenderCircle className={genderCatogery===true?"active":"inactive"} value="80%"/>
                                  <GenderCircle className={genderCatogery===false?"circle-overlapped active":"circle-overlapped inactive"} value="20%"/>
                              </div>
                              <div>
                                    <RadioButton  onClick={this.maleChangeHandler} check="checked" gender="Male" span="1.5k"/>
                                    <RadioButton onClick={this.femaleChangeHandler} gender="Female" span="2.2k"/>
                              </div>
                        
                        </div>

                    </div>

                </div>

            </div>
                
         );
    }
}
 
export default Gender;