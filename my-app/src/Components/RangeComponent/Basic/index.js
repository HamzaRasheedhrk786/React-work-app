// import React, { Component } from 'react'
import "../Basic/styleSheet.css"
import * as React from 'react';
import { Range } from 'react-range';
class index extends React.Component {
    state = { values: [100],value:[50] };
    render() {
        return (
            <div className="container mt-5">

                <Range
                step={0.2}
                min={0}
                max={100}
                values={this.state.values}
                onChange={(values) => this.setState({ values })}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '2px',
                      width: '100%',
                      backgroundColor: '#aaa',
                      // background:"transparent"
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                    <React.Fragment>
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '24px',
                      width: '24px',
                      borderRadius:"12px",
                      backgroundColor: 'black',
                    //   float:"left",
                    }}
                  />
                  </React.Fragment>
                  
                )}
                
              />
               <Range
                step={0.2}
                min={0}
                max={100}
                values={this.state.value}
                onChange={(value) => this.setState({ value })}
                // style={{backgroundColor:"#aaa"}}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '1px',
                      width: '100%',
                      backgroundColor: '#aaa',
                      background:"transparent"
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                    <React.Fragment>
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '24px',
                      width: '24px',
                      borderRadius:"12px",
                      backgroundColor: 'black',
                    //   float:"left",
                    //   direction:"initial"
                    }}
                  />
                  </React.Fragment>
                  
                )}
                
              />
              <div className="labels">
                  <label className="label-1">
                      3k
                  </label>
                  <label className="label-2">
                      5k
                  </label>


              </div>
            </div>
        )
    }
}

export default index
