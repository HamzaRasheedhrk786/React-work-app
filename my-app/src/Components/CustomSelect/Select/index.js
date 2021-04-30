import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable';
import "../Select/styleSheet.css"
const components = {
    DropdownIndicator: null,
  };
  const createOption = (label) => ({
    label,
    value: label, 
  });
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      borderRadius: "2px",
      color:"blue",
      padding:0,
      boxShadow:"1px 1px 4px #aaa",
      borderColor:"white",
      "&:hover": {
        borderColor: state.isFocused ? "white" : "white"
      }
    }),
    menu: base => ({
      ...base,
      borderRadius: 0,
      padding:0,
      hyphens: "auto",
      marginTop: 0,
      textAlign: "left",
      wordWrap: "break-word"
    }),
    menuList: base => ({
      ...base,
      padding: 0,
      backgroundColor:"blue"
      
    }),
    multiValueRemove: base => ({
      ...base,
      border: "1px solid #aaa",
      height: '100%',
      backgroundColor:"white",
      display:"none"
    }),
    multiValue:base=>({
      ...base,
      backgroundColor:"white",
      padding:0
    }),
    multiValueLabel:base =>({
      ...base,
      color:"blue",
      fontSize:"16px",
      padding:0,
      fontWeight:"400"
    })
    
  };
class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inputValue:"",
             value:[]
        }
    }
    handleChange = (value) => {
        this.setState({ value });
      };
      handleInputChange = (inputValue) => {
        this.setState({ inputValue });
      };
      handleKeyDown = (event) => {
        const { inputValue, value } = this.state;
        if (!inputValue) return;
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            console.group('Value Added');
            console.log(value);
            console.groupEnd();
            // const Value =[...this.state.value];
            this.setState({
              inputValue: '',
              value: [...value, createOption(`#${inputValue},`)],
            });
            event.preventDefault();
            break;
            default : return; 
        }
        
      };
    
    render() {
        const { inputValue, value } = this.state;
        return (
            <div className="conatiner">
       <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        autoFocus={false}
        menuIsOpen={false}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder={<div className="placeholder">#tag1,#tag2,#tag3</div>}
        value={value}
        styles={customStyles}
      
        />
    </div>
            
        )
    }
}

export default index
