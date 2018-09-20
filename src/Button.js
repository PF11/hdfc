import React, { Component } from "react";

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      ad: " ",
      az: ' '
    };
  }

  _handleClick = () => {
    console.log("from button");
    this.setState({
        ad:this.state.data
      
    })
  }
  
  _handleClick1 = () => {
   
    console.log("from button");
    this.setState({
        ad:this.state.az
      
    })
   
  }
  _handleChange=(e)=>{
    console.log('----event----',e.target.value)
    this.setState({data:e.target.value

    })

  }
  _handleChange1=(e)=>{
    console.log('----event----',e.target.value)
    this.setState({az:e.target.value})
    
  }
   
render() {
    console.log('---value RENDER---',this.state.data)
    console.log('---value RENDER---',this.state.az)
    return (
      <div>
        {/* {this.state.value} */}
        
        <input onChange={this._handleChange} value={this.state.data}/>
        
         <button type="submit" onClick={this._handleClick} >
          Click
        </button>

<input  onChange={this._handleChange1} value={this.state.az}/>

<button type="submit" onClick={this._handleClick1}>
Click1
</button>
{this.state.ad}
      </div>
    );
  }
  }
