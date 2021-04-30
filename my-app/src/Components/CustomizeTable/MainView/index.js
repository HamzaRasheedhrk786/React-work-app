import React from 'react'
import Basic from "../Basic/index"
import BasicItem from "../BasicItem/index"
import Image from "../../../Images/safraz.jpg"
import Image1 from "../../../Images/image-7.jpg"
import Image2 from "../../../Images/image.jpg" 
function index() {
    return (
        <div className="container-fluid bg-light">
            <Basic
            firstHeading="User"
            secondHeading="Account Type"
            thirdHeading="Status"
            fourthHeading="Coordinator"
            // headerStyle={{display:"none"}}
            firstStyle={{color:"blue"}}
            secondStyle={{color:"red"}}
            thirdStyle={{color:"cyan"}}
            fourthStyle={{color:"purple"}}
            BasicItem={
            <React.Fragment>
                <BasicItem 
                userImage={<img className="img" style={{width:"60px",height:"60px",borderRadius:"30px",border:"2px solid black",padding:"2px"}} src={Image} alt="sarf"/>}
                name="Hamza Rasheed"
                email="hamza@gmail.com"
                text="(you)"
                type="Owner"
                status="Active"
                project="3 projects"
                // row={{display:"none"}}
                // menuStyle={{display:"none"}}
                // aType={{display:"none"}}
                // sType={{display:"none"}}
                // iconField={{display:"none"}}
                // pType={{display:"none"}}
                />
                <BasicItem
                userImage={<img className="img" src={Image1} alt="exapmle"/>}
                name="Example Example"
                email="example@gmail.com"
                type="Employer"
                status="Inactive"
                project="2 projects"
                // menuStyle={{display:"none"}}
                // aType={{display:"none"}}
                // pType={{display:"none"}}
                />
                <BasicItem
                userImage={<img className="img" style={{width:"70px",height:"70px",borderRadius:"35px",border:"2px solid black",padding:"2px"}} src={Image2} alt="shahid"/>}
                name="Shahid Afridi"
                email="example@gmail.com"
                type="Owner"
                status="Active"
                project="5 projects"
                // menuStyle={{display:"none"}}
                aType={{color:"red"}}
                sType={{color:"green"}}
                // image={{display:"none"}}
                // utStyle={{display:"none"}}
                // ltStyle={{display:"none"}}
                pType={{color:"blue"}}
                />
            </React.Fragment>
            }
            />

            
        </div>
    )
}
export default index