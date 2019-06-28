import React, { Component } from 'react';
import './SuccessCheck.css';

class SuccessCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
