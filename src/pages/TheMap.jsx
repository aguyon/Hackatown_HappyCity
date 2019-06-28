import React, { Component } from 'react';
import Map from '../components/Map/index';
import MapMenu from '../components/MapMenu/MapMenu';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import SearchBar from '../components/Map/search';
import FilterButton from '../components/FilterButton/FilterButton';
import Comments from '../components/Comments/Comments';
import withContext from '../components/Context/withContext';

class TheMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userInfo } = this.props;
    const { showingComments } = this.props;
    return (
      <div>
        <div>
          <BurgerButton />
          {
            userInfo && userInfo.role === 'admin' ? (
              null
            ) : <ProfilButton />
          }
          <SearchBar />
          <FilterButton />
          {
            showingComments
              ? <Comments />
              : null
          }
        </div>
        <div>
          <Map />
          <MapMenu />
        </div>
      </div>
    );
  }
}

export default withContext(TheMap);
