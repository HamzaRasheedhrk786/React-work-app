import React from 'react'
import "../BasicItem/styleSheet.css"
import {HiOutlineDotsHorizontal} from "react-icons/hi"
import {
    Menu,
    MenuItem,
    MenuButton,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

// Table Row Component design
function index(props) {
    return (
        // <div className="container-fluid bg-light">
        //     <table className="table-view">
                <tr className="row-data" style={props.row}>
                    <td>
                    <div className="icon-field" style={props.iconField}>
                               <div className="icon-field-image" style={props.image}>{props.userImage}</div>
                               <div className="text-fields">
                                   <div className="text-1" style={props.utStyle}>
                                       {props.name}<span>{props.text}</span>
                                   </div>
                                   <div className="text-2" style={props.ltStyle}>
                                     {props.email}
                                   </div>
                               </div>
                           </div>
                    </td>
                    <td className="data-row" style={props.aType}>{props.type}</td>
                        <td className="data-row" style={props.sType}>{props.status}</td>
                        <td><button className="button-project" style={props.pType}>{props.project}</button></td>
                        <td style={props.menuStyle}><Menu  menuButton={<MenuButton styles={{border:"none",backgroundColor:"white"}}><HiOutlineDotsHorizontal style={{width:"30px",height:"30px",color:"#aaa"}}/></MenuButton>}>
                            <MenuItem styles={{fontSize:"16px",fontWeight:"500"}}>Change Account Type</MenuItem>
                            <MenuItem styles={{color:"red",fontSize:"16px",fontWeight:"500"}}>Deactivate Account</MenuItem>
                            </Menu> 
                        </td>

                </tr>

        //     </table>
        // </div>
    )
}
export default index
