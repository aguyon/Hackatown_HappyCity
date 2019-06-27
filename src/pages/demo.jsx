import React, { Component } from 'react';
import logo from '../assets/images/HappyCityLogo.png';
import '../App.css';


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="demo">
          tototo
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>
    );
  }
}

export default Demo;
