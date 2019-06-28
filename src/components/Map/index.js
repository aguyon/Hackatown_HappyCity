import React, { Component } from 'react';
import './style.css';
// import 'react-leaflet-markercluster/dist/styles.min.css';
import {
  Map as LeafletMap,
  Marker,
  TileLayer,
  Popup,
  // GeoJSON,
  // CircleMarker,
  // Tooltip,
} from 'react-leaflet';
import withContext from '../Context/withContext';
import LocateButton from './locateButton';
import constants from './const';
import SearchBar from './search';
import MarkerContent from './MarkerContent';

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
    const {
      addMarker, issues, marker, filters,
    } = this.props;
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
        minZoom={1}
        onClick={addMarker}
        // onMoveEnd={this.onMove}
        ref={this.mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
        />
        {
          marker
            ? (
              <Marker
                icon={marker.icon}
                position={marker.position}
              />
            )
            : null
        }
        <Marker
          icon={userIcon}
          position={location}
        />
        {
          issues.map((issue, i) => (
            filters[issue.type.name]
              ? (
                <Marker
                  icon={issue.icon}
                  key={`issue-${i + 1}`}
                  position={issue.location}
                >
                  <Popup>
                    <MarkerContent issue={issue} />
                  </Popup>
                </Marker>
              )
              : null
          ))
        }
        <LocateButton getToMyPosition={this.getToMyPosition} />
      </LeafletMap>
    );
  }
}

export default withContext(Map);
