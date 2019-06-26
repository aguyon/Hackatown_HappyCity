import React, { Component } from 'react';
import Map from '../components/Map';
import MapMenu from '../components/MapMenu';

class TheMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Map />
        <MapMenu />
      </div>
    );
  }
}

export default TheMap;
