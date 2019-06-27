import React, { Component } from 'react';
import Map from '../components/Map';
import MapMenu from '../components/MapMenu';
import ProfilButton from '../components/ProfilButton';
import BurgerButton from '../components/BurgerButton';

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
          <MapMenu />
        </div>
      </div>
    );
  }
}

export default TheMap;
