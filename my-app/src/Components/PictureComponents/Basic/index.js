import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Image from "../../../Images/image.jpg"
import Image1 from "../../../Images/safraz.jpg"
import Image2 from "../../../Images/download.jpg"
import Image3 from "../../../Images/image-7.jpg"

// The number of columns change by resizing the window
class MyWrapper extends React.Component {
    render() {
        return (
            <div className="container mt-5" style={{width:"18%"}}>
            <h6>Main Public album</h6>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1,750: 2}}
            >
                <Masonry columnsCount={2} gutter="8px">
                    <img src={Image2} alt="asd" style={{width: "100%",height:"120px",borderRadius:"12px", display: "block"}}/>
                    <img src={Image1} alt="sdsd" style={{width: "100%",height:"155px",borderRadius:"12px", display: "block"}}/>
                    <img src={Image3} alt="Asd" style={{width: "100%",height:"140px",borderRadius:"12px", display: "block"}}/>
                    <img src={Image} alt="sddss" style={{width: "100%",height:"110px",borderRadius:"12px", display: "block"}}/>
                </Masonry>
            </ResponsiveMasonry>
            </div>
        )
    }
}
export default MyWrapper