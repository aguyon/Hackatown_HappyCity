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
      placingIcon: false,
      issues: [],
      marker: null,
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
      switchPlacingIcon: this.switchPlacingIcon,
    };
  }

  componentWillMount() {
    axios.get('http://134.209.194.234/api/issues')
      .then((res) => {
        console.log(res);
        console.log(res.data['hydra:member']);
        // this.setState({ issues: res.data['hydra:member'] });
      });
  }

  addMarker = (e) => {
    const { selectedIcon } = this.state;
    if (selectedIcon) {
      this.setState({
        placingIcon: true,
        marker: {
          type: e.type,
          icon: leafletIcon(selectedIcon.icon),
          position: e.latlng,
        },
      });
    }
  }

  selectIcon = (icon) => {
    this.setState({ selectedIcon: icon });
  }

  switchPlacingIcon = (bool) => {
    this.setState({
      placingIcon: bool,
      marker: null,
    });
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
