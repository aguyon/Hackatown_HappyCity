import React, { Component } from 'react';
import Map from '../components/Map/index';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';

class TheMap extends Component {
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
          <Map />
        </div>
      </div>
    );
  }
}

export default TheMap;
