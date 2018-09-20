import React, { Component } from "react";

class Click extends Component {
  constructor() {
    super();
    this.state = {
      minion: "",
      ad: ""
    };
  }

  handleClick = () => {
    console.log("from button");
    this.setState({
      ad: this.state.minion
    });
  };

  _handleChange = e => {
    console.log("----event----", e.target.value);
    this.setState({
      minion: e.target.value
    });
  };

  render() {
    console.log("---value RENDER---", this.state.minion);
    return (
      <div>
        <input onChange={this._handleChange} value={this.state.minion} />

        <button type="submit" onClick={this.handleClick}>
          Touch
        </button>
        {this.state.ad}
      </div>
    );
  }
}

export default Click;
