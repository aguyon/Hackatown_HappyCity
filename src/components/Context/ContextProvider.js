/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
// import axios from 'axios';


import constants from '../Map/const';

const { menuIcons, userIcon } = constants();

export const Context = React.createContext();

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIcon: null,
      issues: [
        {
          type: 'Espaces verts',
          position: [46.227638, 2.213749],
          icon: userIcon,
          text: 'je suis un marqueur sur une map, super',
        },
        {
          type: 'Espaces verts',
          position: [46.223678, 2.213749],
          icon: userIcon,
          text: 'je suis un marqueur sur une map, super',
        },
        {
          type: 'Espaces verts',
          position: [46.227838, 2.213769],
          icon: userIcon,
          text: 'je suis un marqueur sur une map, super',
        },
      ],
      issuesList: [
        {
          type: 'Espaces verts',
          icon: menuIcons[0],
        },
        {
          type: 'Poubelles pas fraîches',
          icon: menuIcons[1],
        },
        {
          type: 'Balek',
          icon: menuIcons[2],
        },
      ],
      addMarker: this.addMarker,
      selectIcon: this.selectIcon,
    };
  }

  addMarker = (e) => {
    console.log(e);
    const { markers } = this.state;
    markers.push({
      type: e.type,
      icon: e.icon,
      position: e.latlng,
      text: 'je suis un marqueur sur une map, génial!',
    });
    this.setState({ markers });
  }

  selectIcon = (icon) => {
    console.log(icon);
    this.setState({ selectedIcon: icon });
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
