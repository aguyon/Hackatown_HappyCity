import React, { Component } from 'react';
import BurgerButton from '../components/BurgerButton/BurgerButton';

class Profil extends Component {
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
          Mon profil
        </div>
      </div>
    );
  }
}

export default Profil;
