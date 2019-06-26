import React, { Component } from 'react';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from '../components/Actucards';

class Actualite extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="actupage">
        <Grid
          item xs={12}
          container
          direction="row"
          justify="space-around"
          alignItems="center">
          <DeleteRoundedIcon />
          <DeleteRoundedIcon />
        </Grid>
        <Grid
          item xs={12}
          container
          direction="row"
          justify="center"
          alignItems="center">
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
        </Grid>
      </div>
    );
  }
}

export default Actualite;
