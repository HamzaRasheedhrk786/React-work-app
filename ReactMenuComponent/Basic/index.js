import React,{useState,useEffect,useRef} from 'react'
import "../Basic/styleSheet.css"
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuHeader,

} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import Image from "../../../Images/image-7.jpg"
import Image1 from "../../../Images/safraz.jpg"
import Image2 from "../../../Images/image.jpg"
import BasicItem from "../BasicItem/index"
function Index() {
const ref = useRef(null);
// const leftAnchor = useRef(null);
// const rightAnchor = useRef(null);
const [isOpen, setOpen] = useState(false);
// const [toggle,setToggle]=useState(false);
useEffect(() => {
    setOpen(true);
}, []);
const tooltipProps = {
    isOpen,
    captureFocus: false,
    animation: false,
    arrow: true,
    role: 'tooltip',
    align: 'center',
    viewScroll: 'auto',
    position: 'anchor',
    boundingBoxPadding: '2 8 2 2'
};
// const mouseEnter=()=>{
//    setToggle(!toggle)
// }
    
    return (
        <div ref={ref} className="container-fluid mt-2" style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
        <Menu menuButton={<MenuButton styles={{backgroundColor:"#aaa",width:"100px",height:"40px",textAlign:"center",borderRadius:"20px",border:"none",fontWeight:"500"}}>2 projects</MenuButton>}
        {...tooltipProps} direction="top"
        styles={{borderRadius:"14px",width:"300px",padding:"0px",alignItems:"left"}}
        >
            <MenuHeader className="header" styles={{fontSize:"16px",color:"black",textAlign:"center",textTransform:"capitalize",fontWeight:"500",padding:"10px"}}>Project lists</MenuHeader>
            <MenuItem>
            <BasicItem src={Image} text="Beer Pub opening day"/>
            </MenuItem>
            <MenuItem><BasicItem src={Image1} text="laborum deserunt non"/></MenuItem>
            <MenuItem><BasicItem src={Image2} text="Event name"/></MenuItem>
            <MenuItem><BasicItem src={Image2} text="Beer Pub opening day"/></MenuItem>
        </Menu>
        </div>
  
        
    )
}
export default Index