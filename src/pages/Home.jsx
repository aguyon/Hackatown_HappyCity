import React, { Component } from 'react';
import ProfilButton from '../components/ProfilButton';
import BurgerButton from '../components/BurgerButton';
import Presentation from './Presentation';
import '../App.css';

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
