import React from 'react';
import './FilterButton.css';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import withContext from '../Context/withContext';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const FilterButton = ({ issuesList, filters, changeFilters }) => {
  console.log(filters)
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
    >
      <form>
        {
          issuesList.map((issue, i) => (
            <label>
              {issue.name}
              <input
                type="checkbox"
                name={issue.name}
                checked={filters[issue.name]}
                onChange={() => changeFilters(issue.name)}
              />
            </label>

          ))
        }
      </form>
    </div>
  );

  return (
    <div>
      <button
        type="button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={toggleDrawer('left', true)}
        className="FilterButton"
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

export default withContext(FilterButton);
