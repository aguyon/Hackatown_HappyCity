import React, { Component } from 'react';
import './ProfilButton.css';
import { Link } from 'react-router-dom';

class ProfilButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return (<Link to="/profil" />);
    }
    return (
      <Link to="/connexion">
        <div className="ProfilButton" />
      </Link>
    );
  }
}

export default ProfilButton;
