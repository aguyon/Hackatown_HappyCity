import React from 'react';
import './BurgerButton.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import logo from '../../assets/images/HappyCityLogo.png';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const BurgerButton = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button>
          <Link to="/map" className="Vert">Carte</Link>
        </ListItem>
        <ListItem button>
          <Link to="/actualite" className="Vert">Actus</Link>
        </ListItem>
        <ListItem button>
          <Link to="/contact" className="Vert">Contact</Link>
        </ListItem>
      </List>
      <Divider />
      <img src={logo} alt="Logo" className="MenuLogo" />
    </div>
  );

  return (
    <div>
      <button
        type="button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={toggleDrawer('left', true)}
        className="BurgerButton"
      />

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
};

export default BurgerButton;
