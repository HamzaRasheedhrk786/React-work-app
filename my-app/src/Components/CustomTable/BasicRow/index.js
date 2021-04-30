import React from 'react'
import "../BasicRow/styleSheet.css"
import {TR,TD} from "../Table/index"
import {HiOutlineDotsHorizontal} from "react-icons/hi"
import {
    Menu,
    MenuItem,
    MenuButton,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css'; 
function index(props) {
    return (
        <TR active={props.active} onClick={props.onClick} >
            <TD  src={props.src} label={props.label} text={props.text} sublabel={props.sublabel}/>
            <TD type="Container">{props.type}</TD>
            <TD type="Container">{props.status}</TD>
            <TD type="Container"><button className="button-coordinator" style={props.cStyle}>{props.coordinator}</button></TD>
            <TD type="Container" style={props.menuStyle}>
                <Menu menuButton={<MenuButton styles={{border:"none",backgroundColor:"white"}}><HiOutlineDotsHorizontal style={{width:"30px",height:"30px",color:"#aaa"}}/></MenuButton>}>
                <MenuItem styles={{fontSize:"16px",fontWeight:"500"}}>Change Account Type</MenuItem>
                <MenuItem styles={{color:"red",fontSize:"16px",fontWeight:"500"}}>Deactivate Account</MenuItem>
                </Menu> 
            </TD>
        </TR>
    )
}
export default index