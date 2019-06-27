import React from 'react';
import './BurgerButton.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const BurgerButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="BurgerButton" />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link to="/actualite">Les actu</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default BurgerButton;
