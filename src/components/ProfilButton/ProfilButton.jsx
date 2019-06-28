import React, { Component } from 'react';
import './ProfilButton.css';
import { Link } from 'react-router-dom';
import withContext from '../Context/withContext';

class ProfilButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return (
        <Link to="/profil">
          <div className="ProfilButton" />
        </Link>
      );
    }
    return (
      <Link to="/connexion">
        <div className="ProfilButton" />
      </Link>
    );
  }
}

export default withContext(ProfilButton);
