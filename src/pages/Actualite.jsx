import React from 'react';
import Grid from '@material-ui/core/Grid';
import withContext from '../components/Context/withContext';
import ProfilButton from '../components/ProfilButton/ProfilButton';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import Actucard from '../components/Actualite/Actucard';

function Actualite({ solutions }) {
  return (
    <div>
      <div>
        <BurgerButton />
        <ProfilButton />
      </div>
      <h2>Actualités</h2>
      <div className="nbissues">
        Dernières solutions proposées
      </div>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {
          solutions.map((card, i) => (
            <div key={`card-${i + 1}`}>
              {
                <Actucard solution={card} />
              }
            </div>
          ))
        }
      </Grid>
    </div>
  );
}

export default withContext(Actualite);
