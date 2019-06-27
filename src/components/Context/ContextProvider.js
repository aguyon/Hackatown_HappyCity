/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import axios from 'axios';

import constants from '../Map/const';

const { issuesIcons, leafletIcon } = constants();

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
          icon: leafletIcon(issuesIcons[0]),
          text: 'je suis un marqueur sur une map, super',
        },
        {
          type: 'Espaces verts',
          position: [46.223678, 2.213749],
          icon: leafletIcon(issuesIcons[0]),
          text: 'je suis un marqueur sur une map, super',
        },
        {
          type: 'Espaces verts',
          position: [46.227838, 2.213769],
          icon: leafletIcon(issuesIcons[0]),
          text: 'je suis un marqueur sur une map, super',
        },
      ],
      issuesList: [
        {
          type: 'Espaces verts',
          icon: issuesIcons[0],
        },
        {
          type: 'Poubelles pas fraîches',
          icon: issuesIcons[1],
        },
        {
          type: 'Balek',
          icon: issuesIcons[2],
        },
      ],
      addMarker: this.addMarker,
      selectIcon: this.selectIcon,
    };
  }

  componentWillMount() {
    axios.get('http://134.209.194.234/api/issues')
      .then(res => console.log(res.data['hydra:member']));
  }

  addMarker = (e) => {
    const { issues, selectedIcon } = this.state;
    if (selectedIcon) {
      issues.push({
        type: e.type,
        icon: leafletIcon(selectedIcon.icon),
        position: e.latlng,
        text: 'je suis un marqueur sur une map, génial!',
      });
      this.setState({ issues });
    }
  }

  selectIcon = (icon) => {
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
