import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MyLocation from '@material-ui/icons/MyLocation';

const useStyles = makeStyles({
  locateButton: {
    margin: 10,
    zIndex: 10000,
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: 'white',
    color: 'black',
    boxShadow: '5px 5px 1.2em grey',
    border: 'thin solid grey',
  },
});

export default function LocateButton({ getToMyPosition }) {
  const classes = useStyles();
  return (
    <Avatar className={classes.locateButton} onClick={getToMyPosition}>
      <MyLocation />
    </Avatar>
  );
}
