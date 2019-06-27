import React, { Component } from 'react';
import './ProfilButton.css';
import { Link } from 'react-router-dom';

class ProfilButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to="/profil">
        <div className="ProfilButton" />
      </Link>
    );
  }
}

export default ProfilButton;
