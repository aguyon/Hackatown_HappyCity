import React, { Component } from 'react';
import './style.css';
// import 'react-leaflet-markercluster/dist/styles.min.css';
// import L from 'leaflet';
import {
  Map as LeafletMap,
  Marker,
  TileLayer,
  // GeoJSON,
  ScaleControl,
  // CircleMarker,
  // Tooltip,
} from 'react-leaflet';
import constants from './const';

import LocateButton from './locateButton';

const { userIcon } = constants();


class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      location: {
        lat: 46.227638,
        lng: 2.213749,
      },
      haveUsersLocation: false,
      zoom: 15,
    };
  }

  componentDidMount() {
    const map = this.mapRef.current.leafletElement;
    map.locate({ setView: true, watch: false })
      .on('locationfound', async (e) => {
        const {
          latitude, longitude,
        } = e;
        this.setState({ location: { lat: latitude, lng: longitude } });
      })
      .on('locationerror', (e) => {
        console.log('Location access denied.', e);
        fetch('https://ipapi.co/json')
          .then(res => res.json())
          .then(async (location) => {
            const { latitude, longitude } = location;
            this.setState({ location: { lat: latitude, lng: longitude } });
          });
      });
  }

  getToMyPosition = () => {
    const { location, zoom } = this.state;
    const map = this.mapRef.current.leafletElement;
    map.setView(location, zoom);
  };

  // onMove = (e) => {
  //   // const map = this.mapRef.current.leafletElement;
  //   // const center = e.target.getCenter();
  //   // const zoom = e.target.getZoom();
  //   // console.log(zoom);
  // };

  render() {
    // const { filters } = this.props;
    const {
      location, haveUsersLocation,
    } = this.state;

    return (
      <LeafletMap
        preferCanvas
        className="map"
        center={location}
        zoom={16}
        maxZoom={18}
        minZoom={16}
        // onMoveEnd={this.onMove}
        ref={this.mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        {
          haveUsersLocation
            ? (
              <Marker
                icon={userIcon}
                position={location}
              />
            )
            : null
        }
        <LocateButton getToMyPosition={this.getToMyPosition} />
        <ScaleControl
          position="bottomright"
          imperial={false}
        />
      </LeafletMap>
    );
  }
}

export default Map;
