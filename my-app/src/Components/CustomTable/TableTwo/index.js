import React, { Component } from 'react'
import "../TableTwo/styleSheet.css"
import {Table,Tbody,TR,TD} from "../Table/index"
import Image from "../../../Images/image.jpg"
import Image1 from "../../../Images/safraz.jpg"
class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             active: false
        }
    }
    handleRowActive=()=>{
        this.setState({
            active:!this.state.active
        })
    }
    
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"#EFF0F2"}}>
                <div className="container" style={{overflowX:"auto"}}>
                    <Table>
                        <Tbody>
                            <TR>
                            <TD  src={Image} label="Shawn Nguyen" sublabel="United States"/>
                            <TD label="Jun 6th, 1997 (23)" sublabel="Female"/>
                            <TD label="Content Creator" sublabel="Actor, Blogger, Artist"/>
                            <TD label="Beauty & Costmetics" sublabel="Fashion, Gaming, +1"/>
                            <TD type="Contain" text1="24.4k" text2="3.42%"/>
                            <TD type="Contains"/>
                            </TR>
                            <TR active={this.state.active} onClick={this.handleRowActive}>
                            <TD  src={Image1} label="Arlena Steward" sublabel="United States"/>
                            <TD label="Jun 6th, 1997 (23)" sublabel="Female"/>
                            <TD label="Blogger" sublabel="Content Creator, +2"/>
                            <TD label="Fashion" sublabel="Art & Design, +1"/>
                            <TD type="Contain" text1="22.4k" text2="3.32%"/>
                            <TD type="Contains"/>
                            </TR>
                        </Tbody>
                    </Table>
                </div>
                
            </div>
        )
    }
}

export default index
