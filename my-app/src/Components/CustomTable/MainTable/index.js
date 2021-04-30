import React, { Component } from 'react'
import BasicRow from "../BasicRow/index"
import BasicTable from "../BasicTable/index"
import Image2 from "../../../Images/image.jpg"
import Image from "../../../Images/safraz.jpg"

class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            active:"false"
        }
    }
    activeRow=()=>{
        this.setState({active:!this.state.active})
    }
    
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"#EAF4EF"}}>
            <BasicTable
            firstHeading="User"
            secondHeading="Account Type"
            thirdHeading="Status"
            fourthHeading="Coordinator"
            BasicRow={
                <React.Fragment> 
                    <BasicRow
                   onClick={this.activeRow}
                   active={this.state.active}
                    src={Image2}
                    label="Hamza Rasheed"
                    sublabel="hamza@gmail.com"
                    text="(you)"
                    type="Owner"
                    status="Active"
                    coordinator="4 projects"
                    // cStyle={{backgroundColor:"white"}}
                    // menuStyle={{display:"none"}}
                    />
                    <BasicRow
                    src={Image}
                    label="Shahid Afridi"
                    sublabel="example@gmail.com"
                    type="Employer"
                    status="Inactive"
                    coordinator="2 projects"
                    // cStyle={{backgroundColor:"white"}}
                    // menuStyle={{display:"none"}}
                    />
                </React.Fragment>
            }
            /> 
        </div>
        )
    }
}

export default index

