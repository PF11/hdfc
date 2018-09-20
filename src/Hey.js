import React, { Component } from 'react';

class Hey extends Component {
  constructor(){
      super();
      this.state = {
          data:'Clark'
      }
  }
  componentWillReceiveProps=(nextPropss)=>{
      this.setState({data:nextPropss.value})
  }
  handleButton=()=>{
this.props.onPhone('Sub Child')
}

    render() { 
        return (  <div>
{this.state.data}
<button onClick={this.handleButton}>Sub Child</button>
            </div>);
    }
}
 
export default Hey;