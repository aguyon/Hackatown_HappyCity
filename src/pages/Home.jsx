import React, { Component } from 'react';
import Presentation from './Presentation';
import '../App.css';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          <BurgerButton />
          <ProfilButton />
        </div>
        <div className="presentation">
          <Presentation />
        </div>
      </div>
    );
  }
}

export default Home;
