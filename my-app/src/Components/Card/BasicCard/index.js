import React from 'react'
import "../BasicCard/styleSheet.css"
import Label from "../TextFields/index"
import IconField from "../IconItem/index"
import Btn from "../Button/index"
import {MdPhone} from "react-icons/md"
import {FiMail} from "react-icons/fi"
import {RiFacebookFill,RiSnapchatFill} from "react-icons/ri"
import {IoLogoInstagram} from "react-icons/io"
import {IoClose} from "react-icons/io5"
import {MdKeyboardArrowDown  } from "react-icons/md"
function index(props) {
    return (
        <div className="container">
            <div className="card" style={{width:"100%"}}>
                <div className="card-body" >
                    {props.src?<img className="card-image" src={props.src} alt="abd"/>:""}
                    <div className="cross-button">
                    <IconField style={{backgroundColor:"#9C9D9C",color:"white"}} middleIcon={<IoClose className="icon-field-image"/>}/>   
                    </div>
                    <div className="uper-text-fields ml-2 mb-2">
                        <Label label="Arlene Steward" subLabel="United States" labelStyle={{fontSize:"13px"}} subLabelStyle={{fontSize:"12px"}} />
                    </div>
                    <div className="icons-field m-2">
                        <IconField middleIcon={<MdPhone className="icon-field-image"/>}/>
                        <IconField middleIcon={<FiMail className="icon-field-image"/>}/>
                        <IconField middleIcon={<RiFacebookFill className="icon-field-image"/>}/>
                        <IconField middleIcon={<IoLogoInstagram className="icon-field-image"/>}/>
                        <IconField middleIcon={<RiSnapchatFill className="icon-field-image"/>}/>
                        <IconField middleIcon={<MdKeyboardArrowDown className="icon-field-image"/>}/>
                        
                    </div>
                    <div style={{borderTop:"1px solid #aaa"}}></div>
                    <div className="text-fields m-2 pt-2">
                    <Label label="Blogger" subLabel="Profession" />
                    </div>
                    <div className="text-fields m-2 pt-1" >
                    <Label label="Content creator, Modal, Singer" subLabel="experiences" />
                    </div>
                    <div className="text-fields m-2 pt-1">
                    <Label label="Fashion" subLabel="Main Speciality" />
                    </div>
                    <div className="text-fields m-2 pt-1 pb-2">
                    <Label label="Art & Design, Gaming, Health & Well.." subLabel="Additional interests" />
                    </div>
                    <div style={{borderTop:"1px solid #aaa"}}></div>
                    <div className="footer  p-2" >
                        {/* <div className="buttons-field"> */}
                        <Btn buttonText="Reject"/>
                        {/* </div> */}
                        {/* <div className="buttons-field"> */}
                        <Btn buttonText="Approve" buttonStyle={{backgroundColor:"black",color:"white"}}/>
                        {/* </div> */}

                    </div>

                </div>

            </div>
            
        </div>
    )
}
export default index