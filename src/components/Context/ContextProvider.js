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
      actucards: [
        {
          id: 50,
          icon: issuesIcons[0],
          title: 'The title',
          description: 'Le maire met son message ici',
          date: '10-10-19',
          score: 485,
          status: 'En cours',
        },
        {
          id: 48,
          icon: issuesIcons[1],
          title: 'The title 1',
          description: 'Le maire met son message ici 1',
          score: 398,
          status: 'Terminé',
        },
        {
          id: 35,
          icon: issuesIcons[2],
          title: 'The title 2',
          description: 'Le maire met son message ici 2',
          score: 152,
          status: 'Non résolu',
        },
      ],
      solutions: [],
      addMarker: this.addMarker,
      selectIcon: this.selectIcon,
    };
  }

  componentWillMount() {
    axios.get('http://134.209.194.234/api/issues')
      .then(res => console.log(res.data['hydra:member']));
    axios.get('http://134.209.194.234/api/solutions')
      .then(res => this.setState({
        solutions: res.data['hydra:member'],
      }));
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
    console.log(this.state.solutions);
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
