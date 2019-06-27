import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../App.css';
import Demo from './demo';
// import ProfilButton from '../components/ProfilButton';


class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="logoBox">
        logo
        </div>
        <Button variant="contained" color="primary" className="HappyButton">
          <Link to="/map">
          GO !
          </Link>
        </Button>
        <div className="previewBox">
          <Demo />
        </div>
      </div>
    );
  }
}

export default Presentation;
