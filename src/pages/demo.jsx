import React, { Component } from 'react';
import jaimemaville from '../assets/images/jaimemaville.png';
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
        <img src={jaimemaville} alt="j'aime ma ville" className="imgVille" />
      </div>
    );
  }
}

export default Demo;
