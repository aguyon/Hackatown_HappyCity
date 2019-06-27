import React from 'react';
import Grid from '@material-ui/core/Grid';
import withContext from '../components/Context/withContext';
import ProfilButton from '../components/ProfilButton';
import BurgerButton from '../components/BurgerButton';
import Actucard from '../components/Actualite/Actucard';

function Actualite({ actucards }) {
  return (
    <div>
      <div>
        <BurgerButton />
        <ProfilButton />
      </div>
      <div className="HappyTitle">
        Actualités
      </div>
      <div className="nbissues">
        Nombre d issues ont étaient résolus par la mairie
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
          actucards.map((card, i) => (
            <div key={`card-${i + 1}`}>
              {
                <Actucard issue={card} />
              }
            </div>
          ))
        }
      </Grid>
    </div>
  );
}

export default withContext(Actualite);
