import React, { Component } from "react";
import Hey from './Hey';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";
class Hi extends Component {
  constructor(){
      super();
      this.state = {
          data:'Emilia'
      }
  }
  componentWillReceiveProps = (nextProps) =>{
      this.setState({data:nextProps.value})
  }
  componentDidMount =()=>{
      console.log('did mount',this.props);
  }
  handleSubmit=()=>{
      this.props.onCall('Child')
  }

  handlePhone=(value)=>{
      this.setState({
          data:value
      })
  }
  
    render() { 
        return ( 
            <div>
                {this.state.data}
                <button onClick={this.handleSubmit}>Child Button</button>
                <Hey value={this.state.data} onPhone={this.handlePhone} onRing={this.HandleRing}/>


                
                </div>
         );
    }
}
 
export default Hi;









/*class Hi extends Component {
  constructor() {
    super();
    this.state = {
      data: "Hiiiiiiiii....."
    };
  }
  componentWillReceiveProps = nextProps => {
    this.setState({ data: nextProps.value });
  };
  componentDidMount = () => {
    console.log("data mount", this.props);
  };
  _handleSubmit = () => {
      this.props.onCall('hello from child')
  };
  render() {
    console.log("----PROPS DATA---", this.props.value);
    return (
      <div>
        {this.state.data}
        <button onClick={this._handleSubmit}>oncall child</button>
      </div>
    );
  }
}

export default Hi;
*/


/*
class Hi extends Component {
    constructor(){
        super();
        this.state = {
            data:'hiiiii'
            
          }
        }
    componentWillReceiveProps=(nextProps)=>{
        console.log('--will ----',nextProps)
        this.setState({
            data:nextProps.value
        })
    }
    componentDidMount=()=>{
        console.log('did mount',this.props)
    }

   render() { 
        console.log('----PROPS DATA---',this.props.value)
        return (  
            <div>
               {this.state.data}
                </div>
        );
    }
}
 
export default Hi;*/
