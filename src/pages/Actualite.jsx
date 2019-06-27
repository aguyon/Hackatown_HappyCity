import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Actucards from '../components/Actucards';
import ProfilButton from '../components/ProfilButton';
import BurgerButton from '../components/BurgerButton';

class Actualite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <BurgerButton />
          <ProfilButton />
        </div>
        <div>
          Actualités
        </div>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Actucards />
          <Actucards />
          <Actucards />
          <Actucards />
          <Actucards />
          <Actucards />
        </Grid>
      </div>
    );
  }
}

export default Actualite;
