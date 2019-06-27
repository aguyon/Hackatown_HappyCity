import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BikeIcon from '../assets/icons/bike-orange.png';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    marginTop: 100,
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Actucards() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={BikeIcon}
        title="piste cyclable"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
