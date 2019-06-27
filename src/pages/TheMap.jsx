import React, { Component } from 'react';
import Map from '../components/Map/index';
import MapMenu from '../components/MapMenu/MapMenu';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import SearchBar from '../components/Map/search';


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
          <SearchBar />
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
