import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import './navbar.css';
class Loginn extends Component {
constructor(){
    super();
    this.state = {
        data:''
    }
}
    render() { 
        return (
            <div>
            <Container>
                <Row>
                    <Col className="navbar"><b>Welcome To Citibank Online</b></Col>
                    </Row>
                </Container>
                </div>
        );
    }
}
 
export default Loginn;