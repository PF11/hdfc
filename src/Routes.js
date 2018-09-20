import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Link } from "react-router-dom";
import Hello from "./Hello";
// import Hdfc from "./Hdfc";
import Hi from "./Hi";
import Hey from "./Hey";
import Login from './pages/Login';
import App from "./App";


export default class Routes extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route exact path="/Hello" component={Hello} /> */}
          <Route path="/hi" component={Hi} />
          <Route path="/hey" component={Hey} />
          <Route exact path="/" component={App} />
        </div>
      </BrowserRouter>
    );
  }
}
