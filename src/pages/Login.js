import React, { Component } from "react";
import "./login.css";
import { IconContext } from "react-icons";

import {Link} from 'react-router-dom'
import { Icon } from 'antd';

class Loginn extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="name-space">
          <label for="name">Enter Your User Id</label>
          <br />
          {/* <ion-icon name="play">play</ion-icon> */}
          <Icon className="icon-t" type="caret-right" theme="outlined" />
          <input className="first-text" type="text" name="name" />
          <span className="first-span">
          <Icon className="icon-q" type="question-circle" theme="outlined" />
            <Link className="line" to="/Hello">Forgot Your Password</Link>
          </span>
        </div>
        <div className="pass-space">
          <label for="pass">Enter Your Password</label>
          <br />
          <Icon className="icon-t" type="caret-right" theme="outlined" />
          <input className="first-text" type="pssword" name="pass" />
          <span className="first-span">
          <Icon className="icon-q" type="question-circle" theme="outlined" />
            <Link className="line" to="/Hello">Forgot Your IPIN</Link>
          </span>
        </div>
        <div className="btn-side">
         <Link to="/hey"> <button className="btn" type="submit">
            LOGIN
          </button></Link>
          <span className="click">Trouble logging In ?<Link to="/hi">Click here!</Link></span>
          
          
        </div>
      </div>
    );
  }
}

export default Loginn;
