import React from 'react';
import './style.css';

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <h2 className="title">My Profil</h2>
        <h3 className="problemes">Issues Reported</h3>
        <h3 className="email">Email</h3>
      </div>
    );
  }
}

export default Profil;
