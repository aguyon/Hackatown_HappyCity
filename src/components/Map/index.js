import React, { Component } from 'react';
import './style.css';
// import 'react-leaflet-markercluster/dist/styles.min.css';
import L from 'leaflet';
import {
  Map as LeafletMap,
  Marker,
  TileLayer,
  Popup,
  ScaleControl,
  // GeoJSON,
  // CircleMarker,
  // Tooltip,
} from 'react-leaflet';
import withContext from '../Context/withContext';

import LocateButton from './locateButton';

import constants from './const';

const { userIcon } = constants();

// A virer quand on aura des icônes custom

// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;

/* eslint-disable global-require */
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      location: {
        lat: 46.227638,
        lng: 2.213749,
      },
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
      .on('locationerror', () => {
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
  // };

  render() {
    // const { filters } = this.props;
    const { addMarker, issues } = this.props;
    const {
      location,
    } = this.state;

    return (
      <LeafletMap
        preferCanvas
        className="map"
        center={location}
        zoom={16}
        maxZoom={18}
        minZoom={16}
        onClick={addMarker}
        // onMoveEnd={this.onMove}
        ref={this.mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />

        <Marker
          icon={userIcon}
          position={location}
        />
        {
          issues.map((issue, i) => (
            <Marker
              // icon={marker.icon}
              key={`issue-${i + 1}`}
              position={issue.position}
            >
              <Popup>
                <span>
                  {
                    issue.text
                  }
                </span>
              </Popup>
            </Marker>
          ))
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

export default withContext(Map);
