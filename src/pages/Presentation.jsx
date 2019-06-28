import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Demo from './demo';
import Icon from '../assets/images/HappyCityFullLogo.png';

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Presentation">
        <div className="logoBox">
          <img src={Icon} alt="Icon" className="Icon" />
        </div>
        <div className="previewBox">
          <Demo />
        </div>
        <Link to="/map" className="HappyButton">Go !</Link>
      </div>
    );
  }
}

export default Presentation;
