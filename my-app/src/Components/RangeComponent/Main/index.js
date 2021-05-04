import React from 'react'
import ReactSlider from "react-slider"
import styled from "styled-components"
import "../Main/styleSheet.css"
// import {BsStar} from "react-icons/bs"

function Index() {
 // const [value, setValue] = React.useState([25, 50]);

    const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 2px;
    
    `;

    const StyledThumb = styled.div`
    height: 16px;
    line-height: 16px;
    width: 16px;
    background-color: #000;
    color: #000;
    border-radius: 50%;
    cursor: grab;
    font-size: 0.2em;
    &:focus
    {
        outline:none
    }
    `;

  const Thumb = (props, state) => <StyledThumb  {...props}>{state.valueNow}</StyledThumb>;

    const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 2 ? '#ddd' : props.index === 1 ? '#000' : '#ddd'};
    border-radius: 999px;
    transform:translateY(7px); 
    `;

    const Track = (props, state) => <StyledTrack {...props} index={state.index} />;


    return (
        <div className="container mt-5" style={{width:"15%"}}>
          <StyledSlider
             defaultValue={[40,100]}
             renderTrack={Track}
             renderThumb={Thumb}
           />
           <div className="text-labels mt-3">
               <div className="left-">
                   160cm-5'3"
                   {/* 3.0 <BsStar className="icons"/> */}
               </div>
               <div className="right-">
                   2mt-6'5"
                   {/* 5.0<span><BsStar className="right"/></span> */}
               </div>

           </div>
        </div>
    )
}
export default Index