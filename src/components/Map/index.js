import React, { Component } from 'react';
import './style.css';
// import 'react-leaflet-markercluster/dist/styles.min.css';

import {
  Map as LeafletMap,
  // Marker,
  TileLayer,
  // GeoJSON,
  ScaleControl,
  // CircleMarker,
  // Tooltip,
} from 'react-leaflet';
// import ButtonLocaliser from './buttonLocaliser';


class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      location: {
        lat: 46.227638,
        lng: 2.213749,
      },
      // haveUsersLocation: false,
      zoom: 15,
    };
  }

  componentDidMount() {
    // const map = this.mapRef.current.leafletElement;

    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     this.setState({
    //       location: {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //       },
    //       haveUsersLocation: true,
    //     }, () => {
    //       const { location, zoom } = this.state;
    //       const { handleMove } = this.props;
    //       handleMove(location);
    //         this.antennas = data;
    //         const markers = data.filter(m => map.getBounds().contains(m));

    //         this.setState({
    //           markers,
    //         });
    //       }).catch(err => console.error(err));
    //     });
    //   },
    //   () => {
    //     fetch('https://ipapi.co/json')
    //       .then(res => res.json())
    //       .then((location) => {
    //         this.setState({
    //           location: {
    //             lat: location.latitude,
    //             lng: location.longitude,
    //           },
    //           haveUsersLocation: true,
    //         }, () => {
    //           const { zoom } = this.state;
    //           const { handleMove } = this.props;
    //           handleMove(location);
    //           antennaQuery(location.lng, location.lat, metterPerPixel(zoom)).then((data) => {
    //             this.antennas = data;
    //             const markers = data.filter(m => map.getBounds().contains(m));

    //             this.setState({
    //               markers,
    //             });
    //           }).catch(err => console.error(err));
    //         });
    //       });
    //   },
    // );
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
      location, // haveUsersLocation,
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
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        {/* {
          haveUsersLocation
            ? (
              <Marker
                icon={userIcon}
                position={location}
              />
            )
            : null
        } */}
        {/* <ButtonLocaliser getMyPosition={this.getToMyPosition} /> */}
        <ScaleControl
          position="bottomright"
          imperial={false}
        />
      </LeafletMap>
    );
  }
}

export default Map;
