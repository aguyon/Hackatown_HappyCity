import React, { Component } from 'react';
import Profil from '../components/Profil/index';
import BurgerButton from '../components/BurgerButton/BurgerButton';

class MyProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <BurgerButton />
        </div>
        <div>
          <Profil />
        </div>
      </div>
    );
  }
}

export default MyProfil;
