import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Click from './Click'
import Hello from './Hello'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar.js';
import Login from './pages/Login.js';
import Add from './pages/Add.js';
import { Container, Row, Col } from "reactstrap";

class App extends Component {
 
  render() {
    // console.log('---value---',this.state.value)
    return (
      <div>
      <Navbar/>
      <Container>
          <Row>
            <Col className="left-side" xs="8">
            <Login/>
            </Col>
            <Col className="right-side" xs="4">
            <Add />
            </Col>
          </Row>
        </Container>
        
        </div>
     
    )
    // <h1>hello{this.props.name}</h1>
    
      
  }
}

export default App;
