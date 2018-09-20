import React, { Component } from 'react';
import './add.css'
import timer from '../images/timer.png';
import User from '../images/user.png';
import mob from '../images/mob.png';
import verified from '../images/verified.png';
import {Link} from 'react-router-dom'
import { Icon } from 'antd';

class Addver extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="right-add">
            <div className="first-part">
            <button className="btn-on" type="submit">View Online Demo > </button>
            <div ><img className="imp" src={timer}/>
            <Link to="/hi"> Get User ID with existing IPIN >></Link>
            <p>sdsd</p>
            </div></div>
            <div className="second-part">
            <img className="imp" src={User}/>
            <Link to="/hi">First Time User >></Link>
            <p>asdf</p>
            </div>
            <div className="third-part">
            <img className="imp" src={mob}/>
            <Link to="/hi">Important Information</Link>
            <p>ddfdgfgf</p>
            <Link className="know" to="/hey">Know more >></Link>
            </div>
            <img className="verifiedI" src={verified}/>
                </div>
         );
    }
}
 
export default Addver;