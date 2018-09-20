import React, { Component } from 'react';
import Hi from './Hi';
import {
    
    Link
  } from 'react-router-dom'
class Hello extends Component {
  constructor(){
      super();
      this.state = {
          data:'Hello'
      }
  }
  handleClick=()=>{
      this.setState({data:'Parent'})
  }
  handleCall=(value)=>{
this.setState({data:value})
      console.log("Hi I am",value)
  }
handleRing=(value)=>{
    this.setState({data:value})
}
    render() { 
        return (
            <div>
                 {this.state.data} 
                <Hi value={this.state.data} onCall={this.handleCall} onRing={this.handleRing}/>
                <Link to="/hey"> <button onClick={this.handleClick}>Parent Button</button></Link>
                </div>
          );
    }
}
 
export default Hello;

/*class Hello extends Component {
  constructor(){
      super();
      this.state = {
          data:''
      }
  }
  handleClick =()=>{
      this.setState({
          data:"Hello World!"
      })
  }
  _handleCall=(value)=>{
      console.log("from parent",value)
  }
    render() { 
        return ( 
            <div>
                <Hi value={this.state.data} onCall={this._handleCall}/>
                <button onClick={this.handleClick}>Click</button>
                </div>
         );
    }
}

export default Hello;
*/














/*class Hello extends Component {
    constructor(){
        super();
        this.state={
            data:"",
        
        }
    }
handleChange = (e) =>{
    this.setState({
        data:"Hello World"
    })
    }

    render() { 
        return ( 
            <div>
                <Hi value={this.state.data}/>
                <button onClick={this.handleChange}>click me</button>
                </div>
         );
    }
}
 
export default Hello;*/