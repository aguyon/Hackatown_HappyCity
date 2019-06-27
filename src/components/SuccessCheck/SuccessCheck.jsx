import React, { Component } from 'react';
import './SuccessCheck.css';
import { Link } from 'react-router-dom';

class SuccessCheck extends Component {
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
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip" />
          <span className="icon-line line-long" />
          <div className="icon-circle" />
          <div className="icon-fix" />
        </div>
      </div>
    );
  }
}

export default SuccessCheck;
