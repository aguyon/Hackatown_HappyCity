import React, { Component } from 'react';
import Map from '../components/Map/index';
import MapMenu from '../components/MapMenu/MapMenu';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import FilterButton from '../components/FilterButton/FilterButton';

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
          <FilterButton />
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
