/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import axios from 'axios';

import constants from '../Map/const';

const { leafletIcon } = constants();

export const Context = React.createContext();

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      selectedIcon: null,
      placingIcon: false,
      issues: [],
      marker: null,
      filters: {},
      issuesList: [],
      actucards: [],
      solutions: [],
      isLoggedIn: false,
      isLog: this.isLog,
      userInfo: null,
      addMarker: this.addMarker,
      selectIcon: this.selectIcon,
      switchPlacingIcon: this.switchPlacingIcon,
      getUserInfo: this.getUserInfo,
      changeFilters: this.changeFilters,
      showingComments: false,
      showComments: this.showComments,
      showCommentsIssue: null,
    };
  }

  componentWillMount() {
    axios.get('http://134.209.194.234/api/types')
      .then((res) => {
        const filters = {};
        for (let i = 0; i < res.data['hydra:member'].length; i += 1) {
          filters[res.data['hydra:member'][i].name] = true;
        }
        this.setState({
          filters,
          issuesList: res.data['hydra:member'],
        });
      });
    axios.get('http://134.209.194.234/api/issues')
      .then((res) => {
        const data = res.data['hydra:member'];
        for (let i = 0; i < data.length; i += 1) {
          data[i].icon = leafletIcon(`./assets/${data[i].type.name}.png`);
        }
        this.setState({
          issues: data,
        });
      });
    axios.get('http://134.209.194.234/api/solutions')
      .then(res => this.setState({
        solutions: res.data['hydra:member'],
      }));
  }

  addMarker = (e) => {
    const { selectedIcon } = this.state;
    if (selectedIcon) {
      this.setState({
        placingIcon: true,
        marker: {
          type: e.type,
          icon: leafletIcon(`./assets/${selectedIcon}.png`),
          position: e.latlng,
        },
      });
    }
  }

  showComments = (bool, issue) => {
    console.log(issue)
    if (bool) {
      this.setState({
        showingComments: true,
        showCommentsIssue: issue,
      });
    } else {
      this.setState({ showingComments: false });
    }
  }

  selectIcon = (icon) => {
    this.setState({ selectedIcon: icon });
  }

  switchPlacingIcon = (bool) => {
    this.setState({
      selectedIcon: null,
      placingIcon: bool,
      marker: null,
    });
  }

  isLog = () => {
    this.setState({ isLoggedIn: true });
  }

  getUserInfo = (info) => {
    this.setState({ userInfo: info });
  }

  changeFilters = (filter) => {
    const { filters } = this.state;
    filters[filter] = !filters[filter];
    this.setState({ filters });
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
