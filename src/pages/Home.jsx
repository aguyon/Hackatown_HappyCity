import React, { Component } from 'react';
import ProfilButton from '../components/ProfilButton';
import BurgerButton from '../components/BurgerButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <BurgerButton />
          <ProfilButton />
        </div>
        <div>
          Coucou
        </div>
      </div>
    );
  }
}

export default Home;
