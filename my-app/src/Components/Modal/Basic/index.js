import React from 'react'
import "../Basic/styleSheet.css"
import Modal from 'react-modal'
import {IoClose} from "react-icons/io5"
import {RiFilePaperLine} from "react-icons/ri"
import Visa from "../../../Images/visa.png"
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
        <div className="container-fluid">
            <div className="container mt-5" style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                <button className="opens-modal" onClick={openModal}>Open Modal</button>
               <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                 {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                 <button className="close-button" onClick={closeModal}><IoClose className="close"/></button>
                  <div className="contain mt-5">
                      <div className="centers-label">
                          <RiFilePaperLine className="centers-icon"/>
                      </div>
                   </div> 
                   <div className="center-label-texts">
                       <p>Run out of juice to access the useful perk around you? Here is the solution</p>
                   </div>
                   <form>
                       <div className="select-field mt-3">
                           <label style={{fontSize:"14px",fontWeight:"600"}}>Source Type</label>
                           <div className="select-area">
                               <select style={{width:"100%",padding:"5px",border:"1px solid #aaa",borderRadius:"4px"}}>
                               <option value="1">Credit Card</option>
                               <option value="2">Visa Card</option>
                               <option value="3">Master Card</option>
                               <option value="4">ATM Card</option>
                               </select>
                           </div>
                       </div>
                       <div className="card-holder mt-2">
                           <label style={{fontSize:"14px",fontWeight:"600"}}>Card Holder</label>
                           <div className="input-field">
                               <input style={{width:"100%",padding:"5px",border:"1px solid #aaa",borderRadius:"4px"}} />
                           </div>
                       </div>
                       <div className="card-number mt-2">
                           <label style={{fontSize:"14px",fontWeight:"600"}}>Card number</label>
                           <div className="input-field">
                               <input className="number-text" type="text" />
                                   <img className="visa-icon" src={Visa} alt="visa"/>
                           </div>
                       </div>
                       <div className="row mt-2 justify-content-center" style={{padding:"2px"}}>
                           <div className="col-md-6">
                               <label style={{fontSize:"14px",fontWeight:"500"}}>Expiration Date</label>
                               <div className="date-field">
                                   <input className="date" type="date" />
                               </div>
                           </div>
                           <div className="col-md-6">
                               <label style={{fontSize:"14px",fontWeight:"500"}}>Security Code</label>
                               <div className="security-code">
                                   <input className="pin" type="password" name="pin" placeholder="****" maxlength="4"/>
                               </div>
                           </div>

                       </div>
                       <div className="bottom-button mt-4">
                           <button className="butn">Add new source</button>

                       </div>

                   </form>
                 {/* <form>
                   <button>tab navigation</button>
                    <button>stays</button>
                   <button>inside</button>
                   <button>the modal</button>
                 </form> */}
               </Modal>
           </div>
      </div>
    )
}
export default Index