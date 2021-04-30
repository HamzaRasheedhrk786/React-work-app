import React from 'react'
import "../Basic/styleSheet.css"
import Modal from 'react-modal'
import {IoClose} from "react-icons/io5"
import {IoFileTrayStackedOutline} from "react-icons/io5"
import {RiCoinLine} from "react-icons/ri"
import {BiCoinStack} from "react-icons/bi"
import {GiCoins} from "react-icons/gi"
// import Visa from "../../../Images/visa.png"
import Item from "../Item/index"
const customStyles = {
    
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    borderRadius          :  '12px',
    transform             : 'translate(-50%, -50%)',
    // border                : "1px solid #aaa",
    boxShadow             : "1px 1px 2px #aaa",
    width                 : "280px"
  }
};
function Index() {
    // var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="container-fluid" >
            <div className="container mt-5" style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                <button className="open-modal" onClick={openModal}>Open Modal</button>
               <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                >
                 {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                 <button className="close-button" onClick={closeModal}><IoClose className="close"/></button>
                  <div className="contains mt-5">
                      <div className="center-label">
                          <IoFileTrayStackedOutline className="center-icon"/>
                      </div>
                   </div>
                   <div className="center-bold-text">
                   <label>Top up the balance</label> 
                   </div>
                   <div className="center-label-text">
                       <p>Run out of juice to access the useful perk around you? Here is the solution</p>
                   </div>
                   <form>
                   <div className="field">
                   <Item uperText="$250" lowerText="+$0.60 transfer fee" icon={<RiCoinLine className="left-icon"/>}/>
                   <Item uperText="$500,000" lowerText="+$0.65 transfer fee" icon={<BiCoinStack className="left-icon"/>}/>
                   <Item uperText="$100,000" lowerText="+$0.60 transfer fee" icon={<RiCoinLine className="left-icon"/>}/>
                   <Item uperText="$500,000" lowerText="+$0.65 transfer fee" icon={<GiCoins className="left-icon"/>}/>
                   </div>
                   <div className="lower-field-input mt-2" style={{paddingLeft:"5px"}}>
                     <label style={{fontSize:"14px",fontWeight:"600"}}>Or enter amount</label>
                      <div className="input-field">
                            <input style={{width:"100%",padding:"5px",border:"1px solid #aaa",borderRadius:"4px"}} />
                        </div>
                   </div>
                   <div className="bottom-button mt-3">
                           <button className="buton">Done</button>

                       </div>
                   </form>
               </Modal>
           </div>
      </div>
    )
}
export default Index