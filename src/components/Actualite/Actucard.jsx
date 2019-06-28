import React from 'react';
import './ActuCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    marginTop: 24,
    borderBottom: '7px solid #00FF88',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  hide: {
    display: 'none',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
  },
}));

export default function Actucard({ solution }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [hided, setHided] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
    setHided(!hided);
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={clsx(classes.cover, {
          [classes.hide]: hided,
        })}
        image={`./assets/${solution.issues.type.name}.png`}
        title={solution.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {solution.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {solution.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Details</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id vulputate lacus.
              Nam dignissim placerat ante. Proin et enim vel mi maximus tincidunt.
              In tincidunt sit amet turpis a gravida. Aenean vehicula id nisl faucibus pharetra.
              Pellentesque porta sodales eros, tincidunt ultricies est faucibus eget.
              Nulla et lacus nulla.
              Nullam non euismod dolor. Etiam pretium mollis fermentum. Morbi felis sapien,
              varius eu malesuada ut,
              aliquam ut augue. Sed condimentum dictum felis eget convallis.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id vulputate lacus.
              Nam dignissim placerat ante. Proin et enim vel mi maximus tincidunt.
              In tincidunt sit amet turpis a gravida. Aenean vehicula id nisl faucibus pharetra.
              Pellentesque porta sodales eros, tincidunt ultricies est faucibus eget.
              Nulla et lacus nulla.
              Nullam non euismod dolor. Etiam pretium mollis fermentum. Morbi felis sapien,
              varius eu malesuada ut,
              aliquam ut augue. Sed condimentum dictum felis eget convallis.
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}
