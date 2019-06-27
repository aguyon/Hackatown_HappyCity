import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TargetGreen from '../../assets/icons/target-green.png';

const useStyles = makeStyles({
  locateButton: {
    position: 'absolute',
    right: '24px',
    bottom: '24px',
    backgroundImage: `url(${TargetGreen})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '60px',
    height: '60px',
    zIndex: 1000,
  },
});

export default function LocateButton({ getToMyPosition }) {
  const classes = useStyles();
  return (
    <Avatar className={classes.locateButton} onClick={getToMyPosition} />
  );
}
