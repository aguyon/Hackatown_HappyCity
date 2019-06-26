import React, { Component } from 'react';
import Map from '../components/Map/index';

class TheMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default TheMap;
